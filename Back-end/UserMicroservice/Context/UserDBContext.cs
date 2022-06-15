using Microsoft.EntityFrameworkCore;
using Musicize_API.Model;

namespace Musicize_API.Context
{
    public class UserDBContext : DbContext
    {
        public UserDBContext()
        {

        }

        public UserDBContext(DbContextOptions<UserDBContext> options) : base(options)
        {
        }

        public DbSet<User> User { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var configuration = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("appsettings.json").Build();
            var conntectionString = configuration.GetConnectionString("AppDb");
            optionsBuilder.UseSqlServer(conntectionString);
        }
    }
}
