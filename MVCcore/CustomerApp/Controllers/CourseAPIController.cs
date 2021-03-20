using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CustomerApp.DbContextCustomer;
using CustomerApp.Models;

namespace CustomerApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseAPIController : ControllerBase
    {
        private readonly CustomerDbContext _context;

        public CourseAPIController(CustomerDbContext context)
        {
            _context = context;
        }

        // GET: api/Courses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Course>>> GetCourses()
        {
            //List<Course> courses = await (from temp in _context.Courses select temp).ToListAsync();

            //return Ok(courses);

            //return await _context.Courses.ToListAsync();
            return Ok(await _context.Courses.Include(s => s.customers).ThenInclude(p => p.products).ToListAsync());

        }

        // GET: api/Courses/5
        [HttpGet("{courseName}")]
        public async Task<ActionResult> Get(string courseName)
        {
            List<Course> courses = await (from temp in _context.Courses
                                          where temp.courseName.Contains(courseName) //like operator, use == if want exact match
                                          select temp
                                        ).ToListAsync();



            return StatusCode(StatusCodes.Status200OK, courses);
        }

        // PUT: api/Courses/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCourse(int id, Course course)
        {
            if (id != course.id)
            {
                return BadRequest();
            }

            _context.Entry(course).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CourseExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(await _context.Courses.Include(s => s.customers).ThenInclude(p => p.products).ToListAsync());
        }

        // POST: api/Courses
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Course>> PostCourse([FromBody] Course course)
        {
            _context.Courses.Add(course);
            await _context.SaveChangesAsync();

            List<Course> courses = _context.Courses.ToList<Course>(); //eager loading, EF uses lazy loading by default which doesn't load child objects like products in customer class

            return StatusCode(StatusCodes.Status200OK, courses);

        }

        // DELETE: api/Courses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourse(int id)
        {
            var course = await _context.Courses.FindAsync(id);
            if (course == null)
            {
                return NotFound();
            }

            _context.Courses.Remove(course);
            await _context.SaveChangesAsync();

            List<Course> courses = _context.Courses.ToList<Course>();
            return StatusCode(StatusCodes.Status200OK, courses);
        }

        private bool CourseExists(int id)
        {
            return _context.Courses.Any(e => e.id == id);
        }
    }
}
