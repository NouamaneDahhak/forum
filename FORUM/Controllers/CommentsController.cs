using System.Collections.Generic;
using AutoMapper;
using FORUM.Data;
using FORUM.Dtos;
using FORUM.Models;
using Microsoft.AspNetCore.Mvc;

namespace FORUM.Controllers
{
    [Route("api/comments")]
    [ApiController]
    public class CommentsController : ControllerBase{

         
         private readonly ICommentRepo _repository;
        private readonly IMapper _mapper;

        public CommentsController(ICommentRepo repository , IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
            
        }
        //private readonly MockPostRepo _MockPostRepo = new MockPostRepo();

        [HttpGet]
        public ActionResult <IEnumerable<CommentReadDto>> GetAllComments(){
            var postItems = _repository.GetAppComments();
            return Ok(_mapper.Map<IEnumerable<CommentReadDto>>(postItems));
        }
        
        [HttpGet("{id}")]
        public ActionResult <PostReadDto> GetPostById(int id){

                  var postItem = _repository.GetCommentById(id);
                  if(postItem != null){
                    return Ok(_mapper.Map<PostReadDto>(postItem));
                  }
                  return NotFound();
            
        }
        [HttpPost]
        public ActionResult <CommentReadDto> CreatePost(CommentCreateDto _CommentCreateDto){

                  var commentModel = _mapper.Map<Comment>(_CommentCreateDto);
                  _repository.createComment(commentModel);
                  _repository.SaveChanges();
                  var commentItem = _mapper.Map<CommentReadDto>(commentModel);

                  return Ok(commentItem);
            
        }

        
    }

}