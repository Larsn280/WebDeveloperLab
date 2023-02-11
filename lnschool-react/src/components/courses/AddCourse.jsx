import { useState } from "react";

function AddCourse() {
  const [courseNr, setCourseNr] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [courseLength, setCourseLength] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");

  const onHandleCourseNrTextChanged = (e) => {
    setCourseNr(e.target.value);
  };
  const onHandleCourseTitleTextChanged = (e) => {
    setCourseTitle(e.target.value);
  };
  const onHandleCourseLengthTextChanged = (e) => {
    setCourseLength(e.target.value);
  };
  const onHandleCategoryTextChanged = (e) => {
    setCategory(e.target.value);
  };
  const onHandleDescriptionTextChanged = (e) => {
    setDescription(e.target.value);
  };
  const onHandleDetailsTextChanged = (e) => {
    setDetails(e.target.value);
  };

  const handleSaveCourse = (e) => {
    e.preventDefault();
    const course = {
      courseNr,
      courseTitle,
      courseLength,
      category,
      description,
      details,
    };

    console.log(course);

    saveCourse(course);
  };

  const saveCourse = async (course) => {
    const url = `${process.env.REACT_APP_BASEURL}/courses`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });

    console.log(response);

    if (response.status >= 200 && response.status <= 299) {
      console.log("Kursen är sparad");
    } else {
      console.log("Det gick fel någonstans");
    }
  };

  return (
    <>
      <h1 className="page-title">Uppdatera kurs</h1>
      <section className="form-container">
        <h4>Kurs information</h4>
        <section className="form-wrapper">
          <form className="form" onSubmit={handleSaveCourse}>
            <div className="form-control">
              <label htmlFor="">Kursnummer</label>
              <input
                onChange={onHandleCourseNrTextChanged}
                value={courseNr}
                type="text"
                id="courseNr"
                name="courseNr"
              />
            </div>
            <div className="form-control">
              <label htmlFor="courseTitle">Kurstitel</label>
              <input
                onChange={onHandleCourseTitleTextChanged}
                value={courseTitle}
                type="text"
                id="courseTitle"
                name="courseTitle"
              />
            </div>
            <div className="form-control">
              <label htmlFor="courseLength">Längd</label>
              <input
                onChange={onHandleCourseLengthTextChanged}
                value={courseLength}
                type="text"
                id="courseLength"
                name="courseLength"
              />
            </div>
            <div className="form-control">
              <label htmlFor="category">Kategori</label>
              <input
                onChange={onHandleCategoryTextChanged}
                value={category}
                type="text"
                id="category"
                name="category"
              />
            </div>
            <div className="form-control">
              <label htmlFor="description">Beskrivning</label>
              <input
                onChange={onHandleDescriptionTextChanged}
                value={description}
                ype="text"
                id="description"
                name="description"
              />
            </div>
            <div className="form-control">
              <label htmlFor="details">Detaljer</label>
              <input
                onChange={onHandleDetailsTextChanged}
                value={details}
                type="text"
                id="details"
                name="details"
              />
            </div>
            <div className="buttons">
              <button type="submit" className="btn">
                Spara
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
}

export default AddCourse;
