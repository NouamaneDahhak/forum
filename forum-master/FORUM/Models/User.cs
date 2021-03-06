using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FORUM.Models
{
    public class User
    {
         [Key]
         public int Id { get; set; }
         public string username { get; set; }
         public string password { get; set; }
         public string email { get; set; }
         public string img { get; set; }
         public string Usertype { get; set; }

         

         public List<Post> Posts { get; set; }


         public string nomEntreprise { get; set; }
         public string Nom { get; set; }
         public string prenom { get; set; }
         public string emailSecondaire { get; set; }
         public string adresse { get; set; }
         public string pays { get; set; }
         public string Region { get; set; }
         public string codePostal { get; set; }
         public string ville { get; set; }
         public string telephone1 { get; set; }
         public string telephone2 { get; set; }
         public string metier { get; set; }

    }
}