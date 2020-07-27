using System.Collections.Generic;
using AutoMapper;
using FORUM.Data;
using FORUM.Dtos;
using FORUM.Models;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

using System.Net.Http;

namespace FORUM.Controllers
{
    [Route("api/posts")]
    [ApiController]
    public class PostsController : ControllerBase{

        private readonly IHostingEnvironment _environment;

         private readonly IPostRepo _repository;
        private readonly IMapper _mapper;

        public PostsController(IPostRepo repository , IMapper mapper,IHostingEnvironment environment)
        {
            _repository = repository;
            _mapper = mapper;
             _environment = environment ?? throw new ArgumentNullException(nameof(environment));

        }
         public class FIleUploadAPI
        {
            public IFormFile files { get; set; }
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

        [HttpPost("uploadPostImage/")] 
       public async Task<string> UploadFile([FromForm] IFormFile file)
    {
        string fName = file.FileName;
        string path = Path.Combine(_environment.ContentRootPath, "Images/" + file.FileName);
        using (var stream = new FileStream(path, FileMode.Create))
        {
            await file.CopyToAsync(stream);
        }
        return file.FileName; 
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
         [HttpGet("getImage/{img}/{type}")]
       public IActionResult Get(String type,string img)
        {            
            Byte[] b = System.IO.File.ReadAllBytes("Images/"+img);    // You can use your own method over here.         

            if(type =="none" ){
            return File(b, "image/jpeg");

            }
            else{

            byte[] fileBytes = System.IO.File.ReadAllBytes("Images/"+img);
                return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet,img);
                    

                // return File(b, "application/octet-stream");

            }
        }
        
    }


  

}