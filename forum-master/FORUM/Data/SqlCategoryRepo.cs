using System;
using System.Collections.Generic;
using System.Linq;
using FORUM.Models;
using Microsoft.EntityFrameworkCore;

namespace FORUM.Data
{
    public class SqlCategoryRepo : ICategoryRepo
    {
        private ForumContext _context;

        public SqlCategoryRepo(ForumContext context)
        {
            _context = context;
            
        }

        public void createCategory(Category category)
        {
                if(category == null){
                        throw new ArgumentNullException(nameof(category));
        
                    }
                    _context.Category.Add(category); 
         }

       

        public IEnumerable<Category> GetAppCategory()
        {
                    return _context.Category
                            .ToList();      
        }

       
        public Category GetCategoryById(int id)
        {
                return _context.Category
                 .FirstOrDefault(c => c.Id == id);
        }
        public Category GetCategoryByIdWithPosts(int id)
        {
                return _context.Category
                 .Include(u => u.posts)
                 
                 .FirstOrDefault(c => c.Id == id);
        }


        public bool SaveChanges()
        {
           return (_context.SaveChanges() >= 0); 
        }
    }
}