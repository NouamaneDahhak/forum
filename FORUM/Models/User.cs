using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FORUM.Models
{
    public class User
    {
         [Key]
         public int Id { get; set; }
         public string username { get; set; }
         public string password { get; set; }
         public string email { get; set; }
         public string img { get; set; }
         public string Usertype { get; set; }

         

         public List<Post> Posts { get; set; }

    }
}