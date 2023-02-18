using System.Text.Json;
using LNSchool_API.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace LNSchool_API.Data
{
    public class LoadData
    {
        public static async Task LoadUsers(LNSchoolContext context, UserManager<ApplicationUser> userManager)
        {
            if (await context.Users.AnyAsync()) return;

            var userData = await File.ReadAllTextAsync("Data/SeedData/users.json");
            var users = JsonSerializer.Deserialize<List<ApplicationUser>>(userData);

            var studentData = await File.ReadAllTextAsync("Data/SeedData/students.json");
            var students = JsonSerializer.Deserialize<List<ApplicationUser>>(studentData);

            var employeeData = await File.ReadAllTextAsync("Data/SeedData/employees.json");
            var employees = JsonSerializer.Deserialize<List<ApplicationUser>>(employeeData);

            List<ApplicationUser> seedUsers = new List<ApplicationUser>();
            seedUsers.AddRange(users!);
            seedUsers.AddRange(students!);
            seedUsers.AddRange(employees!);

            foreach (var seedUser in seedUsers)
            {
                var result = await userManager.CreateAsync(seedUser, "1");

                if (!result.Succeeded)
                {
                    throw new Exception("Failed to seed user data");
                }
            }
        }
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