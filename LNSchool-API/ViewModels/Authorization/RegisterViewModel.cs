using System.ComponentModel.DataAnnotations;

namespace LNSchool_API.ViewModels.Authorization
{
    public class RegisterViewModel
    {
        [Required]
        [EmailAddress(ErrorMessage = "Felaktig e-post adress")]
        public string? Email { get; set; }
        [Required]
        public string? Password { get; set; }
        // public bool IsAdmin { get; set; } = false;
        // public bool IsHeadmaster { get; set; } = false;
        // public bool IsTeacher { get; set; } = false;
    }
}