using FORUM.Models;

namespace FORUM.Dtos
{
    public class UserCreateDto
    {

         public int Id { get; set; }
         public string username { get; set; }
         public string password { get; set; }
         public string email { get; set; }
         public string img { get; set; }



    }
}