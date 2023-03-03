using LNSchool_API.Interfaces;
using LNSchool_API.Models;
using LNSchool_API.ViewModels.StudentViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LNSchool_API.Controllers
{
    [ApiController]
    [Route("api/v1/students")]
    public class StudentController : ControllerBase
    {
        private readonly IStudentRepository _studentRepo;

        public StudentController(IStudentRepository studentRepo)
        {
            _studentRepo = studentRepo;
        }
        
        [HttpGet("list")]
        // [Authorize()]
        public async Task<ActionResult<List<StudentViewModel>>> ListStudents()
        {
            return Ok(await _studentRepo.ListAllStudentsAsync());
        }

        [HttpGet("{id}")]    
        public async Task<ActionResult<StudentViewModel>> GetStudentById(string id)
        {
            var response = await _studentRepo.GetStudentByIdAsync(id);

            if (response is null)
                return NotFound($"Vi kunde inte hitta någon anställd med id: {id}");
            return Ok(response);
        }

        [HttpPost()]
        public async Task<ActionResult> AddStudent(PostStudentViewModel student) 
        {
            return Ok(await _studentRepo.AddStudentAsync(student));
        }

        [HttpPut("{studentId}")]
        public async Task<ActionResult> EditStudent(string studentId, PostStudentViewModel student)
        {
            return Ok(await _studentRepo.EditStudentAsync(studentId, student));
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteStudent(string id)
        {
        try
        {
            await _studentRepo.DeleteStudentAsync(id);

            return Ok();
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
        }
    }
}