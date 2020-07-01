using System.Collections.Generic;
using AutoMapper;
using FORUM.Data;
using FORUM.Dtos;
using FORUM.Models;
using Microsoft.AspNetCore.Mvc;

namespace FORUM.Controllers
{
    [Route("api/category")]
    [ApiController]
    public class CategorysController : ControllerBase{

         
         private readonly ICategoryRepo _repository;
        private readonly IMapper _mapper;

        public CategorysController(ICategoryRepo repository , IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
            
        }
        //private readonly MockPostRepo _MockPostRepo = new MockPostRepo();

        [HttpGet]
        public ActionResult <IEnumerable<CategoryReadDto>> GetAllCategory(){
            var postItems = _repository.GetAppCategory();
            return Ok(_mapper.Map<IEnumerable<CategoryReadDto>>(postItems));
        }
      
        
        [HttpGet("{id}")]
        public ActionResult <CategoryReadDto> GetCategoryById(int id){

                  var postItem = _repository.GetCategoryById(id);
                  if(postItem != null){
                    return Ok(_mapper.Map<CategoryReadDto>(postItem));
                  }
                  return NotFound();
            
        }
        [HttpGet("category_posts/{id}")]
         public ActionResult <CategoryReadWithPostsDto> GetCategory_with_postsById(int id){

                  var postItem = _repository.GetCategoryByIdWithPosts(id);
                  if(postItem != null){
                    return Ok(_mapper.Map<CategoryReadWithPostsDto>(postItem));
                  }
                  return NotFound();
            
        }

        [HttpPost]
        public ActionResult <CategoryReadDto> createCategory(CategoryCreateDto _CategoryCreateDto){

                  var categoryModel = _mapper.Map<Category>(_CategoryCreateDto);
                  _repository.createCategory(categoryModel);
                  _repository.SaveChanges();
                  var categoryItem = _mapper.Map<CategoryReadDto>(categoryModel);

                  return Ok(categoryItem);
            
        }

        
    }

}