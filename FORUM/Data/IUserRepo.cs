using System.Collections.Generic;
using FORUM.Models;
using FORUM.Dtos;

namespace FORUM.Data
{
    public interface IUserRepo
    {
        IEnumerable<User> GetAppUsers();
        User GetUserById(int id);
        User UserLogin(User user);
        void createUser(User user);
        bool SaveChanges();

       

    }
}