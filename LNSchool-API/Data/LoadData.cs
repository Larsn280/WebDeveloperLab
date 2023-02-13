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

            foreach (var user in users)
            {
                var password = user.UserName.Split("@");
                var result = await userManager.CreateAsync(user, password[0]);

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