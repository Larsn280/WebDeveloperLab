using LNSchool_API.ViewModels.StudentViewModels;

namespace LNSchool_API.Interfaces
{
    public interface IStudentRepository
    {
        public Task<List<StudentViewModel>> ListAllStudentsAsync();
        public Task<StudentViewModel?> GetStudentByIdAsync(string id);
        public Task<PostStudentViewModel> AddStudentAsync(PostStudentViewModel student);
        public Task<PostStudentViewModel> EditStudentAsync(string studentId, PostStudentViewModel student);
        public Task DeleteStudentAsync(string id);
    }
}