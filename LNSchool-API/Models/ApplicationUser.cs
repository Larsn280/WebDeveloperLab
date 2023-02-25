using Microsoft.AspNetCore.Identity;

namespace LNSchool_API.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string? FirstName {get; set;}

        public string? LastName {get; set;}

        public string? UserType {get; set;}
    }
}