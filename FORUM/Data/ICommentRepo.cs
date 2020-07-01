using System.Collections.Generic;
using FORUM.Models;

namespace FORUM.Data
{
    public interface ICommentRepo
    {
        IEnumerable<Comment> GetAppComments();
        Comment GetCommentById(int id);

        void createComment(Comment comment);

        bool SaveChanges();

    }
}