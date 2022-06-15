using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Musicize_API.Data;
using Musicize_API.Model;
using System;
using System.Net.Http;
using UserHandler.Microservice.Test.Stubs;
using Xunit;

namespace UserMicroservice.Test
{
    public class UserMicroserviceTests : WebApplicationFactory<UserProgram>
    {
        // Create stub
        UserDALStub stub = new();

        protected override IHost CreateHost(IHostBuilder builder)
        {
            builder.ConfigureServices(services =>
            {
                services.AddScoped<IUserDAL, UserDALStub>();
            });
            return base.CreateHost(builder);
        }

        // Get users test passed
        [Fact]
        public async void GetUsersPassed()
        {
            var webAppFactory = new UserMicroserviceTests();
            HttpClient httpClient = webAppFactory.CreateClient();
            stub.testValue = true;

            var response = await httpClient.GetAsync("/users");
            response.EnsureSuccessStatusCode();
        }

        // Add user test passed
        [Fact]
        public async void AddUserPassed()
        {
            User user = new User
            {
                FullName = "Henk Steen",
                LoginMethod = "Google",
                Id = "38488db2-47b6-2213-b076-479199e31541"
            };

            var webAppFactory = new UserMicroserviceTests();
            HttpClient httpClient = webAppFactory.CreateClient();
            stub.testValue = true;

            string json = "{ }";
            StringContent httpContent = new(json, System.Text.Encoding.UTF8, "application/json");

            var response = await httpClient.PostAsync("/user", httpContent);
            response.EnsureSuccessStatusCode();
        }

        // Edit user test passed
        [Fact]
        public async void EditUserPassed()
        {
            User user = new User
            {
                FullName = "Heenk Steen",
                LoginMethod = "Google",
                Id = "38488db2-47b6-2213-b076-479199e31541"
            };

            var webAppFactory = new UserMicroserviceTests();
            HttpClient httpClient = webAppFactory.CreateClient();
            stub.testValue = true;

            string json = "{ }";
            StringContent httpContent = new(json, System.Text.Encoding.UTF8, "application/json");

            var response = await httpClient.PutAsync("/user/" + user.Id, httpContent);
            response.EnsureSuccessStatusCode();
        }

        // Get user test passed
        [Fact]
        public async void GetUserPassed()
        {
            string id = "38488db2-47b6-2213-b076-479199e31541";

            var webAppFactory = new UserMicroserviceTests();
            HttpClient httpClient = webAppFactory.CreateClient();
            stub.testValue = true;

            var response = await httpClient.GetAsync("/user/" + id);
            response.EnsureSuccessStatusCode();
        }

        // Remove user test passed
        [Fact]
        public async void RemoveUserPassed()
        {
            string id = "38488db2-47b6-2213-b076-479199e31541";

            var webAppFactory = new UserMicroserviceTests();
            HttpClient httpClient = webAppFactory.CreateClient();
            stub.testValue = true;

            var response = await httpClient.DeleteAsync("/user/" + id);
            response.EnsureSuccessStatusCode();
        }
    }
}