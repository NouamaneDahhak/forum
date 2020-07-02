using FORUM.Models;
using System.Collections.Generic;

namespace FORUM.Dtos
{
    public class ReactionReadDto
    {
       
         public int Id { get; set; }

         public bool like { get; set; }

         public string date { get; set; }
        
         public UserReadDto user { get; set; }

         public int postId { get; set; }
        public int  userId { get; set; }


         

    }
}