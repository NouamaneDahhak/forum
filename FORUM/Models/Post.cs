using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations.Schema ;
namespace FORUM.Models
{
    public class Post
    {

         [Key]
         public int Id { get; set; }
         public bool epingler { get; set; }
        
         public int userId  { get; set; }
         public int categoryId { get; set; }

         public string title { get; set; }

         public string content { get; set; }
         public string img { get; set; }

         public string date { get; set; }
         public string views { get; set; }
         public string nbComment { get; set; }

         public int nblike { get; set; }
         public int nbdislike { get; set; }
         [ForeignKey("userId")]
         public User user { get; set; }
         [ForeignKey("categoryId")]
         public Category category { get; set; }
         public List<Comment> comments { get; set; }

        

         




    }
}