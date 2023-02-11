using System.Text.Json;
using LNSchool_API.Models;
using Microsoft.EntityFrameworkCore;

namespace LNSchool_API.Data
{
    public class LoadData
    {
        public static async Task LoadCourses(LNSchoolContext context)
        {
            if(await context.Courses.AnyAsync()) return;

            var courseData = await File.ReadAllTextAsync("Data/SeedData/courses.json");
            var courses = JsonSerializer.Deserialize<List<Course>>(courseData);

            await context.AddRangeAsync(courses!);
            await context.SaveChangesAsync();
        }
    }
}