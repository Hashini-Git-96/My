using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentFullstackApp.Data;
using StudentFullstackApp.Models;

namespace StudentFullstackApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentController : Controller
    {
        private readonly StudentDbContext _studentDbContext;
        public StudentController(StudentDbContext _studentDbContext) {
            this._studentDbContext = _studentDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllStudents() {
            var student = await _studentDbContext.Students.ToListAsync();
            return Ok(student);

        }

        [HttpPost]
        public async Task<IActionResult> AddStudent([FromBody] Student addstudentDetails)
        {

            addstudentDetails.id = Guid.NewGuid();
            await _studentDbContext.Students.AddAsync(addstudentDetails);
            await _studentDbContext.SaveChangesAsync();
            return Ok(addstudentDetails);
        }

        [HttpGet]
        [Route("{id:Guid}")]

        public async Task<IActionResult> GetStudent([FromRoute] Guid id)
        {
            var student = await _studentDbContext.Students.FirstOrDefaultAsync(x => x.id == id);
            if (student == null)
            {
                return NotFound();
            }
            return Ok(student);

        }



        [HttpPut]
        [Route("{id:Guid}")]

        public async Task<IActionResult> UpdateStudent([FromRoute] Guid id, Student updateStudentRequest)
        {

            var student = await _studentDbContext.Students.FindAsync(id);
            await _studentDbContext.SaveChangesAsync();
            if (student == null)
            {
                return NotFound();
            }

            student.firstName = updateStudentRequest.firstName;
            student.lastName = updateStudentRequest.lastName;
            student.mobile = updateStudentRequest.mobile;
            student.nic = updateStudentRequest.nic;
            student.dateOfBirth = updateStudentRequest.dateOfBirth;
            student.address = updateStudentRequest.address;

            return Ok(student);

        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteStudent([FromRoute] Guid id)
        {
            var student = await _studentDbContext.Students.FindAsync(id);

            if (student == null)
            {
                return NotFound();
            }
            _studentDbContext.Students.Remove(student);
            await _studentDbContext.SaveChangesAsync();
            return Ok(student);

        }

    }
}
