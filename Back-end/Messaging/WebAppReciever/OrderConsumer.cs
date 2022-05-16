using SharedLibrary;
using MassTransit;

internal class OrderConsumer : IConsumer<Order>
{
    private ILogger<OrderConsumer> logger;

    public OrderConsumer(ILogger<OrderConsumer> logger)
    {
        this.logger = logger;
    }
    public async Task Consume(ConsumeContext<Order> context)
    {
        // Log message in console;
        logger.LogInformation($"Got a new message {context.Message.name}");
    }
}