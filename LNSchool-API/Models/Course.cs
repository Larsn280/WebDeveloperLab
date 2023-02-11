namespace LNSchool_API.Models
{
    public class Course
    {
        public int Id { get; set; }
        public int CourseNr { get; set; }
        public string? CourseTitle { get; set; }
        public string? CourseLength { get; set; }
        public string? Category { get; set; }
        public string? Description { get; set; }
        public string? Details { get; set; }
    }
}