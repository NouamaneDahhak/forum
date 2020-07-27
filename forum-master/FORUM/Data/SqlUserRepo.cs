using System;
using System.Collections.Generic;
using System.Linq;
using FORUM.Models;
using FORUM.Dtos;
using Microsoft.EntityFrameworkCore;

namespace FORUM.Data
{
    public class SqlUserRepo : IUserRepo
    {
        private ForumContext _context;

        public SqlUserRepo(ForumContext context)
        {
            _context = context;
            
        }

           public void createUser(User user)
        {
             if(user == null){
                 throw new ArgumentNullException(nameof(user));
 
             }
             _context.User.Add(user);
        }

          public void UpdateUser(User user)
        {


             if(user == null){
                 throw new ArgumentNullException(nameof(user));
 
             }
             _context.User.Update(user);
        }
        public IEnumerable<User> GetAppUsers()
        {
            return _context.User
            .Include(p => p.Posts)
            .ToList();
         }

        public User GetUserById(int id)
        {
            return _context.User
            .Include(p => p.Posts)
            .FirstOrDefault(p => p.Id == id);
             
        }

        public User UserLogin(User user)
        {
            return _context.User
            .FirstOrDefault(p => p.email == user.email && p.password == user.password);
             
        }
         public bool SaveChanges()
        {
           return (_context.SaveChanges() >= 0); 
        }
    }
}