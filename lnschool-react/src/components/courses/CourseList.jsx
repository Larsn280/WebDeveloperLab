import CourseItem from "./CourseItem";
import { useEffect, useState } from "react";
import SearchBar from "../searchBar/SearchBar";

function CourseList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState([]);
  console.log(courses);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);

    const url = `${process.env.REACT_APP_BASEURL}/courses/list`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.log("Ingen kurs hittades, eller så gick nått fel");
    } else {
      setCourses(await response.json());
    }
  };

  const deleteCourse = async (id) => {
    console.log(`Tar bort kursen med id ${id}`);
    const url = `${process.env.REACT_APP_BASEURL}/courses/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
    });

    console.log(response);

    if (response.status >= 200 && response.status <= 299) {
      console.log("Kursen är borttagen");
      loadCourses();
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
            <th>Kurs Nummer</th>
            <th>Titel</th>
            <th>KursLängd</th>
            <th>Kategori</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {courses
            .filter((course) => {
              if (searchTerm === "") {
                return course;
              }
              if (
                course.courseTitle
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return course;
              }
            })
            .map((course) => (
              <CourseItem
                course={course}
                key={course.courseId}
                handleDeleteCourse={deleteCourse}
              />
            ))}
        </tbody>
      </table>
    </>
  );
}

export default CourseList;
