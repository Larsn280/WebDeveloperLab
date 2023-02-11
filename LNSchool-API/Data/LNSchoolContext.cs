using LNSchool_API.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace LNSchool_API.Data {
    public class LNSchoolContext : IdentityDbContext
    {
        public DbSet<Course> Courses => Set<Course>();
        public LNSchoolContext(DbContextOptions options) : base(options) { }
    }
}