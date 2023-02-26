import StudentItem from "./StudentItem";
import { useEffect, useState } from "react";

function StudentList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents] = useState([]);
  console.log(students);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);

    const url = `${process.env.REACT_APP_BASEURL}/students/list`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.log("Ingen Elev hittades, eller så gick nått fel");
    } else {
      setStudents(await response.json());
    }
  };

  const deleteStudent = async (id) => {
    console.log(`Tar bort eleven med id ${id}`);
    const url = `${process.env.REACT_APP_BASEURL}/students/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
    });

    console.log(response);

    if (response.status >= 200 && response.status <= 299) {
      console.log("Student är borttagen");
      loadStudents();
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
          {students
            .filter((student) => {
              if (searchTerm === "") {
                return student;
              }
              if (
                student.userName
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return student;
              }
            })
            .map((student) => (
              <StudentItem
                student={student}
                key={student.studentId}
                handleDeleteStudent={deleteStudent}
              />
            ))}
        </tbody>
      </table>
    </>
  );
}

export default StudentList;
