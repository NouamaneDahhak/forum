using System.Collections.Generic;
using FORUM.Models;

namespace FORUM.Data
{
    public interface IUserRepo
    {
        IEnumerable<User> GetAppUsers();
        User GetUserById(int id);

        void createUser(User user);

        bool SaveChanges();


    }
}