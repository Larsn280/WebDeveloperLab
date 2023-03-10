using LNSchool_API.ViewModels.EmployeeViewModels;

namespace LNSchool_API.Interfaces
{
    public interface IEmployeeRepository
    {
        public Task<List<EmployeeViewModel>> ListAllEmployeesAsync();
        public Task<EmployeeViewModel?> GetEmployeeByIdAsync(string id);
        public Task<PostEmployeeViewModel> AddEmployeeAsync(PostEmployeeViewModel employee);
        public Task<PostEmployeeViewModel> EditEmployeeAsync(string employeeId, PostEmployeeViewModel employee);
        public Task DeleteEmployeeAsync(string id);
    }
}