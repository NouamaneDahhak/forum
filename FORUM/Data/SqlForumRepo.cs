using System;
using System.Collections.Generic;
using System.Linq;
using FORUM.Models;
using Microsoft.EntityFrameworkCore;

namespace FORUM.Data
{
    public class SqlForumRepo : IPostRepo
    {
        private ForumContext _context;

        public SqlForumRepo(ForumContext context)
        {
            _context = context;

            
        }

        public void createPost(Post post)
        {
             if(post == null){
                 throw new ArgumentNullException(nameof(post));
 
             }
             _context.Posts.Add(post);
        }
        public void UpdatePost(Post post)
        {


             if(post == null){
                 throw new ArgumentNullException(nameof(post));
 
             }
             _context.Posts.Update(post);
        }

        public IEnumerable<Post> GetAppPosts()
        {
            return _context.Posts
            .Include(p => p.user)
            .Include(c => c.category)
            .Include(com => com.comments)
            .OrderByDescending(o=>o.Id)
            .ToList();
         }
        public IEnumerable<Post> GetAppPostsByCategory(int idCategory )
        {
            return _context.Posts
            .Where(p=> p.categoryId == idCategory )
            .Include(p => p.user)
            .Include(c => c.category)
            .Include(com => com.comments)
            .OrderByDescending(o=>o.Id)

            .ToList();
         }
        public IEnumerable<Post> GetAppPostsByUser(int user )
        {
            return _context.Posts
            .Where(p=> p.userId == user )
            .Include(p => p.user)
            .Include(c => c.category)
            .Include(com => com.comments)
            .ToList();
         }

        public Post GetPostById(int id)
        {
            return _context.Posts
             

            .Include(p => p.user)
            .Include(c => c.category)
            .FirstOrDefault(p => p.Id == id);
             
        }

      

        public bool SaveChanges()
        {
           return (_context.SaveChanges() >= 0); 
        }

       
    }
}