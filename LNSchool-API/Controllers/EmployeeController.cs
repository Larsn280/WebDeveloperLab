
using LNSchool_API.Interfaces;
using LNSchool_API.Models;
using LNSchool_API.ViewModels.EmployeeViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LNSchool_API.Controllers
{
    [ApiController]
    [Route("api/v1/employees")]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeRepository _employeeRepo;

        public EmployeeController(IEmployeeRepository employeeRepo)
        {
            _employeeRepo = employeeRepo;
        }
        
        [HttpGet("list")]
        // [Authorize()]
        public async Task<ActionResult<List<EmployeeViewModel>>> ListEmployees()
        {
            return Ok(await _employeeRepo.ListAllEmployeesAsync());
        }

        [HttpPost("addEmployee")]
        public async Task<ActionResult> AddEmployee(PostEmployeeViewModel employee) 
        {
            return Ok(await _employeeRepo.AddEmployeeAsync(employee));
        }

        [HttpPut("{employeeId}")]
        public async Task<ActionResult> EditEmployee(string employeeId, PostEmployeeViewModel employee)
        {
            return Ok(await _employeeRepo.EditEmployeeAsync(employeeId, employee));
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteEmployee(string id)
        {
        try
        {
            await _employeeRepo.DeleteEmployeeAsync(id);

            return Ok();
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
        }
    }
}