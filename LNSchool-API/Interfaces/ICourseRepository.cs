using LNSchool_API.ViewModels.CourseViewModels;

namespace LNSchool_API.Interfaces
{
    public interface ICourseRepository
    {
        public Task<List<CourseViewModel>> ListAllCoursesAsync();
        public Task<CourseViewModel?> GetCourseByIdAsync(int id);
        public Task<CourseViewModel?> GetCourseAsync(string courseNr);
        public Task EditCourseAsync(int courseId, PostCourseViewModel model);
        public Task AddCourseAsync(PostCourseViewModel model);
        public Task DeleteCourseAsync(int id);
        public Task<bool> SaveAllAsync();
    }
}