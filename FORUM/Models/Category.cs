using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using System.Collections.Generic;

namespace FORUM.Models
{
    public class Category
    {

         [Key]
         public int Id { get; set; }

         public string value { get; set; }
         public string img { get; set; }

         

         public List<Post> posts { get; set; }


    }
}