using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustomerApp.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace CustomerApp.Configuration
{
    public static class UserRoleSeed
    {
        public static void Seed(RoleManager<IdentityRole> roleManager, UserManager<ApplicationUser> userManager)
        {
            string[] roleNames = { "Administrator", "Member" };
            IdentityResult roleResult;

            foreach(string roleName in roleNames)
            {
                bool roleExist = roleManager.RoleExistsAsync(roleName).Result;
                if (!roleExist)
                {
                    roleResult = roleManager.CreateAsync(new IdentityRole(roleName)).Result;
                }
            }

            string userName = "admin";
            ApplicationUser admin = new ApplicationUser
            {
                UserName = userName,
                Email = "admin@contoso.com"
            };

            string userPwd = "Pa$$word123";

            ApplicationUser _user = userManager.FindByNameAsync(userName).Result;
            if(_user == null)
            {
                IdentityResult _result = userManager.CreateAsync(admin, userPwd).Result;
                if (_result.Succeeded)
                {
                    userManager.AddToRoleAsync(admin, "Administrator").Wait();
                }
            }



        }
    }
}
