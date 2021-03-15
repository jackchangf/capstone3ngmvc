using CustomerApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        //public HomeController(ILogger<HomeController> logger, Customer obj, Customer obj1)
        //{
        //    //if 2 different customer instances are injected, the guids will be different
        //    _logger = logger;
        //}

        //using interface as oppose to above
        //public HomeController(ILogger<HomeController> logger, ICustomer obj)
        public HomeController(ILogger<HomeController> logger)
        {
            //if 2 different customer instances are injected, the guids will be different
            _logger = logger;
        }

        public IActionResult Index()
        {
            //set the current time to viewdata
            ViewData["X1"] = DateTime.Now;

            TempData["X2"] = DateTime.Now;
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
