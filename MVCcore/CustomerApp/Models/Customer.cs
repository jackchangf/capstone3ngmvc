using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace CustomerApp.Models
{
    public interface ICustomer
    {
        //all controllers should point to icustomer interface for better design
    }

    //public class Customer : ICustomer
    
    public class Customer 
    {
        //[NotMapped]
        //public Guid guid { get; set; } //guid is a data type that holds a unique value, in time and space and location etc

        public Customer() 
        {
            // every time an instance of customer class is created, a new guid is assigned by constructor
            //guid = Guid.NewGuid(); //this will populate
        }

        public class CustomerDiscounted : Customer
        {
            //used to di

        }

        public class CustomerDiscounted1 : Customer
        {
            //used to di

        }


        [Key]
        public int id { get; set; }

        [Required]
        public string customerName { get; set; }

        [Required]
        public string address { get; set; }

        public List<Product> products { get; set; }

        //[JsonIgnore]
        //IgnoreDataMember] //for circular reference infinite loop
        public List<Course> courses { get; set; }
    }

    public class CustomerDto
    {
        
        public int id { get; set; }

        
        public string customerName { get; set; }

       
        public string address { get; set; }

        public List<Product> products { get; set; }

        public List<Course> courses { get; set; }
    }
}
