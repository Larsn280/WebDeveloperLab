import { useNavigate } from "react-router-dom";

function EmployeeItem({ employee, handleDeleteEmployee }) {
  const navigate = useNavigate();

  const onEditClickHandler = () => {
    navigate(`/editEmployee/${employee.id}`);
  };

  const onDeleteClickHandler = () => {
    handleDeleteEmployee(employee.id);
  };

  return (
    <tr>
      <td>
        <span onClick={onEditClickHandler}>
          <h4 className="edit">Edit</h4>
        </span>
      </td>
      <td>{employee.userName}</td>
      <td>
        <span onClick={onDeleteClickHandler}>
          <h4 className="delete">Delete</h4>
        </span>
      </td>
    </tr>
  );
}

export default EmployeeItem;
