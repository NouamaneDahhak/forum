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

         [HttpPost("login")]
        public ActionResult <UserReadDto> UserLogin(User user){

                 var userItem = _repository.UserLogin(user);

                 if(userItem != null){
                     return  Ok(_mapper.Map<UserReadDto>(userItem));  
                  }
                  return null;


            
        }

        
    }

}