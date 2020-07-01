using FORUM.Models;

namespace FORUM.Dtos
{
    public class CommentReadDto
    {   
        
         public int Id { get; set; }

         public string content { get; set; }
         public string img { get; set; }

         public string date { get; set; }

         public int postId { get; set; }
         public int userId { get; set; }
         public int commentId { get; set; }

        public Comment comment { get; set; }
        
        public Post post { get; set; }

         public UserReadDto user { get; set; }


    }
}