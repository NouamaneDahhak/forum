using System.Collections.Generic;
using AutoMapper;
using FORUM.Data;
using FORUM.Dtos;
using FORUM.Models;
using Microsoft.AspNetCore.Mvc;

namespace FORUM.Controllers
{
    [Route("api/posts")]
    [ApiController]
    public class PostsController : ControllerBase{

         
         private readonly IPostRepo _repository;
        private readonly IMapper _mapper;

        public PostsController(IPostRepo repository , IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
            
        }
        //private readonly MockPostRepo _MockPostRepo = new MockPostRepo();

        [HttpGet]
        public ActionResult <IEnumerable<PostReadDto>> GetAllPosts(){
            var postItems = _repository.GetAppPosts();
            return Ok(_mapper.Map<IEnumerable<PostReadDto>>(postItems));
        }
        [HttpGet("byCategory/{id}")]
        public ActionResult <IEnumerable<PostReadDto>> GetAppPostsByCategory(int id){
            var postItems = _repository.GetAppPostsByCategory(id);
            return Ok(_mapper.Map<IEnumerable<PostReadDto>>(postItems));
        }
        [HttpGet("byGroup/{id}")]
        public ActionResult <IEnumerable<PostReadDto>> GetAppPostsByGroup(int id){
            var postItems = _repository.GetAppPostsByGroup(id);
            return Ok(_mapper.Map<IEnumerable<PostReadDto>>(postItems));
        }
        [HttpGet("groups/byCategory/{id}")]
        public ActionResult <IEnumerable<PostReadDto>> GetAppGroupsByCategory(int id){
            var postItems = _repository.GetAppGroupsByCategory(id);
            return Ok(_mapper.Map<IEnumerable<PostReadDto>>(postItems));
        }
        [HttpGet("byUser/{id}")]
        public ActionResult <IEnumerable<PostReadDto>> GetAppPostsByUser(int id){
            var postItems = _repository.GetAppPostsByUser(id);
            return Ok(_mapper.Map<IEnumerable<PostReadDto>>(postItems));
        }
        
        [HttpGet("{id}")]
        public ActionResult <PostReadDto> GetPostById(int id){

                  var postItem = _repository.GetPostById(id);
                  if(postItem != null){
                    return Ok(_mapper.Map<PostReadDto>(postItem));
                  }
                  return NotFound();
            
        }
        [HttpPost]
        public ActionResult <PostReadDto> CreatePost(PostCreateDto _PostCreateDto){

                  var postModel = _mapper.Map<Post>(_PostCreateDto);
                  _repository.createPost(postModel);
                  _repository.SaveChanges();
                  var postItem = _mapper.Map<PostReadDto>(postModel);

                  return Ok(postItem);
            
        }
         [HttpPost("update/{id}")]
        public ActionResult <PostReadDto>  UpdatePost(int id,PostUpdateDto _PostUpdateDto){
               

           
                  var postItem = _repository.GetPostById(id);
                  if(postItem == null){
                      return NotFound();
                  }
                   _mapper.Map(_PostUpdateDto,postItem);
                  _repository.UpdatePost(postItem);
                  _repository.SaveChanges();
                  return Ok(_mapper.Map<PostReadDto>(postItem));
            
        }

        
    }

}