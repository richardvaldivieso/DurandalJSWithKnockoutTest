using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RottenTomatoes.Data
{
    public class Movie
    {
        public long MovieId { get; set; }
        public string Title { get; set; }
        public string Rating { get; set; }
        public string Sypnosis { get; set; }

    }
}