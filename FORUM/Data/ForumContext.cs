using FORUM.Models;
using Microsoft.EntityFrameworkCore;

namespace FORUM.Data
{
    public class ForumContext : DbContext
    {
        public ForumContext(DbContextOptions<ForumContext> opt) : base(opt)
        {
            
        }



        public DbSet<Post> Posts { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Category> Category { get; set; }
    }
}