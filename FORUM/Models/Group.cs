using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace FORUM.Models
{
    public class Group
    {

         [Key]
         public int Id { get; set; }

         public bool title { get; set; }

         public string date { get; set; }
        
         [ForeignKey("userId")]
         public User user { get; set; }
   


    }
}