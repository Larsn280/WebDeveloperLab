import { useNavigate } from "react-router-dom";

function StudentItem({ student, handleDeleteStudent }) {
  const navigate = useNavigate();

  const onEditClickHandler = () => {
    navigate(`/editStudent/${student.studentId}`);
  };

  const onDeleteClickHandler = () => {
    handleDeleteStudent(student.studentId);
  };

  return (
    <tr>
      <td>
        <span onClick={onEditClickHandler}>
          <h4 className="edit">Edit</h4>
        </span>
      </td>
      <td>{student.firstName}</td>
      <td>{student.lastName}</td>
      <td>{student.userName}</td>
      <td>{student.address}</td>
      <td>{student.phoneNumber}</td>
      <td>{student.email}</td>
      <td>
        <span onClick={onDeleteClickHandler}>
          <h4 className="delete">Delete</h4>
        </span>
      </td>
    </tr>
  );
}

export default StudentItem;
