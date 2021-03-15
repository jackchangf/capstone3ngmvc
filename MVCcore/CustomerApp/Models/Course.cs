using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace CustomerApp.Models
{
    
    public class Course
    {
        public Course()
        {

        }

        [Key]
        public int id { get; set; }

        [Required]
        
        public string courseName { get; set; }

        //[JsonIgnore] //for circular reference infinite loop
        public List<Customer> customers { get; set; }
    }
}
