using Musicize_API.Model;
using Musicize_API.Data;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace UserHandler.Microservice.Test.Stubs
{
    internal class UserDALStub : IUserDAL
    {
        public bool? testValue = null;

        public ActionResult AddUser(User user)
        {
            if (testValue == true)
            {
                return new OkResult();
            }
            else
            {
                return new NotFoundResult();
            }
        }

        public List<User> GetUsers()
        {
            if (testValue == true)
            {
                return new List<User>();
            }
            else
            {
                return null;
            }

        }

        public ActionResult PutUser(User user)
        {
            if (testValue == true)
            {
                return new OkResult();
            }
            else
            {
                return null;
            }
        }

        public ActionResult GetUser(string id)
        {
            if (testValue == true)
            {
                return new OkResult();
            }
            else
            {
                return null;
            }
        }

        public ActionResult DeleteUser(string id)
        {
            if (testValue == true)
            {
                return new OkResult();
            }
            else
            {
                return null;
            }
        }
    }
}