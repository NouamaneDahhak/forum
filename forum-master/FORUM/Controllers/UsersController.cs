using System.Collections.Generic;
using AutoMapper;
using FORUM.Data;
using FORUM.Dtos;
using FORUM.Models;
using Microsoft.AspNetCore.Mvc;

namespace FORUM.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UsersController : ControllerBase{

         
         private readonly IUserRepo _repository;
        private readonly IMapper _mapper;

        public UsersController(IUserRepo repository , IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
            
        }
        //private readonly MockUserRepo _MockUserRepo = new MockUserRepo();

        [HttpGet]
        public ActionResult <IEnumerable<UserReadDto>> GetAllUsers(){
            var UserItems = _repository.GetAppUsers();
            return Ok(_mapper.Map<IEnumerable<UserReadDto>>(UserItems));
        }
        
        [HttpGet("{id}")]
        public ActionResult <UserWithPostReadDto> GetUserById(int id){

                  var UserItem = _repository.GetUserById(id);
                  if(UserItem != null){
                       return Ok(_mapper.Map<UserWithPostReadDto>(UserItem));
                     
                  }
                  return null;
            
        }
         [HttpPost("register")]
        public ActionResult <UserReadDto> CreateUser(UserCreateDto _UserCreateDto){

                  var userModel = _mapper.Map<User>(_UserCreateDto);
                  _repository.createUser(userModel);
                  _repository.SaveChanges();
                  var userItem = _mapper.Map<UserReadDto>(userModel);

                  return Ok(userItem);
            
        }
        
          [HttpPost("update/{id}")]
        public ActionResult <UserReadDto>  UpdateUser(int id,UserUpdateDto _UserUpdateDto){
               

           
                  var postItem = _repository.GetUserById(id);
                  if(postItem == null){
                      return NotFound();
                  }
                   _mapper.Map(_UserUpdateDto,postItem);
                  _repository.UpdateUser(postItem);
                  _repository.SaveChanges();
                  return Ok(_mapper.Map<UserReadDto>(postItem));
            
        }

       [HttpPost("delete/{id}")]
        public void  deleteUser(int id){

                  _repository.deleteUserById(id);
                  _repository.SaveChanges();

            
        }

      

        
    }

}