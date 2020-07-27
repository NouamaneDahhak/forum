using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace FORUM.Models
{
    public class Comment
    {

         [Key]
         public int Id { get; set; }
    
         public Post post { get; set; }
        public int userId { get; set; }
        public int postId { get; set; }


         public string content { get; set; }
         public string img { get; set; }

         public string date { get; set; }


        

         public User user { get; set; }


    }
}