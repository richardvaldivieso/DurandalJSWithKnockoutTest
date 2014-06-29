﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using rt = RottenTomatoes.Models;
using RottenTomatoes.Api;
namespace RottenTomatoes.Controllers
{
    public class UpcommingController : ApiController
    {
        [HttpGet]
        public List<rt.Movie> Upcomming()
        {
            //ecpvt66xymfzsthch4rnyzwu
            var rtClient = new RottenTomatoesRestClient("ecpvt66xymfzsthch4rnyzwu");
            List<rt.Movie> queryResult = rtClient.OpeningMovies().Movies.Select(m => new rt.Movie
            {
                MovieId = (long)m.Id,
                Title = m.Title,
                Rating = m.Ratings.Critics_Rating,
                Sypnosis = m.Synopsis

            }).ToList();
            return queryResult;
        }
    }
}
