using CustomerApp.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApp.DbContextCustomer
{
    public class CustomerDbContext : DbContext
    {
        //conn string is passed in the startup.cs and appsettings.json
        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlServer("Data Source=DESKTOP-V3MJISD\\JACK;Initial Catalog=EFcore;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
        //}

        //:Base means calling the base class constructor, not inheritance, it's shorthand for code below
        public CustomerDbContext(DbContextOptions<CustomerDbContext> options) : base(options) //ctor for dbcontext injection in startup.cs
        {
            //it's like writing code here, parent(options);

        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Customer>().Ignore(c => c.guid); //either use this fluent method or use attributes in the model class [NotMapped]

            modelBuilder.Entity<Customer>().ToTable("tblCustomer");

            modelBuilder.Entity<Product>().ToTable("tblProduct");

            modelBuilder.Entity<Course>().ToTable("tblCourse");
        }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Course> Courses { get; set; }
    }
}
