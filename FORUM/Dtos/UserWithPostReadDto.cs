using System.Collections.Generic;
using FORUM.Models;

namespace FORUM.Dtos
{
    public class UserWithPostReadDto{
 

         public int Id { get; set; }
         public string username { get; set; }
         public string email { get; set; }
         public string img { get; set; }

         public List<PostReadDto> posts;


    }
}