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

        //using one instance of RottenTomatoesRestClient
        public static RottenTomatoesRestClient RtClient
        {
            get {
                if (rtClient == null)
                    rtClient = new RottenTomatoesRestClient(ConfigurationManager.AppSettings["ApiKey"]);
                 return rtClient; 
               }
          
        }
        /// <summary>
        ///  Get movies depending on movieEnum
        /// </summary>
        /// <param name="movieEnum">This parameter has the following values: Box Office, inTheaters, Opening, Upcoming </param>
        /// <returns>Returns a movieresponse, but I mapped to a simple movie class.</returns>
        public static List<rt.Movie> GetMovies(rt.MovieEnum movieEnum)
        {
            //Todo: Check if the service is available.
            List<rt.Movie> queryResult=null;
            try
            {
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
                    case rt.MovieEnum.Upcoming:
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
            }
            catch (Exception)
            {
                
                throw;
            }
            return queryResult;
        }
        /// <summary>
        ///  Get Movies. Return a list of movies depending on the searchtext.
        /// </summary>
        /// <param name="searchText"></param>
        /// <returns></returns>
        public static List<rt.Movie> GetMovies(string searchText)
        {

            List<rt.Movie> queryResult=null;
            searchText = searchText ?? " ";
            try
            {
                queryResult = RtClient.MoviesSearch(searchText).Movies.Select(m => new rt.Movie
                        {
                            MovieId = (long)m.Id,
                            Title = m.Title,
                            Rating = m.Ratings.Critics_Rating,
                            Sypnosis = m.Synopsis

                        }).ToList();
            }
            catch { 
            
            }
        
            
            return queryResult;
        }
    }
}
