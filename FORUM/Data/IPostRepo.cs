using System.Collections.Generic;
using FORUM.Models;

namespace FORUM.Data
{
    public interface IPostRepo
    {
        IEnumerable<Post> GetAppPosts();
        IEnumerable<Post> GetAppPostsByCategory(int idCategory);
        IEnumerable<Post> GetAppPostsByUser(int idCategory);
        Post GetPostById(int id);

        void createPost(Post post);
        void UpdatePost(Post post);

        bool SaveChanges();

    }
}