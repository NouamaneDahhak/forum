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

        public IEnumerable<Post> GetAppPosts()
        {
            return _context.Posts
            .Include(p => p.user)
            .ToList();
         }

        public Post GetPostById(int id)
        {
            return _context.Posts
            .Include(p => p.user)
            .FirstOrDefault(p => p.Id == id);
             
        }

        public bool SaveChanges()
        {
           return (_context.SaveChanges() >= 0); 
        }
    }
}