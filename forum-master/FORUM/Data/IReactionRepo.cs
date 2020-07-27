using System.Collections.Generic;
using FORUM.Models;

namespace FORUM.Data
{
    public interface IReactionRepo
    {
         IEnumerable<Reaction> GetPostReactionById(int id);

        void createReaction(Reaction reaction);

        bool SaveChanges();

    }
}