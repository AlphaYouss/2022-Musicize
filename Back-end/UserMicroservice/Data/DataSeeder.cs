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
                        FirstName = "Youssef",
                        LastName = "El Jaddaoui",
                        Email = "youss.eljaddaoui@gmail.com",
                        DateOfBirth = new DateTime(2000, 1, 31).ToString("dd-MM-yyyy"),
                    },
                    new User()
                    {
                        Id = Guid.NewGuid().ToString(),
                        FirstName = "Test",
                        LastName = "Gebruiker",
                        Email = "test@gmail.com",
                        DateOfBirth = new DateTime(2002, 4, 26).ToString("dd-MM-yyyy"),
                    }
                };

                userDBContext.User.AddRange(users);
                userDBContext.SaveChanges();
            }
        }
    }
}
