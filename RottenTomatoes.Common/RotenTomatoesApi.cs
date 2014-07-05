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
        private static RottenTomatoesRestClient rtClient;

        public static RottenTomatoesRestClient RtClient
        {
            get {
                if (rtClient == null)
                    rtClient = new RottenTomatoesRestClient(ConfigurationManager.AppSettings["ApiKey"]);
                 return rtClient; 
               }
          
        }
        
        public static List<rt.Movie> GetMovies(rt.MovieEnum movieEnum)
        {
            List<rt.Movie> queryResult;
            switch (movieEnum)
            {
                case rt.MovieEnum.BoxOffice:
                    queryResult = RtClient.BoxOfficeMovies().Movies.Select(m => new rt.Movie
                    {
                        MovieId = (long)m.Id,
                        Title = m.Title,
                        Rating = m.Ratings.Critics_Rating,
                        Sypnosis = m.Synopsis
                       
                    }).ToList();
                    break;

                case rt.MovieEnum.InTheaters:
                    queryResult = RtClient.InTheatersMovies().Movies.Select(m => new rt.Movie
                    {
                        MovieId = (long)m.Id,
                        Title = m.Title,
                        Rating = m.Ratings.Critics_Rating,
                        Sypnosis = m.Synopsis

                    }).ToList();
                    break;
                case rt.MovieEnum.Opening:
                    queryResult = RtClient.OpeningMovies().Movies.Select(m => new rt.Movie
                    {
                        MovieId = (long)m.Id,
                        Title = m.Title,
                        Rating = m.Ratings.Critics_Rating,
                        Sypnosis = m.Synopsis

                    }).ToList();
                    break;
                case rt.MovieEnum.Upcomming:
                    queryResult = RtClient.UpcomingMovies().Movies.Select(m => new rt.Movie
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
        public static List<rt.Movie> GetMovies(string searchText)
        {

            List<rt.Movie> queryResult;
            queryResult = RtClient.MoviesSearch(searchText).Movies.Select(m => new rt.Movie
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
