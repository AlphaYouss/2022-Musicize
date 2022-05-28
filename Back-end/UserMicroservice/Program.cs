using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Musicize_API.Context;
using Musicize_API.Data;
using Musicize_API.Model;

var builder = WebApplication.CreateBuilder(args);

// Add DB connection
var connectionString = builder.Configuration.GetConnectionString("AppDb");
builder.Services.AddDbContext<UserDBContext>(x => x.UseSqlServer(connectionString));

// Add dataSeeder
builder.Services.AddTransient<DataSeeder>();

// Add DataRepo as interface, when the IDataRepository is called it will use DataRepository
builder.Services.AddScoped<IUserDAL, UserDAL>();

// Implementing Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options => options.AddPolicy("Policy", builder =>
{
    builder.WithOrigins("http://localhost:3000")
             .AllowAnyMethod()
             .AllowAnyHeader();
}));

var app = builder.Build();

// if 'dotnet run seeddata' is called, run the SeedData method
if (args.Length == 1 && args[0].ToLower() == "seeddata")
    SeedData(app);

void SeedData(IHost app)
{
    var scopedFactory = app.Services.GetService<IServiceScopeFactory>();

    using (var scope = scopedFactory.CreateScope())
    {
        var service = scope.ServiceProvider.GetService<DataSeeder>();
        service.Seed();
    }
}

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("Policy");

// Returns all users
app.MapGet("/users", ([FromServices] IUserDAL db) =>
{
    return db.GetUsers();
});

// Returns a specific user
app.MapGet("/user/{id}", ([FromServices] IUserDAL db, string id) =>
{
    return db.GetUser(id);
});

// Edits a specific user
app.MapPut("/user/{id}", ([FromServices] IUserDAL db, User user) =>
{
    return db.PutUser(user);
});

// Adds a user and returns the user list after being added.
app.MapPost("/user", ([FromServices] IUserDAL db, User user) =>
{
    return db.AddUser(user);
});

app.MapDelete("/user/{id}", ([FromServices] IUserDAL db, string id) =>
{
    return db.DeleteUser(id);
});

app.Run();

public partial class UserProgram { }