using System.Collections.Generic;
using AutoMapper;
using FORUM.Data;
using FORUM.Dtos;
using FORUM.Models;
using Microsoft.AspNetCore.Mvc;

namespace FORUM.Controllers
{
    [Route("api/reactions")]
    [ApiController]
    public class ReactionsController : ControllerBase{

         
         private readonly IReactionRepo _repository;
        private readonly IMapper _mapper;

        public ReactionsController(IReactionRepo repository , IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
            
        }
        //private readonly MockPostRepo _MockPostRepo = new MockPostRepo();

        [HttpGet("{id}")]
        public ActionResult <IEnumerable<ReactionReadDto>> GetPostReactionById(int id){
            var postItems = _repository.GetPostReactionById(id);
            return Ok(_mapper.Map<IEnumerable<ReactionReadDto>>(postItems));
        }
        
       
        [HttpPost]
        public ActionResult <ReactionReadDto> CreateReaction(ReactionCreateDto _ReactionCreateDto){

                  var commentModel = _mapper.Map<Reaction>(_ReactionCreateDto);
                  _repository.createReaction(commentModel);
                  _repository.SaveChanges();
                  var commentItem = _mapper.Map<ReactionReadDto>(commentModel);

                  return Ok(commentItem);
            
        }

        
    }

}