import { useNavigate } from "react-router-dom";

function StudentItem({ student, handleDeleteStudent }) {
  const navigate = useNavigate();

  const onEditClickHandler = () => {
    navigate(`/editStudent/${student.id}`);
  };

  const onDeleteClickHandler = () => {
    handleDeleteStudent(student.id);
  };

  return (
    <tr>
      <td>
        <span onClick={onEditClickHandler}>
          <h4 className="edit">Edit</h4>
        </span>
      </td>
      <td>{student.userName}</td>
      <td>
        <span onClick={onDeleteClickHandler}>
          <h4 className="delete">Delete</h4>
        </span>
      </td>
    </tr>
  );
}

export default StudentItem;
