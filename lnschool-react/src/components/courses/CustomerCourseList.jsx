import { useState, useEffect } from "react";
import CustomerCourseItem from "./CustomerCourseItem";

import "./CustomerCourseList.css";

function CustomerCourseList() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(courses);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const url = `${process.env.REACT_APP_BASEURL}/courses/list`;
    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      console.log("Ingen kurs hittades, eller så gick nått fel");
    } else {
      setCourses(await response.json());
    }
  };

  const onSearchTermChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <h1 className="page-title">Våra aktuella kurser på LNSchool!</h1>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search..."
        id="searchTerm"
        name="seachTerm"
        onChange={onSearchTermChangeHandler}
      />
      <div className="customerCourseList-container">
        {courses
          .filter((course) => {
            if (searchTerm === "") {
              return course;
            }
            if (
              course.category.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return course;
            }
          })
          .map((course) => (
            <CustomerCourseItem course={course} key={course.courseId} />
          ))}
      </div>
    </>
  );
}

export default CustomerCourseList;
