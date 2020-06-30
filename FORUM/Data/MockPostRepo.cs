using System.Collections.Generic;
using FORUM.Models;

namespace FORUM.Data
{
    public class MockPostRepo : IPostRepo
    {
        public void createPost(Post post)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Post> GetAppPosts()
        {
                 var pposts = new List<Post>
                 {
                    new Post{Id=0,title="title1",content="Content2 Content Content Content ",img="image1.png",date="01/01/2020",views="50",nbComment="1",user=new User{Id=1,username="username1",password="username1",email="username1@gmail.com",img="image1.png"}},
                    new Post{Id=1,title="title2",content="Content2 Content Content Content ",img="image2.png",date="02/01/2020",views="60",nbComment="2",user=new User{Id=2,username="username2",password="username2",email="username2@gmail.com",img="image2.png"}},
                    new Post{Id=2,title="title3",content="Content2 Content Content Content ",img="image3.png",date="03/01/2020",views="70",nbComment="3",user=new User{Id=3,username="username3",password="username3",email="username3@gmail.com",img="image3.png"}},

                 };
                 return pposts;

        }

        public Post GetPostById(int id)
        {
           return new Post{Id=0,title="title",content="Content Content Content Content ",img="image1.png",date="01/01/2020",views="50",nbComment="nbcomment",user=new User{Id=1,username="username1",password="username1",email="username1@gmail.com",img="image1.png"}};
        }

        public bool SaveChanges()
        {
            throw new System.NotImplementedException();
        }
    }
}