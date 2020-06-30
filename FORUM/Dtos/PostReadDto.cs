using FORUM.Models;

namespace FORUM.Dtos
{
    public class PostReadDto
    {
         public int Id { get; set; }
         public string title { get; set; }

         public string content { get; set; }

         public User user { get; set; }
    }
}