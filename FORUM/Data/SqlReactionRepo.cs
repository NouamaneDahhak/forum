using System;
using System.Collections.Generic;
using System.Linq;
using FORUM.Models;
using Microsoft.EntityFrameworkCore;

namespace FORUM.Data
{
    public class SqlReactionRepo : IReactionRepo
    {
        private ForumContext _context;

        public SqlReactionRepo(ForumContext context)
        {
            _context = context;
            
        }

        public void createReaction(Reaction reaction)
        {
                if(reaction == null){
                        throw new ArgumentNullException(nameof(reaction));
        
                }
                    _context.Reaction.Add(reaction); 
         }

       

        public IEnumerable<Reaction> GetPostReactionById(int id)
        {
                    return _context.Reaction
                            .Include(u => u.user)
                            .Where(p => p.postId == id)

                            .ToList();      
        }

    

        public bool SaveChanges()
        {
           return (_context.SaveChanges() >= 0); 
        }
    }
}