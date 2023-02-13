using Microsoft.AspNetCore.Identity;

namespace LNSchool_API.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string? UserType {get; set;}
    }
}