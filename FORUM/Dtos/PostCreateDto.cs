using FORUM.Models;

namespace FORUM.Dtos
{
    public class PostCreateDto
    {
         public int Id { get; set; }
         public string title { get; set; }

         public string content { get; set; }
         public string img { get; set; }

         public string date { get; set; }
         public string views { get; set; }
         public string nbComment { get; set; }

         public int userId { get; set; }
         public int categoryId { get; set; }

          public bool epingler { get; set; }


         


    }
}