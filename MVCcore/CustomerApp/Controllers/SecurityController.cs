using CustomerApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CustomerApp.Controllers
{
    public class Token
    {
        public string Value { get; set; }
    }


    [Route("api/[controller]")]
    [ApiController]
    public class SecurityController : ControllerBase
    {
        private IConfiguration config = null;

        public SecurityController(IConfiguration _config) //ctor to access the dependency injection from startup.cs
        {
            config = _config;
        }

        private string GenerateJSONWebToken(string username)
        {

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["SecurityKey"].ToString())); //this is the key to pass into the algorithm below
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256); //this is the algorithm to encrypt the data
            var claims = new[] { //claim is for what rights user has like admin
                new Claim("Issuer", "Shiv"),
                new Claim("Admin","true"),
                new Claim(JwtRegisteredClaimNames.UniqueName, username)
            };

            //the token is created with all the key claims certs algorithm above
            var token = new JwtSecurityToken("Shiv", 
              "Shiv",
              claims,
              expires: DateTime.Now.AddMinutes(2),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }


        // GET: api/<SecurityController>
        [HttpGet]
        public IActionResult Get()
        {
            Token t = new Token();
            t.Value = GenerateJSONWebToken("jack");
            return Ok(t);
        }

        // GET api/<SecurityController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<SecurityController>
        [HttpPost]
        public IActionResult Post([FromBody] User obj)
        {
            if ((obj.userName == "Shiv") && (obj.password == "Test")) //from ef to db later
            {
                string token = GenerateJSONWebToken(obj.userName);
                Token t = new Token();
                t.Value = token;
                return Ok(t);
                //generate token if user and pw correct

            }
            else
            {
                return StatusCode(StatusCodes.Status401Unauthorized, "not allowed");
                //raise a 401 auth exception
            }
        }

        // PUT api/<SecurityController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<SecurityController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
