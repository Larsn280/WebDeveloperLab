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
                        StudentId = studeing.Id,
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

        public async Task<StudentViewModel?> GetStudentByIdAsync(string id)
        {
            var selectedStudent = await _userManager.FindByIdAsync(id);

            StudentViewModel student = new StudentViewModel();

            if(selectedStudent != null) {

                student.StudentId = selectedStudent.Id;
                student.UserName = selectedStudent.UserName;
                student.FirstName = selectedStudent.FirstName;
                student.LastName = selectedStudent.LastName;
                student.Address = selectedStudent.Address;
                student.PhoneNumber = selectedStudent.PhoneNumber;
                student.Email = selectedStudent.Email;

                return student;
            }
            return null!;
        }

        public async Task<PostStudentViewModel> AddStudentAsync(PostStudentViewModel student)
        {
        var user = new ApplicationUser
        {
            UserName = student.UserName,
            FirstName = student.FirstName,
            LastName = student.LastName,
            Address = student.Address,
            PhoneNumber = student.PhoneNumber,
            Email = student.Email,
            UserType = student.UserType
        };

        var result = await _userManager.CreateAsync(user, "1");

        if(result.Succeeded)
        {
            return student;
        }

        return null!;
        }

        public async Task<PostStudentViewModel> EditStudentAsync(string studentId, PostStudentViewModel student)
        {
        var user = await _userManager.FindByIdAsync(studentId);

        if(user == null)
        {
        return null!;
        }

        user.FirstName = student.FirstName;
        user.LastName = student.LastName;
        user.UserName = student.UserName;
        user.Address = student.Address;
        user.PhoneNumber = student.PhoneNumber;
        user.Email = student.Email;

        var result = await _userManager.UpdateAsync(user);

        if(result.Succeeded)
        {
        return student;
        }

        return null!;
        }

        public async Task DeleteStudentAsync(string id) 
        {
            try {
                var response = await _userManager.FindByIdAsync(id); 

                if (response is null)
                {
                    throw new Exception($"We could not find a employee with id: {id}");
                }
                await _userManager.DeleteAsync(response);

            } catch {
                throw new Exception($"We could not delete employee with id: {id}");
            }
        }
    }
}