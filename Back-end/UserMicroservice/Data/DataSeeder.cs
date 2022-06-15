using Musicize_API.Context;
using Musicize_API.Model;

namespace Musicize_API.Data
{
    public class DataSeeder
    {
        private readonly UserDBContext userDBContext;

        public DataSeeder(UserDBContext userDBContext)
        {
            this.userDBContext = userDBContext;
        }

        public void Seed()
        {
            if(!userDBContext.User.Any())
            {
                var users = new List<User>()
                {
                    new User()
                    {
                        Id = Guid.Parse("38488db2-47b6-4493-b071-479199e76541").ToString(),
                        FullName = "Youssef El Jaddaoui",
                        LoginMethod = "Google"
                    },
                    new User()
                    {
                        Id = Guid.NewGuid().ToString(),
                        FullName = "Test Gebruiker",
                        LoginMethod = "Google"
                    }
                };

                userDBContext.User.AddRange(users);
                userDBContext.SaveChanges();
            }
        }
    }
}
