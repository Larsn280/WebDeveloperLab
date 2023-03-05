import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CustomerCourseDetails() {
  const params = useParams();
  const [courseNr, setCourseNr] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [courseLength, setCourseLength] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");
  console.log(params.id);

  useEffect(() => {
    fetchCourse(params.id);
  }, [params.id]);

  const fetchCourse = async (id) => {
    console.log(id);
    const url = `${process.env.REACT_APP_BASEURL}/courses/${id}`;

    const response = await fetch(url);
    console.log(response);

    if (!response.ok) {
      console.log("Hittade inga kurser, eller så gick något fel");
    }

    const course = await response.json();
    setCourseNr(course.courseNr);
    setCourseTitle(course.courseTitle);
    setCourseLength(course.courseLength);
    setCategory(course.category);
    setDescription(course.description);
    setDetails(course.details);
    console.log(course);
  };

  return (
    <>
      <h1 className="page-title">{courseTitle}</h1>
      <div className="courseDetails-container">
        <div className="mainInfo-text">
          <h2>Kursnummer: {courseNr}</h2>
          <h2>Längd: {courseLength}</h2>
          <h2>Kategori: {category}</h2>
        </div>
        <div className="subInfo-text">
          <h4>Beskrivning: {description}</h4>
          <h3>Detaljer: {details}</h3>
        </div>
      </div>
    </>
  );
}

export default CustomerCourseDetails;
