using System.Collections.Generic;
using FORUM.Models;
using FORUM.Dtos;

namespace FORUM.Data
{
    public interface IUserRepo
    {
        IEnumerable<User> GetAppUsers();
        User GetUserById(int id);
        void deleteUserById(int id);
        User UserLogin(User user);
        void createUser(User user);
        void UpdateUser(User user);

        
        bool SaveChanges();


        

       

    }
}