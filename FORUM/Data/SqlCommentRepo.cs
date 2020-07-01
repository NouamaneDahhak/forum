using System;
using System.Collections.Generic;
using System.Linq;
using FORUM.Models;
using Microsoft.EntityFrameworkCore;

namespace FORUM.Data
{
    public class SqlCommentRepo : ICommentRepo
    {
        private ForumContext _context;

        public SqlCommentRepo(ForumContext context)
        {
            _context = context;
            
        }

        public void createComment(Comment comment)
        {
                if(comment == null){
                        throw new ArgumentNullException(nameof(comment));
        
                    }
                    _context.Comments.Add(comment); 
         }

       

        public IEnumerable<Comment> GetAppComments()
        {
                    return _context.Comments
                            .Include(p => p.post)
                            .Include(u => u.user)
                            .Include(c => c.comment)
                            .ToList();      
        }

       
        public Comment GetCommentById(int id)
        {
                return _context.Comments
                 .Include(u => u.user)
                 .FirstOrDefault(p => p.Id == id);
        }


        public bool SaveChanges()
        {
           return (_context.SaveChanges() >= 0); 
        }
    }
}