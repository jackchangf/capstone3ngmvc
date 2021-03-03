using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApp.Models
{
    public class Customer
    {
        [Key]
        public int id { get; set; }

        [Required]
        public string customerName { get; set; }

        [Required]
        public string address { get; set; }

        public List<Product> products { get; set; }
    }
}
