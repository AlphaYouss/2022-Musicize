using EF_App.Context;
using EF_App.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EF_App.Data
{
    public class DAL : IDAL
    {
        private readonly List<string> _connectionStrings = new List<string>();

        public DAL(IConfiguration configuration)
        {
            var connectionStrings = configuration.GetSection("ConnectionStrings");
            foreach (var connectionString in connectionStrings.GetChildren())
            {
                _connectionStrings.Add(connectionString.Value);
            }
        }

        public async Task<ActionResult<IEnumerable<Post>>> ReadLatestPosts(string category, int count)
        {
            using var dbContext = new PostServiceDbContext(GetConnectionString(category));
            return await dbContext.Post.OrderByDescending(p => p.PostId).Take(count).Include(x => x.User).Where(p => p.CategoryId == category).ToListAsync();
        }


        public async Task<int> CreatePost(Post post)
        {
            using var dbContext = new PostServiceDbContext(GetConnectionString(post.CategoryId));
            dbContext.Post.Add(post);
            return await dbContext.SaveChangesAsync();
        }


        public void InitDatabase(int countUsers, int countCategories)
        {
            foreach (var connectionString in _connectionStrings)
            {
                using var dbContext = new PostServiceDbContext(connectionString);
                dbContext.Database.EnsureDeleted();
                dbContext.Database.EnsureCreated();
                for (int i = 1; i <= countUsers; i++)
                {
                    dbContext.User.Add(new User { Name = "User" + i, Version = 1 });
                    dbContext.SaveChanges();
                }
                for (int i = 1; i <= countCategories; i++)
                {
                    dbContext.Category.Add(new Category { CategoryId = "Category" + i });
                    dbContext.SaveChanges();
                }
            }
        }

     
        private string GetConnectionString(string category)
        {
            // Change logic to put specific posts to specific shards

            string foundNumber = new string(category.SkipWhile(c => !char.IsDigit(c))
                         .TakeWhile(c => char.IsDigit(c))
                         .ToArray());
            int categoryNumber = Convert.ToInt32((foundNumber).ToLower());

            if(categoryNumber % 2 == 0)
            {
                return _connectionStrings[0];
            }
            else{
                return _connectionStrings[1];
            }
        }
    }
}
