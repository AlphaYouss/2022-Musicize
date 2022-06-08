using EF_App.Data;
using EF_App.Model;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddScoped<IDAL, DAL>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Build the app
var app = builder.Build();


// IF we are developing, add a swagger UI and exceptionsPage
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseDeveloperExceptionPage();
}

// Get Hello world!
app.MapGet("/", () =>
{
    return "Hello World!";
});

// Get all post from a category limited at a count variable
app.MapGet("/all", ([FromServices] IDAL db, string category, int count) =>
{
    return db.ReadLatestPosts(category, count);
});

// Create post
app.MapPost("/create", ([FromServices] IDAL db, Post post) =>
{
    db.CreatePost(post);
    return Results.Created("", post);
});

// Run seeddata
app.MapGet("/initDB", ([FromServices] IDAL db, [FromQuery] int countUsers, [FromQuery] int countCategories) =>
{
    db.InitDatabase(countUsers, countCategories);
});

// Run the app
app.Run();