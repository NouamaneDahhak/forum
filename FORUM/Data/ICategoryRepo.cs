using System.Collections.Generic;
using FORUM.Models;

namespace FORUM.Data
{
    public interface ICategoryRepo
    {
        IEnumerable<Category> GetAppCategory();
        Category GetCategoryById(int id);
        Category GetCategoryByIdWithPosts(int id);

        void createCategory(Category category);

        bool SaveChanges();

    }
}