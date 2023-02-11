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

        public async Task AddCourseAsync(PostCourseViewModel model)
        {
            try {
                var courseToAdd = _mapper.Map<Course>(model);

                await _context.Courses.AddAsync(courseToAdd);
            } catch {
                throw new Exception($"We could not add: {model}");
            }
        }

        public async Task DeleteCourseAsync(int id)
        {
            try {
                var response = await _context.Courses.FindAsync(id);

                if (response is null)
                {
                    throw new Exception($"We could not find a course with id: {id}");
                }

                if (response is not null)
                {
                    _context.Courses.Remove(response);
                }
            } catch {
                throw new Exception($"We could not delete course with id: {id}");
            }
        }

        public async Task EditCourseAsync(int courseId, PostCourseViewModel model)
        {
            try {
                var course = await _context.Courses.FindAsync(courseId);

                if (course is null)
                {
                    throw new Exception($"We could not find any course with id: {courseId}");
                }

                course.CourseNr = model.CourseNr;
                course.CourseTitle = model.CourseTitle;
                course.CourseLength = model.CourseLength;
                course.Category = model.Category;
                course.Description = model.Description;
                course.Details = model.Details;

                _context.Courses.Update(course);
            } catch {
                throw new Exception($"We could not edit course with id: {courseId}");
            }
        }

        public async Task<CourseViewModel?> GetCourseAsync(string courseNr)
        {
            return await _context.Courses.Where(c => c.CourseNr == Convert.ToInt32(courseNr))
            .ProjectTo<CourseViewModel>(_mapper.ConfigurationProvider)
            .SingleOrDefaultAsync();
        }

        public async Task<CourseViewModel?> GetCourseByIdAsync(int id)
        {
            return await _context.Courses.Where(c => c.Id == id)
            .ProjectTo<CourseViewModel>(_mapper.ConfigurationProvider)
            .SingleOrDefaultAsync();
        }

        public async Task<List<CourseViewModel>> ListAllCoursesAsync()
        {
            return await _context.Courses.ProjectTo<CourseViewModel>(_mapper.ConfigurationProvider).ToListAsync();
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}