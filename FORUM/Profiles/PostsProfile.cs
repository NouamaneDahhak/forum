using AutoMapper;
using FORUM.Dtos;
using FORUM.Models;

namespace FORUM.Profiles
{
    public class PostsProfile :Profile
    {

       public PostsProfile()
       {
           CreateMap<Post,PostReadDto>();
           CreateMap<PostCreateDto,Post>();
       }
        
    }
}