using FORUM.Models;
using System.Collections.Generic;

namespace FORUM.Dtos
{
    public class CategoryReadDto
    {
       
         public int Id { get; set; }

         public string value { get; set; }
         public string img { get; set; }
      
        
         public List<Post> posts { get; set; }



         

    }
}