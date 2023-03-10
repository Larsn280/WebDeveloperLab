import { useNavigate } from "react-router-dom";

function EmployeeItem({ employee, handleDeleteEmployee }) {
  const navigate = useNavigate();

  const onEditClickHandler = () => {
    navigate(`/editEmployee/${employee.employeeId}`);
  };

  const onDeleteClickHandler = () => {
    handleDeleteEmployee(employee.employeeId);
  };

  return (
    <tr>
      <td>
        <span onClick={onEditClickHandler}>
          <h4 className="edit">Edit</h4>
        </span>
      </td>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.userName}</td>
      <td>{employee.address}</td>
      <td>{employee.phoneNumber}</td>
      <td>{employee.email}</td>
      <td>{employee.areasOfExpertise}</td>
      <td>
        <span onClick={onDeleteClickHandler}>
          <h4 className="delete">Delete</h4>
        </span>
      </td>
    </tr>
  );
}

export default EmployeeItem;
