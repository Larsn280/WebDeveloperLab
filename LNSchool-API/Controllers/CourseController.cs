using LNSchool_API.Interfaces;
using LNSchool_API.ViewModels;
using LNSchool_API.ViewModels.CourseViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LNSchool_API.Controllers
{
    [ApiController]
    [Route("api/v1/courses")]
    public class CourseController : ControllerBase
    {
        private readonly ICourseRepository _courseRepo;

        public CourseController(ICourseRepository courseRepo)
        {
            _courseRepo = courseRepo;
        }

        [HttpGet("list")]
        [Authorize()]
        public async Task<ActionResult<List<CourseViewModel>>> ListCourses()
        {
            return Ok(await _courseRepo.ListAllCoursesAsync());
        }

        [HttpGet("{id}")]    
        public async Task<ActionResult<CourseViewModel>> GetCourseById(int id)
        {
            var response = await _courseRepo.GetCourseByIdAsync(id);

            if (response is null)
                return NotFound($"Vi kunde inte hitta någon kurs med id: {id}");
            return Ok(response);
        }

        [HttpPost()]
        public async Task<ActionResult> AddCourse(PostCourseViewModel model)
        {
            try
            {
                if (await _courseRepo.GetCourseAsync(Convert.ToString(model.CourseNr).ToLower()) is not null)
                {
                var error = new ErrorViewModel{
                    StatusCode = 400,
                    StatusText = $"Registreringsnummer {model.CourseNr} finns redan i systemet"
                };
                
                return BadRequest(error);
                }

                await _courseRepo.AddCourseAsync(model);

                if (await _courseRepo.SaveAllAsync())
                {
                return StatusCode(201);
                }

                return StatusCode(500, "Det gick inte att spara kursen");
            }
            catch (Exception ex)
            {
                var error = new ErrorViewModel{
                    StatusCode = 500,
                    StatusText = ex.Message
                };
                return StatusCode(500, error);
            }
        }

        [HttpPut("{courseId}")]
        public async Task<ActionResult> EditCourse(int courseId, PostCourseViewModel model)
        {
            try
            {
                await _courseRepo.EditCourseAsync(courseId, model);

                if (await _courseRepo.SaveAllAsync())
                {
                return NoContent(); //Status kod 204...
                }

                return StatusCode(500, "Ett fel inträffade när kursen skulle uppdateras");

            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteCourse(int id)
        {
        try
        {
            await _courseRepo.DeleteCourseAsync(id);

            if (await _courseRepo.SaveAllAsync())
            {
                return NoContent();
            }

            return StatusCode(500, "Hoppsan något gick fel");
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
        }
    
    }
}