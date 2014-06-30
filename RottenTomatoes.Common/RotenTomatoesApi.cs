using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using rt = RottenTomatoes.Data;
using RottenTomatoes.Api;
namespace RottenTomatoes.Common
{
    public static class RotenTomatoesApi
    {
        public static List<rt.Movie> GetMovies(rt.MovieEnum movieEnum)
        {
            //ecpvt66xymfzsthch4rnyzwu
            List<rt.Movie> queryResult;
            var rtClient = new RottenTomatoesRestClient(ConfigurationManager.AppSettings["ApiKey"]);
            switch (movieEnum)
            {
                case rt.MovieEnum.BoxOffice:
                    queryResult = rtClient.BoxOfficeMovies().Movies.Select(m => new rt.Movie
                    {
                        MovieId = (long)m.Id,
                        Title = m.Title,
                        Rating = m.Ratings.Critics_Rating,
                        Sypnosis = m.Synopsis

                    }).ToList();
                    break;

                case rt.MovieEnum.InTheaters:
                    queryResult = rtClient.OpeningMovies().Movies.Select(m => new rt.Movie
                    {
                        MovieId = (long)m.Id,
                        Title = m.Title,
                        Rating = m.Ratings.Critics_Rating,
                        Sypnosis = m.Synopsis

                    }).ToList();
                    break;
                case rt.MovieEnum.Opening:
                    queryResult = rtClient.OpeningMovies().Movies.Select(m => new rt.Movie
                    {
                        MovieId = (long)m.Id,
                        Title = m.Title,
                        Rating = m.Ratings.Critics_Rating,
                        Sypnosis = m.Synopsis

                    }).ToList();
                    break;
                case rt.MovieEnum.Upcomming:
                    queryResult = rtClient.OpeningMovies().Movies.Select(m => new rt.Movie
                   {
                       MovieId = (long)m.Id,
                       Title = m.Title,
                       Rating = m.Ratings.Critics_Rating,
                       Sypnosis = m.Synopsis

                   }).ToList();
                    break;
                default:
                    queryResult = null;
                    break;
            }
            return queryResult;
        }
    }
}
