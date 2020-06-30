using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace FORUM.Models
{
    public class Post
    {

         [Key]
         public int Id { get; set; }
         public int userId  { get; set; }
         public string title { get; set; }

         public string content { get; set; }
         public string img { get; set; }

         public string date { get; set; }
         public string views { get; set; }
         public string nbComment { get; set; }

         public User user { get; set; }

    }
}