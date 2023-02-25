using LNSchool_API.Interfaces;
using LNSchool_API.Models;
using LNSchool_API.ViewModels.StudentViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace LNSchool_API.Repositories
{
    public class StudentRepository : IStudentRepository
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public StudentRepository(UserManager<ApplicationUser> userManager) {
            _userManager = userManager;
        }

        public async Task<List<StudentViewModel>> ListAllStudentsAsync()
        {
            List<ApplicationUser> allUsers = await _userManager.Users.ToListAsync();
            List<StudentViewModel> allStudents = new List<StudentViewModel>();
            StudentViewModel student = new StudentViewModel();

            foreach(var studeing in allUsers) {
                
                if(studeing.UserType == "IsStudent") {

                    student = new StudentViewModel
                    {
                        FirstName = studeing.FirstName,
                        LastName = studeing.LastName,
                        UserName = studeing.UserName,
                        Address = studeing.Address,
                        PhoneNumber = studeing.PhoneNumber,
                        Email = studeing.Email
                    };

                    allStudents.Add(student);
                }
            }

            return allStudents;
        }
    }
}