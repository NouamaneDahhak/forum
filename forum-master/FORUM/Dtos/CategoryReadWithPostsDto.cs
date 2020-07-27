using FORUM.Models;
using FORUM.Dtos;
using System.Collections.Generic;

namespace FORUM.Dtos
{
    public class CategoryReadWithPostsDto
    {
       
         public int Id { get; set; }

         public string value { get; set; }
         public string img { get; set; }
        
        

         public List<PostReadWithoutAnyDTO> posts { get; set; }


         

    }
}