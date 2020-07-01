using AutoMapper;
using FORUM.Dtos;
using FORUM.Models;

namespace FORUM.Profiles
{
    public class UsersProfile :Profile
    {

       public UsersProfile()
       {
           CreateMap<User,UserReadDto>();
           CreateMap<User,UserWithPostReadDto>();
           CreateMap<UserCreateDto,User>();

       }
        
    }
}