using CustomerApp.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public UserProfileController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;

        }

        [HttpGet]
        //[Route("UserProfile")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        //GET: /api/UserProfile
        public async Task<Object> GetUserProfile()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            //string userId = "681f1aa1-c4c6-4f2d-a994-06b2a3ffaa7f";
            
            var user = await _userManager.FindByIdAsync(userId);

            return Ok(new
            {
                user.FirstName,
                user.LastName,
                user.Email,
                user.UserName
            });
 
        }


        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Authorize(Roles = "Administrator")]
        [Route("ForAdministrator")]
        //[Authorize(Roles = "Administrator, Member")] //this is for admin OR member, AND is put multiple authorize top and bottom
        //GET: /api/UserProfile
        public string GetForAdministrator()
        {
            return "web method for admin";
        }

        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Authorize(Roles = "Member")]
        [Route("ForMember")]
        //[Authorize(Roles = "Administrator, Member")] //this is for admin OR member, AND is put multiple authorize top and bottom
        //GET: /api/UserProfile
        public string GetForMember()
        {
            return "web method for member";
        }

        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Authorize(Roles = "Administrator, Member")] //this is for admin OR member, AND is put multiple authorize top and bottom
        [Route("ForAdministratorOrMember")]
        //GET: /api/UserProfile
        public string GetForAdministratorOrMember()
        {
            return "web method for admin or member";
        }

    }

}
