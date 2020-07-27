using AutoMapper;
using FORUM.Dtos;
using FORUM.Models;

namespace FORUM.Profiles
{
    public class GroupProfile :Profile
    {

       public GroupProfile()
       {
           CreateMap<Group,PostReadDto>();
           CreateMap<PostCreateDto,Group>();
           CreateMap<PostUpdateDto,Group>();
           CreateMap<PostReadWithoutAnyDTO,Group>();
       }
        
    }
}