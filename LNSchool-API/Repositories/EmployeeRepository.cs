using LNSchool_API.Interfaces;
using LNSchool_API.Models;
using LNSchool_API.ViewModels.EmployeeViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace LNSchool_API.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public EmployeeRepository(UserManager<ApplicationUser> userManager) {
            _userManager = userManager;
        }


        public async Task<List<EmployeeViewModel>> ListAllEmployeesAsync()
        {
            List<ApplicationUser> allUsers = await _userManager.Users.ToListAsync();
            List<EmployeeViewModel> allEmployees = new List<EmployeeViewModel>();
            EmployeeViewModel employee = new EmployeeViewModel();

            foreach(var employed in allUsers) {
                
                if(employed.UserType == "IsHeadmaster" || employed.UserType == "IsTeacher") {

                    employee = new EmployeeViewModel
                    {
                        EmployeeId = employed.Id,
                        FirstName = employed.FirstName,
                        LastName = employed.LastName,
                        UserName = employed.UserName,
                        Address = employed.Address,
                        PhoneNumber = employed.PhoneNumber,
                        Email = employed.Email,
                        AreasOfExpertise = employed.AreasOfExpertise
                    };

                    allEmployees.Add(employee);
                }
            }

            return allEmployees;
        }
        public async Task DeleteEmployeeAsync(string id) 
        {
            try {
                var response = await _userManager.FindByIdAsync(id); 

                if (response is null)
                {
                    throw new Exception($"We could not find a employee with id: {id}");
                }
                await _userManager.DeleteAsync(response);

            } catch {
                throw new Exception($"We could not delete employee with id: {id}");
            }
        }
    }
}