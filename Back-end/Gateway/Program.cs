using Ocelot.DependencyInjection;
using Ocelot.Middleware;

IConfiguration configuration = new ConfigurationBuilder().AddJsonFile("ocelot.json").Build();

var builder = WebApplication.CreateBuilder(args);

builder.Host.UseContentRoot(Directory.GetCurrentDirectory())
    .ConfigureAppConfiguration((hostingContext, config) =>
    {
        config
            .SetBasePath(hostingContext.HostingEnvironment.ContentRootPath)
            .AddJsonFile("appsettings.json", true, true)
            .AddJsonFile($"appsettings.{hostingContext.HostingEnvironment.EnvironmentName}.json", true, true)
            .AddJsonFile("ocelot.json")
            .AddEnvironmentVariables();
    })
    .ConfigureServices(s =>
    {
        s.AddOcelot();
        s.AddControllers();
        s.AddSwaggerForOcelot(configuration);
    });

builder.Services.AddCors(options => options.AddPolicy("Policy", builder =>
{
    builder.WithOrigins("http://localhost:3000")
             .AllowAnyMethod()
             .AllowAnyHeader();
}));

var app = builder.Build();

app.UseCors("Policy");

app.UseSwaggerForOcelotUI(opt =>
{
    opt.PathToSwaggerGenerator = "/swagger/docs";
});

app.UseOcelot().Wait();

app.Run();
