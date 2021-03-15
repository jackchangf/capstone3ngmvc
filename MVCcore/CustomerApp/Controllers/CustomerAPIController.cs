using CustomerApp.DbContextCustomer;
using CustomerApp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CustomerApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize] //this will make the class secured, can put on methods too, this is for jwt token
    public class CustomerAPIController : ControllerBase
    {
        CustomerDbContext custDbContext = null; //di ioc

        public CustomerAPIController(CustomerDbContext _custDbContext, IConfiguration configuration)
        {
            custDbContext = _custDbContext;

            string str = configuration["ConnString"];
        }

        // GET: api/<CustomerAPIController>
        [HttpGet]
        public async Task<ActionResult> Get() //iactionresult is data + statuscode, ienumerable is just data
        {
            //List<Customer> custs = await (from temp in custDbContext.Customers select temp).Include(s => s.products).Include(x => x.Courses).ToListAsync();

            //var custsDto = await (from b in custDbContext.Customers
            //                      select new CustomerDto()
            //                      {
            //                          id = b.id,
            //                          customerName = b.customerName,
            //                          address = b.address,
            //                          products = b.products,
            //                          courses = b.courses
            //                      }).ToListAsync();

            //return Ok(custsDto);

            //return StatusCode(StatusCodes.Status200OK, custs); //shorthand syntax below
            //return Ok(custs); //shorthand 
            return Ok(await custDbContext.Customers.Include(p => p.products).Include(c => c.courses).ToListAsync());

        }

        // GET: api/<CustomerAPIController>
        /*[HttpGet]
        public async Task<ActionResult<IEnumerable<Customer>>> Get() //iactionresult is data + statuscode, ienumerable is just data
        {

            return await custDbContext.Customers.Include(p => p.products).Include(c => c.courses).ToListAsync();
        }*/

        // GET api/<CustomerAPIController>/5
        //[HttpGet("{customerName}")]
        //public async Task<ActionResult> Get(string customerName)
        //{
        //    List<Customer> custs = await (from temp in custDbContext.Customers
        //                            where temp.customerName.Contains(customerName) //like operator, use == if want exact match
        //                            select temp
        //                            ).Include(s => s.products).ToListAsync();

        //    return StatusCode(StatusCodes.Status200OK, custs);
        //}

        // GET api/Customer/string
        [HttpGet("{customerName}")]
        public async Task<ActionResult> GetCust(string customerName)
        {
            List<Customer> custs = await (from temp in custDbContext.Customers
                                          where temp.customerName.Contains(customerName) //like operator, use == if want exact match
                                          select temp
                                    ).Include(s => s.products).ToListAsync();

            var custsDto = from b in custs
                           select new CustomerDto()
                           {
                               id = b.id,
                               customerName = b.customerName,
                               address = b.address,
                               products = b.products,
                               courses = b.courses
                           };

            if (custsDto == null)
            {
                return NotFound();
            }

            return Ok(custsDto);
        }

        //// GET: api/Students/5 from ef scaffold
        //[HttpGet("{id}")]
        //public ActionResult<Student> GetStudent(int id)
        //{
        //    var student = _context.Students
        //                    .Include(stu => stu.Enrollments)
        //                        .ThenInclude(e => e.Course)
        //                    .Where(stu => stu.Id == id)
        //                    .FirstOrDefault();

        //    if (student == null)
        //    {
        //        return NotFound();
        //    }

        //    return student;
        //}

        //// POST api/<CustomerAPIController>
        //[HttpPost]
        //public async Task<ActionResult> Post([FromBody] Customer obj) //this code copy from customercontroller class
        //{
        //    //check validation , we put validation in the customer class [required]
        //    var context = new ValidationContext(obj, null, null);
        //    var errorResult = new List<ValidationResult>();
        //    var isValid = Validator.TryValidateObject(obj, context, errorResult, true);

        //    //insert records

        //    if (isValid)
        //    {
        //        //di ioc
        //        custDbContext.Customers.Add(obj);

        //        await custDbContext.SaveChangesAsync();
        //        //List<Customer> custs = custDbContext.Customers.Include(s => s.products).Include(c => c.courses).ToList<Customer>(); //eager loading, EF uses lazy loading by default which doesn't load child objects like products in customer class

        //        //return StatusCode(StatusCodes.Status200OK, custs);

        //        return Ok();

        //        //var custsDto = from b in custDbContext.Customers
        //        //               select new CustomerDto()
        //        //               {
        //        //                   id = b.id,
        //        //                   customerName = b.customerName,
        //        //                   address = b.address,
        //        //                   products = b.products,
        //        //                   courses = b.courses
        //        //               };

        //        //return custsDto;
        //    }
        //    else
        //    {
        //        return StatusCode(StatusCodes.Status500InternalServerError, errorResult);
        //    }

        //}

        // POST api/<CustomerAPIController>
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] Customer obj)
        {
            var newCustomer = new Customer()
            {
                id = obj.id,
                customerName = obj.customerName,
                address = obj.address,
                products = obj.products,


                //Set your M2M List to an empty collection
                courses = new List<Course>()
            };

            //link the reference of the empty courses above to the courses dbcontext
            for (int i = 0; i < obj.courses.Count; i++)
            {
                newCustomer.courses.Add(custDbContext.Courses.Single(t => t.id == obj.courses[i].id));
            }

            custDbContext.Add(newCustomer);
            await custDbContext.SaveChangesAsync();

            return Ok(await custDbContext.Customers.Include(p => p.products).Include(c => c.courses).ToListAsync());
            //return Ok();

            ////return Get()
            //var custs2 =  await (from b in custDbContext.Customers
            //                    select new CustomerDto()
            //                    {
            //                        id = b.id,
            //                        customerName = b.customerName,
            //                        address = b.address,
            //                        products = b.products,
            //                        courses = b.courses
            //                    }).ToListAsync();

            ////return StatusCode(StatusCodes.Status200OK, custs); //shorthand syntax below
            //return Ok(custs2); //shorthand 

        }



        // PUT api/<CustomerAPIController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult> Put([FromBody] Customer obj)
        {
            var result = custDbContext.Customers.Include(s => s.products).Include(c => c.courses).SingleOrDefault(b => b.id == obj.id);
           
            if (result != null)
            {
                result.customerName = obj.customerName;
                result.address = obj.address;

                foreach (var prod in result.products) //remove previous products tied to the current customer id
                {
                    custDbContext.Products.Remove(prod);
                }
                result.products.AddRange(obj.products); //add the current customer id new products

                result.courses = new List<Course>();
                //foreach (var course in result.courses) //remove previous courses tied to the current customer id
                //{
                //    custDbContext.Courses.Remove(course);
                //}

                //link the reference of the empty courses above to the courses dbcontext
                for (int i = 0; i < obj.courses.Count; i++)
                {
                    result.courses.Add(custDbContext.Courses.Single(t => t.id == obj.courses[i].id));
                }

                custDbContext.Update(result);
                await custDbContext.SaveChangesAsync();

            }

            return Ok(await custDbContext.Customers.Include(p => p.products).Include(c => c.courses).ToListAsync());

        }

        // DELETE api/<CustomerAPIController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            Customer cust1 = custDbContext.Customers.Include(s => s.products).Where(x => x.id == id).Single();

            foreach(var prod in cust1.products) //remove the products from the current customer id to be deleted
            {
                custDbContext.Products.Remove(prod);
            }

            custDbContext.Customers.Remove(cust1); //after removing products then delete from list
            await custDbContext.SaveChangesAsync();

            List<Customer> custs = custDbContext.Customers.Include(s => s.products).ToList<Customer>();
            return StatusCode(StatusCodes.Status200OK, custs);
        }
    }
}
