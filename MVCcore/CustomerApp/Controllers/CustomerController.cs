using CustomerApp.DbContextCustomer;
using CustomerApp.Models;
using CustomerApp.ViewModels;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApp.Controllers
{
    //CORS Cross Origin Resource Sharing
    [EnableCors("MyPolicy")]
    public class CustomerController : Controller
    {
        int i = 0; //? allow nullable, because below code i = ... needs allow null, for session

        CustomerDbContext custDbContext = null; //di ioc

        public CustomerController(CustomerDbContext _custDbContext, IConfiguration configuration)
        {
            custDbContext = _custDbContext;

            //string str = configuration["ConnString"];
        }

        public IActionResult AddScreen() //display the adding screen
        {
            //http is stateless for server performance, so to make it stateful, we use the server to tell the client to store data in the browswer cookie
            //get current value
            if(HttpContext.Session.GetInt32("variablei") != null)
            {
                i = (int)HttpContext.Session.GetInt32("variablei");
                System.Diagnostics.Debug.WriteLine("This will be displayed in output window");
            }
            //do operation
            i++;
            //send to browser to store in cookies
            HttpContext.Session.SetInt32("variablei", i);
            
            return View("CustomerAdd", new CustomerViewModel());
        }

        public IActionResult SearchScreen() //display the search screen
        {
            return View("DisplayCustomer");
        }

        public IActionResult IdScreen() //display the id screen
        {
            //normal code with tight coupling of new keyword
            /*CustomerDbContext db = new CustomerDbContext();
            List<Customer> custs = db.Customers.ToList<Customer>();
            
             return View("IdView", custs);
             */

            //depedancy injection / inversion of control di ioc
            List<Customer> custs = custDbContext.Customers.ToList();


            return View("IdView", custs);
        }



        public IActionResult Search(string customerName) //do the search query apply a filter 
        {
            //linq format from where select, then get those records and convert to list
            /*CustomerDbContext db = new CustomerDbContext();
            List<Customer> custs = (from temp in db.Customers
                                    where temp.customerName.Contains(customerName) //like operator, use == if want exact match
                                    select temp
                                    ).ToList<Customer>();

            return View("DisplayCustomer", custs);*/

            //di ioc code
            List<Customer> custs = (from temp in custDbContext.Customers
                                    where temp.customerName.Contains(customerName) //like operator, use == if want exact match
                                    select temp
                                    ).ToList<Customer>();


            return View("DisplayCustomer", custs);
        }

        //public IActionResult Add([FromBody] Customer obj) //add the record using ef
        //{
        //    //custom mapping instead of auto mapping use name in input field in view, need to remove parameter in method
        //    // this code becomes redundant with angular
        //    //Customer obj = new Customer();
        //    //obj.customerName = Request.Form["txtcustomerName"];
        //    //obj.address = Request.Form["txtaddress"];


        //    //check validation , we put validation in the customer class [required]
        //    var context = new ValidationContext(obj, null, null);
        //    var errorResult = new List<ValidationResult>();
        //    var isValid = Validator.TryValidateObject(obj, context, errorResult, true);

        //    //insert records
            
        //    if (isValid)
        //    {
        //        /*CustomerDbContext db = new CustomerDbContext();
        //        db.Customers.Add(obj);
        //        db.SaveChanges();


        //        //get all records from table and load to list
        //        //ToList() will make a select sql query call internally to the table and convert to a list from dbset
        //        //sql to dbset to list to UI through Model keyword
        //        List<Customer> custs = db.Customers.ToList<Customer>();
        //        return View("DisplayCustomer", custs);*/


        //    //di ioc
        //        custDbContext.Customers.Add(obj);
        //        custDbContext.SaveChanges();
        //        List<Customer> custs = custDbContext.Customers.ToList<Customer>();


        //        //return View("DisplayCustomer", custs); //angualr doestn' udnerstand razor code
        //        //return Json(custs); //angular understantds json
        //        return StatusCode(StatusCodes.Status200OK, custs);
        //    }
        //    else
        //    {
        //        CustomerViewModel vm = new CustomerViewModel();
        //        vm.customer = obj;
        //        vm.errors = errorResult;
        //       //return View("CustomerAdd", vm);
        //        //return Json(errorResult);
        //        return StatusCode(StatusCodes.Status500InternalServerError, errorResult);
        //    }


            

            
        //}

        public IActionResult Delete(int id) //add the record using ef
        {
            //insert records
            /*CustomerDbContext cust = new CustomerDbContext();

            Customer cust1 = cust.Customers.Where(x => x.id == id).Single();
            cust.Customers.Remove(cust1);
            cust.SaveChanges();

            //get all records from table and load to list
            //ToList() will make a select sql query call internally to the table and convert to a list from dbset
            //sql to dbset to list to UI through Model keyword
            List<Customer> custs = cust.Customers.ToList<Customer>();

            return View("DisplayCustomer", custs);*/


            Customer cust1 = custDbContext.Customers.Where(x => x.id == id).Single();
            custDbContext.Customers.Remove(cust1);
            custDbContext.SaveChanges();

            List<Customer> custs = custDbContext.Customers.ToList<Customer>();
            return View("DisplayCustomer", custs);
        }

        public IActionResult Update(int id)
        {
            /*CustomerDbContext cust = new CustomerDbContext();

            var result = cust.Customers.SingleOrDefault(b => b.id == id);
            if (result != null)
            {
                result.customerName = "new name";
                cust.SaveChanges();
            }

            List<Customer> custs = cust.Customers.ToList<Customer>();
            return View("DisplayCustomer", custs);*/

            //di ioc
            var result = custDbContext.Customers.SingleOrDefault(b => b.id == id);
            if (result != null)
            {
                result.customerName = "new name";
                custDbContext.SaveChanges();
            }

            List<Customer> custs = custDbContext.Customers.ToList<Customer>();
            return View("DisplayCustomer", custs);

        }
    }

}
