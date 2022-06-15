using EF_App.Model;
using Microsoft.AspNetCore.Mvc;

namespace EF_App.Data
{
    public interface IDAL
    {
        public Task<ActionResult<IEnumerable<Post>>> ReadLatestPosts(string category, int count);
        Task<int> CreatePost(Post post);
        void InitDatabase(int countUsers, int countCategories);
    }
}
