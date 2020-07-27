using AutoMapper;
using FORUM.Dtos;
using FORUM.Models;

namespace FORUM.Profiles
{
    public class CategorysProfile :Profile
    {

       public CategorysProfile()
       {
           
           CreateMap<Category,CategoryReadDto>();
           CreateMap<Category,CategoryReadWithPostsDto>();

           CreateMap<CategoryCreateDto,Category>();
           
       }
        
    }
}