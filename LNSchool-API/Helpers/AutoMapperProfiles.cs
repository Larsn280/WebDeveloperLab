using AutoMapper;
using LNSchool_API.Models;
using LNSchool_API.ViewModels.CourseViewModels;

namespace LNSchool_API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles() {
            CreateMap<PostCourseViewModel, Course>();
            CreateMap<Course, CourseViewModel>()
              .ForMember(dest => dest.CourseId, options => options.MapFrom(src => src.Id));
        }
    }
}