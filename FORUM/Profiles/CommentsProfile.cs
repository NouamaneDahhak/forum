using AutoMapper;
using FORUM.Dtos;
using FORUM.Models;

namespace FORUM.Profiles
{
    public class CommentsProfile :Profile
    {

       public CommentsProfile()
       {
           CreateMap<Comment,CommentReadDto>();
           CreateMap<CommentCreateDto,Comment>();

       }
        
    }
}