using Microsoft.AspNetCore.Mvc;
using Musicize_API.Model;

namespace Musicize_API.Data
{
    public interface IUserDAL
    {
        ActionResult AddUser(User user);
        List<User> GetUsers();
        ActionResult PutUser(User user);
        User GetUser(string id);
        ActionResult DeleteUser(string id);
    }
}