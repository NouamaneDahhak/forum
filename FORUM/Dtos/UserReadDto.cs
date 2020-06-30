using System.Collections.Generic;
using FORUM.Models;

namespace FORUM.Dtos
{
    public class UserReadDto{
 

         public int Id { get; set; }
         public string username { get; set; }
         public string password { get; set; }
         public string email { get; set; }
         public string img { get; set; }



    }
}