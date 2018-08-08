using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPIforAngular.Models;
namespace WebAPIforAngular.Controllers
{
    [Route("Users")]
    [Produces("application/json")]
    public class UsersController : Controller
    {
        public MyContext db = new MyContext();

        // GET: api/Users
        [Route("")]
        [Route("All")]
        [HttpGet]
        [HttpOptions]
        public IEnumerable<Users> Get()
        {
            return db.users.ToList();
        }

        // GET: api/Users/5
        [Route("Getbyid/{id}")]
        [HttpGet("{id}")]
        public Users Get(int id)
        {
            Users UserData = db.users.Where(u => u.UserId == id).SingleOrDefault();
            return UserData;
        }

        [Route("Add")]
        [HttpOptions("")]
        public void Post([FromBody]Users value)
        {
            db.users.Add(value);
            db.SaveChanges();

        }

        // PUT: api/Users/5

        [Route("Update/{id}")]
        [HttpOptions("")]
        public void Put(int id,[FromBody] Users value)
        {
            //var u = list<Users>(db.users.Select(d => d.UserId == id).ToList());
            Users UserData = db.users.Where(u => u.UserId == id).SingleOrDefault();
            UserData.Name = value.Name;
            UserData.UserName = value.UserName;
            UserData.Website = value.Website;
            UserData.Email = value.Email;
            UserData.Mobile = value.Mobile;
            db.SaveChanges();
        }


        [Route("Remove/{id}")]
        [HttpOptions("{id}", Name = "Remove")]
        public void Delete(int id)
        {
            Users userTbl = db.users.Where(u => u.UserId == id).SingleOrDefault();
            db.users.Remove(userTbl);
            db.SaveChanges();
        }
    }
}
