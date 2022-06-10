using Microsoft.EntityFrameworkCore;
using EF_App.Model;

namespace EF_App.Context
{
    public class PostServiceDbContext : DbContext
    {

        public PostServiceDbContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        public DbSet<Post> Post { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Category> Category { get; set; }

        private readonly string _connectionString;


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
    }
}
