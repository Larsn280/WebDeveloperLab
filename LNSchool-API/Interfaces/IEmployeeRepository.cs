using LNSchool_API.ViewModels.EmployeeViewModels;

namespace LNSchool_API.Interfaces
{
    public interface IEmployeeRepository
    {
        public Task<List<EmployeeViewModel>> ListAllEmployeesAsync();
        public Task<PostEmployeeViewModel> AddEmployeeAsync(PostEmployeeViewModel employee);
        public Task DeleteEmployeeAsync(string id);
    }
}