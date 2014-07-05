using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using RottenTomatoes.Common;
using rt = RottenTomatoes.Data;
namespace RottenTomatoes.Controllers
{
    public class SearchMoviesController : ApiController
    {
        [HttpGet]
        public List<rt.Movie> SearchMovies(string searchText)
        {
            //ecpvt66xymfzsthch4rnyzwu
            return RotenTomatoesApi.GetMovies(searchText);
        }
    }
}
