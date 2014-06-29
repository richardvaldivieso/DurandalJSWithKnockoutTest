using RottenTomatoes.Api;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using rt=RottenTomatoes.Models;
namespace RottenTomatoes.Controllers
{
    public class BoxOfficeController : ApiController
    {
        [HttpGet]
        public List<rt.Movie> BoxOffice()
        {
            //ecpvt66xymfzsthch4rnyzwu
            var rtClient = new RottenTomatoesRestClient("ecpvt66xymfzsthch4rnyzwu");
            List<rt.Movie> queryResult = rtClient.BoxOfficeMovies().Movies.Select(m => new rt.Movie { 
                MovieId=(long)m.Id,
                Title = m.Title,
                Rating = m.Ratings.Critics_Rating,
                Sypnosis = m.Synopsis
            
            }).ToList();
            return queryResult;
        }




    }
}
