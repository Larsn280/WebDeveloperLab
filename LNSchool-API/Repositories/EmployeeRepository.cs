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

        public async Task<EmployeeViewModel?> GetEmployeeByIdAsync(string id)
        {
            var selectedEmployee = await _userManager.FindByIdAsync(id);

            EmployeeViewModel employee = new EmployeeViewModel();

            if(selectedEmployee != null) {

                employee.EmployeeId = selectedEmployee.Id;
                employee.UserName = selectedEmployee.UserName;
                employee.FirstName = selectedEmployee.FirstName;
                employee.LastName = selectedEmployee.LastName;
                employee.Address = selectedEmployee.Address;
                employee.PhoneNumber = selectedEmployee.PhoneNumber;
                employee.Email = selectedEmployee.Email;
                employee.AreasOfExpertise = selectedEmployee.AreasOfExpertise;

                return employee;
            }
            return null!;
        }

        public async Task<PostEmployeeViewModel> AddEmployeeAsync(PostEmployeeViewModel employee)
        {
        var user = new ApplicationUser
        {
            UserName = employee.UserName,
            FirstName = employee.FirstName,
            LastName = employee.LastName,
            Address = employee.Address,
            PhoneNumber = employee.PhoneNumber,
            Email = employee.Email,
            AreasOfExpertise = employee.AreasOfExpertise,
            UserType = employee.UserType
        };

        var result = await _userManager.CreateAsync(user, "1");

        if(result.Succeeded)
        {
            return employee;
        }

        return null!;
        }

        public async Task<PostEmployeeViewModel> EditEmployeeAsync(string employeeId, PostEmployeeViewModel employee)
        {
        var user = await _userManager.FindByIdAsync(employeeId);

        if(user == null)
        {
        return null!;
        }

        user.FirstName = employee.FirstName;
        user.LastName = employee.LastName;
        user.UserName = employee.UserName;
        user.Address = employee.Address;
        user.PhoneNumber = employee.PhoneNumber;
        user.Email = employee.Email;
        user.AreasOfExpertise = employee.AreasOfExpertise;

        var result = await _userManager.UpdateAsync(user);

        if(result.Succeeded)
        {
        return employee;
        }

        return null!;
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