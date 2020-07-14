using FORUM.Models;
using System.ComponentModel.DataAnnotations.Schema ;

namespace FORUM.Dtos
{
    public class PostUpdateDto
    {
         public string title { get; set; }
         public bool epingler { get; set; }

         public string content { get; set; }
         public string img { get; set; }

         public string date { get; set; }
         public string views { get; set; }
         public string nbComment { get; set; }
         public int nblike { get; set; }
         public int nbdislike { get; set; }
         public int categoryId { get; set; }
         public int postId { get; set; }





         

    }
}