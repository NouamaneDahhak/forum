using FORUM.Models;

namespace FORUM.Dtos
{
    public class ReactionCreateDto
    {
        
         public int Id { get; set; }
         public int postId { get; set; }
        public int  userId { get; set; }
         public bool like { get; set; }

         public string date { get; set; }

    }
}