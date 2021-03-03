using CustomerApp.DbContextCustomer;
using CustomerApp.Models;
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
            List<Customer> custs = await (from temp in custDbContext.Customers select temp).Include(s => s.products).ToListAsync();

            //return StatusCode(StatusCodes.Status200OK, custs); //shorthand syntax below
            return Ok(custs); //shorthand 
        }

        // GET api/<CustomerAPIController>/5
        [HttpGet("{customerName}")]
        public async Task<ActionResult> Get(string customerName)
        {
            List<Customer> custs = await (from temp in custDbContext.Customers
                                    where temp.customerName.Contains(customerName) //like operator, use == if want exact match
                                    select temp
                                    ).Include(s => s.products).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, custs);
        }

        // POST api/<CustomerAPIController>
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] Customer obj) //this code copy from customercontroller class
        {
            //check validation , we put validation in the customer class [required]
            var context = new ValidationContext(obj, null, null);
            var errorResult = new List<ValidationResult>();
            var isValid = Validator.TryValidateObject(obj, context, errorResult, true);

            //insert records

            if (isValid)
            {
                //di ioc
                custDbContext.Customers.Add(obj);
                await custDbContext.SaveChangesAsync();
                List<Customer> custs = custDbContext.Customers.Include(s => s.products).ToList<Customer>(); //eager loading, EF uses lazy loading by default which doesn't load child objects like products in customer class

                return StatusCode(StatusCodes.Status200OK, custs);
            }
            else
            {
                return StatusCode(StatusCodes.Status500InternalServerError, errorResult);
            }

        }

        // PUT api/<CustomerAPIController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult> Put([FromBody] Customer obj)
        {
            var result = custDbContext.Customers.Include(s => s.products).SingleOrDefault(b => b.id == obj.id);
           
            if (result != null)
            {
                result.customerName = obj.customerName;
                result.address = obj.address;

                foreach (var prod in result.products) //remove previous products tied to the current customer id
                {
                    custDbContext.Products.Remove(prod);
                }

                result.products.AddRange(obj.products); //add the current customer id new products
                await custDbContext.SaveChangesAsync();
            }

            List<Customer> custs = custDbContext.Customers.Include(s => s.products).ToList<Customer>();

            return StatusCode(StatusCodes.Status200OK, custs);

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
