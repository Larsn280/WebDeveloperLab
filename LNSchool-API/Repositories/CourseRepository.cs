using AutoMapper;
using AutoMapper.QueryableExtensions;
using LNSchool_API.Data;
using LNSchool_API.Interfaces;
using LNSchool_API.Models;
using LNSchool_API.ViewModels.CourseViewModels;
using Microsoft.EntityFrameworkCore;

namespace LNSchool_API.Repositories
{
    public class CourseRepository : ICourseRepository
    {
        private readonly LNSchoolContext _context;
        private readonly IMapper _mapper;

        public CourseRepository(LNSchoolContext context, IMapper mapper)
        {
           _mapper = mapper;
           _context = context;
        }

        public Task AddCourseAsync(PostCourseViewModel model)
        {
            throw new NotImplementedException();
        }

        public Task DeleteCourseAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task EditCourseAsync(int courseId, PostCourseViewModel model)
        {
            throw new NotImplementedException();
        }

        public Task<CourseViewModel?> GetCourseAsync(string courseNr)
        {
            throw new NotImplementedException();
        }

        public Task<CourseViewModel?> GetCourseByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<List<CourseViewModel>> ListAllCoursesAsync()
        {
            throw new NotImplementedException();
        }

        public Task<bool> SaveAllAsync()
        {
            throw new NotImplementedException();
        }
    }
}