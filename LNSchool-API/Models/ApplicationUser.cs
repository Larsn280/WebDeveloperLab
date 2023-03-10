using Microsoft.AspNetCore.Identity;

namespace LNSchool_API.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string? FirstName {get; set;}
        public string? LastName {get; set;}
        public string? Address { get; set; }
        public string? AreasOfExpertise { get; set; }
        public string? ProfileImg { get; set; }
        public string? UserType {get; set;}
    }
}