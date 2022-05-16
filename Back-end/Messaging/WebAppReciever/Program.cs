using MassTransit;
using SharedLibrary;

RabbitMQSettings rMQSettings = new RabbitMQSettings();

// Builder:
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddMassTransit(config => {
    // Add Consumer which reads the sent message;
    config.AddConsumer<OrderConsumer>();
    config.UsingRabbitMq((ctx, cfg) =>
    {
        // Connect to RabbitMQ server;
        cfg.Host("amqp://" + rMQSettings.Username + ":" + rMQSettings.Password + "@" + rMQSettings.IPAddress);
        // Add endpoint which will recieve messages from the [model] queue, these messages will be returned in via Consumer class;
        // In here you will be able to change settings, like setting the queue messageretry interval and more;
        cfg.ReceiveEndpoint(rMQSettings.QueueName, c =>
        {
            c.ConfigureConsumer<OrderConsumer>(ctx);
        });
    });
});
builder.Services.AddMassTransitHostedService();

// App:
var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();
app.MapGet("/", () => "Hello World!");
app.Run();