using FORUM.Models;
using System.Collections.Generic;

namespace FORUM.Dtos
{
    public class PostReadDto
    {
         public int Id { get; set; }
          public bool epingler { get; set; }

         public string title { get; set; }

         public string content { get; set; }

         public string img { get; set; }

         public string date { get; set; }
         public string views { get; set; }
         public string nbComment { get; set; }
         public UserReadDto user { get; set; }
         public CategoryReadDto category { get; set; }

         public int userId  { get; set; }
         public int categoryId { get; set; }

         
         public int nblike { get; set; }
         public int nbdislike { get; set; }

         public List<CommentReadDto> comments { get; set; }


         

    }
}