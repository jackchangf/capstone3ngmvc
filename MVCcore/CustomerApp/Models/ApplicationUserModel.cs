using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApp.Models
{
    public class ApplicationUserModel
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
        public string Role { get; set; } //in prod, this should be passed from angular form with a dropdown select box or something

        //[Required(ErrorMessage = "Please enter First Name")]
        //[Display(Name = "First Name")]
        //public string FirstName { get; set; }


        //[Required(ErrorMessage = "Please enter Last Name")]
        //[Display(Name = "Last Name")]
        //public string LastName { get; set; }


        //[Required(ErrorMessage = "Please enter username")]
        //[MaxLength(256)]
        //public string Username { get; set; }

        //[Required(ErrorMessage = "Please enter Email Address")]
        //[MaxLength(256)]
        //[EmailAddress]
        //public string Email { get; set; }

        //[Required(ErrorMessage = "Please enter Password")]
        //[MinLength(8), MaxLength(20)]
        //[DataType(DataType.Password)]
        //public string Password { get; set; }


        //[Required(ErrorMessage = "Please confirm Password")]
        //[MinLength(8), MaxLength(20)]
        //[DataType(DataType.Password)]
        //[Compare("Password", ErrorMessage ="The password does not match the confirmation password.")]
        //[Display(Name = "Confirm Password")]
        //public string ConfirmPassword { get; set; }
    }

    public class LoginModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }

    }
}
