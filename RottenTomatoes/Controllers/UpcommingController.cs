using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using rt = RottenTomatoes.Data;
using RottenTomatoes.Common;
namespace RottenTomatoes.Controllers
{
    public class UpcommingController : ApiController
    {
        [HttpGet]
        public List<rt.Movie> Upcomming()
        {
            return RotenTomatoesApi.GetMovies(rt.MovieEnum.Upcomming);
        }
    }
}
