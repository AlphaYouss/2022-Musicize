using Microsoft.AspNetCore.Mvc;
using Musicize_API.Context;
using Musicize_API.Model;

namespace Musicize_API.Data
{
    public class UserDAL : IUserDAL
    {
        private readonly UserDBContext db;
        public UserDAL(UserDBContext db)
        {
            this.db = db;
        }

        public List<User> GetUsers() => db.User.ToList();

        public ActionResult PutUser(User user)
        {
            db.User.Update(user);
            db.SaveChanges();
            db.User.Where(x => x.Id == user.Id).FirstOrDefault();
            return new OkResult();
        }

        public ActionResult AddUser(User user)
        {
            db.User.Add(user);
            db.SaveChanges();
            return new OkResult();
        }

        public User GetUser(string id)
        {
            return db.User.Where(x => x.Id == id).FirstOrDefault();
        }

        public ActionResult DeleteUser(string id)
        {
            db.User.Remove(db.User.Where(x => x.Id == id).FirstOrDefault());
            db.SaveChanges();
            return new OkResult();
        }
    }
}
