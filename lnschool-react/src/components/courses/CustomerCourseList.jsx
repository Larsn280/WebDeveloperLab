import { useState, useEffect } from "react";
import CustomerCourseItem from "./CustomerCourseItem";

import "./CustomerCourseList.css";

function CustomerCourseList() {
  const [courses, setCourses] = useState([]);
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

  return (
    <div className="customerCourseList-container">
      {courses.map((course) => (
        <CustomerCourseItem course={course} key={course.courseId} />
      ))}
    </div>
  );
}

export default CustomerCourseList;
