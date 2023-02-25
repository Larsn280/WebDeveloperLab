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
    }
}