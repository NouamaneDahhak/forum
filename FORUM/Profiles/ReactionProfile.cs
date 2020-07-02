using AutoMapper;
using FORUM.Dtos;
using FORUM.Models;

namespace FORUM.Profiles
{
    public class ReactionProfile :Profile
    {

       public ReactionProfile()
       {
           
           CreateMap<Reaction,ReactionReadDto>();

           CreateMap<ReactionCreateDto,Reaction>();
           
       }
        
    }
}