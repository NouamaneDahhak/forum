using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace FORUM.Models
{
    public class Reaction
    {

         [Key]
         public int Id { get; set; }

         public bool like { get; set; }

         public string date { get; set; }
         public Post post { get; set; }
        
         public User user { get; set; }

         public int postId { get; set; }
        public int  userId { get; set; }


    }
}