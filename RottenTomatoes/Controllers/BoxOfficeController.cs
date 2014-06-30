
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Configuration;
using RottenTomatoes.Common;
using rt = RottenTomatoes.Data;

namespace RottenTomatoes.Controllers
{
    public class BoxOfficeController : ApiController
    {
        [HttpGet]
        public List<rt.Movie> BoxOffice()
        {
            return RotenTomatoesApi.GetMovies(rt.MovieEnum.BoxOffice);
        }




    }
}
