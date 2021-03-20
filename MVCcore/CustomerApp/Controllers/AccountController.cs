using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustomerApp.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;
using System.IdentityModel.Tokens.Jwt;

namespace CustomerApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IConfiguration config;


        public AccountController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, IConfiguration _config)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            config = _config;
        }

        [HttpPost]
        [Route("Register")]
        //POST: /api/Account/Register
        public async Task<Object> Register(ApplicationUserModel model)
        {
            model.Role = "Administrator"; //from ssms aspnetroles table
            //model.Role = "Member"; //from ssms aspnetroles table

            var applicationUser = new ApplicationUser()
            {
                UserName = model.UserName,
                Email = model.Email,
                FirstName = model.FirstName,
                LastName = model.LastName,
               //pw is passed below in createasync as passwordhash
            };

            try
            {
                var result = await _userManager.CreateAsync(applicationUser, model.Password);
                await _userManager.AddToRoleAsync(applicationUser, model.Role);
                return Ok(result);
            }
            catch (Exception)
            {

                throw;

            }
        }

        [HttpPost]
        [Route("Login")]
        //POST: /api/Account/Login
        public async Task<IActionResult> Login(LoginModel model)
        {
            var user = await _userManager.FindByNameAsync(model.UserName);
            if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
            {
                //role admin member check, get role assigned to user
                var role = await _userManager.GetRolesAsync(user);
                IdentityOptions _options = new IdentityOptions();

                //define var
                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["SecurityKey"].ToString())); //this is the key to pass into the algorithm below
                var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256); //this is the algorithm to encrypt the data
                
                /*
                var claims = new[] { //claim is for what rights user has like admin
                new Claim("Issuer", "Shiv"),
                new Claim("Admin","true"),
                new Claim("UserID", user.Id.ToString()),
                new Claim(JwtRegisteredClaimNames.UniqueName, model.UserName)
                };

                //the token is created with all the key claims certs algorithm above
                var securitytoken = new JwtSecurityToken("Shiv",
                  "Shiv",
                  claims,
                  expires: DateTime.Now.AddMinutes(2),
                  signingCredentials: credentials);

                var token = new JwtSecurityTokenHandler().WriteToken(securitytoken);
                return Ok(new { token });*/

                
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim("UserID", user.Id.ToString()),
                        new Claim(_options.ClaimsIdentity.RoleClaimType, role.FirstOrDefault()) //this is for admin member
                    }),
                    Expires = DateTime.UtcNow.AddMinutes(2),
                    SigningCredentials = credentials
                };

                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var token = tokenHandler.WriteToken(securityToken);
                return Ok(new { token });
                
            }
            else
            {
                return BadRequest(new { message = "Username or password is incorrect" });
            }
        }
    }
}
