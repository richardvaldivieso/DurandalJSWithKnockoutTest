﻿
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using RottenTomatoes.Common;
using rt = RottenTomatoes.Data;

namespace RottenTomatoes.Controllers
{
    public class OpeningController : ApiController
    {
        [HttpGet]
        public List<rt.Movie> Opening()
        {
            //ecpvt66xymfzsthch4rnyzwu
            return RotenTomatoesApi.GetMovies(rt.MovieEnum.Opening);
        }
    }
}
