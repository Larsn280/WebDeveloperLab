import EmployeeItem from "./EmployeeItem";
import { useEffect, useState } from "react";

function EmployeeList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [employees, setEmployees] = useState([]);
  console.log(employees);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);

    const url = `${process.env.REACT_APP_BASEURL}/employees/list`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.log("Ingen kurs hittades, eller så gick nått fel");
    } else {
      setEmployees(await response.json());
    }
  };

  const deleteEmployee = async (id) => {
    console.log(`Tar bort kursen med id ${id}`);
    const url = `${process.env.REACT_APP_BASEURL}/employees/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
    });

    console.log(response);

    if (response.status >= 200 && response.status <= 299) {
      console.log("Anställd är borttagen");
      loadEmployees();
    } else {
      console.log("Det gick fel någonstans");
    }
  };

  const onSearchTermChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search..."
        id="searchTerm"
        name="seachTerm"
        onChange={onSearchTermChangeHandler}
      />
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Förnamn</th>
            <th>Efternamn</th>
            <th>Användarnamn</th>
            <th>Adress</th>
            <th>Telefon</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees
            .filter((employee) => {
              if (searchTerm === "") {
                return employee;
              }
              if (
                employee.userName
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return employee;
              }
            })
            .map((employee) => (
              <EmployeeItem
                employee={employee}
                // key={employee.id}
                // handleDeleteEmployee={deleteEmployee}
              />
            ))}
        </tbody>
      </table>
    </>
  );
}

export default EmployeeList;
