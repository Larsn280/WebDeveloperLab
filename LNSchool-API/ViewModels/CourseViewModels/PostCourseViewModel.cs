using System.ComponentModel.DataAnnotations;

namespace LNSchool_API.ViewModels.CourseViewModels
{
    public class PostCourseViewModel
    {
        [Required(ErrorMessage = "Kursnummer är obligatoriskt")]
        public int CourseNr { get; set; }
        public string? CourseTitle { get; set; }
        public string? CourseLength { get; set; }
        public string? Category { get; set; }
        public string? Description { get; set; }
        public string? Details { get; set; }
    }
}