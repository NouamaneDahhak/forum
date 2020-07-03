using System.Collections.Generic;
using FORUM.Models;

namespace FORUM.Data
{
    public interface IPostRepo
    {
        IEnumerable<Post> GetAppPosts();
        Post GetPostById(int id);

        void createPost(Post post);
        void UpdatePost(Post post);

        bool SaveChanges();

    }
}