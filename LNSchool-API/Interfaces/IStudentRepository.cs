using LNSchool_API.ViewModels.StudentViewModels;

namespace LNSchool_API.Interfaces
{
    public interface IStudentRepository
    {
        public Task<List<StudentViewModel>> ListAllStudentsAsync();
    }
}