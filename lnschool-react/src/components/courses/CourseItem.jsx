import { useNavigate } from "react-router-dom";

function CourseItem({ course, handleDeleteCourse }) {
  const navigate = useNavigate();

  const onEditClickHandler = () => {
    navigate(`/editCourse/${course.courseId}`);
  };

  const onDeleteClickHandler = () => {
    handleDeleteCourse(course.courseId);
  };

  return (
    <tr>
      <td>
        <span onClick={onEditClickHandler}>
          <h4 className="edit">Edit</h4>
        </span>
      </td>
      <td>{course.courseNr}</td>
      <td>{course.courseTitle}</td>
      <td>{course.courseLength}</td>
      <td>{course.category}</td>
      <td>
        <span onClick={onDeleteClickHandler}>
          <h4 className="delete">Delete</h4>
        </span>
      </td>
    </tr>
  );
}

export default CourseItem;
