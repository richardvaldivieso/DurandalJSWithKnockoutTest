using RottenTomatoes.Api;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RottenTomatoes.Controllers
{
    public class MoviesController : ApiController
    {
        public IEnumerable<object> Get()
        {
            //ecpvt66xymfzsthch4rnyzwu
            var rtClient = new RottenTomatoesRestClient("ecpvt66xymfzsthch4rnyzwu");
            var queryResult = rtClient.OpeningMovies().Movies.Select(m => new { 
                MovieId=m.Id,
                Title = m.Title,
                Rating = m.Ratings.Critics_Rating,
                Sypnosis = m.Synopsis
            
            });
            return queryResult;
        }
    }
}
