using RottenTomatoes.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using rt = RottenTomatoes.Data;
namespace RottenTomatoes.Controllers
{
    public class InTheatersController : ApiController
    {
        [HttpGet]
        public List<rt.Movie> InTheaters()
        {
            return RotenTomatoesApi.GetMovies(rt.MovieEnum.InTheaters);
        }
    }
}
