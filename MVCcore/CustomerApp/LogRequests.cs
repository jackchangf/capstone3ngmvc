using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApp
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class LogRequests
    {
        private readonly RequestDelegate _next;

        public LogRequests(RequestDelegate next)
        {
            _next = next;
        }

        protected virtual bool IsFileLocked(string path)
        {

            var file = new FileInfo(path);
            try
            {
                using (FileStream stream = file.Open(FileMode.Open, FileAccess.Read, FileShare.None))
                {
                    stream.Close();
                }
            }
            catch (FileNotFoundException) //haven't tested this yet
            {
                return false;
            }
            catch (IOException)
            {
                return true;
            }

            //file is not locked
            return false;
        }


        public Task Invoke(HttpContext httpContext)
        {
            //string url path
            var urlPath = httpContext.Request.Path;
            //write to log, escape char use @ or \\
            //if (IsFileLocked(@"C:\Users\Chan\Desktop\log.txt") == false)
            //{
            //    System.IO.File.AppendAllText(@"C:\Users\Chan\Desktop\log.txt", DateTime.Now + " " + urlPath.ToString() + "\n");
            //}
            return _next(httpContext);
        }
    }

    // Extension method used to add the middleware to the HTTP request pipeline.
    public static class LogRequestsExtensions
    {
        public static IApplicationBuilder UseLogRequests(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<LogRequests>();
        }
    }
}
