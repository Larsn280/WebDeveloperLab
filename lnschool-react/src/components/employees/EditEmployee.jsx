import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditEmployee() {
  const params = useParams();
  const [employeeId, setEmployeeId] = useState("");
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [areasOfExpertise, setAreasOfExpertise] = useState("");
  const [userType, setUserType] = useState("");

  useEffect(() => {
    fetchEmployee(params.id);
  }, [params.id]);

  const fetchEmployee = async (id) => {
    console.log(id);
    const url = `${process.env.REACT_APP_BASEURL}/employees/${id}`;

    const response = await fetch(url);
    console.log(response);

    if (!response.ok) {
      console.log("Hittade inga anställda, eller så gick något fel");
    }

    const employee = await response.json();
    console.log(employee);
    setEmployeeId();
    setUserName();
    setFirstName();
    setLastName();
    setAddress();
    setPhoneNumber();
    setEmail();
    setAreasOfExpertise();
    setUserType();
  };

  const onHandleEmployeeIdTextChanged = (e) => {
    setEmployeeId(e.target.value);
  };
  const onHandleUserNameTextChanged = (e) => {
    setUserName(e.target.value);
  };
  const onHandleFirstNameTextChanged = (e) => {
    setFirstName(e.target.value);
  };
  const onHandleLastNameTextChanged = (e) => {
    setLastName(e.target.value);
  };
  const onHandleAddressTextChanged = (e) => {
    setAddress(e.target.value);
  };
  const onHandlePhoneNumberTextChanged = (e) => {
    setPhoneNumber(e.target.value);
  };
  const onHandleEmailTextChanged = (e) => {
    setEmail(e.target.value);
  };
  const onHandleAreasOfExpertiseTextChanged = (e) => {
    setAreasOfExpertise(e.target.value);
  };
  const onHandleUserTypeTextChanged = (e) => {
    setUserType(e.target.value);
  };

  const handleSaveEmployee = (e) => {
    e.preventDefault();
    const employee = {
      employeeId,
      userName,
      firstName,
      lastName,
      address,
      phoneNumber,
      email,
      areasOfExpertise,
      userType,
    };

    console.log(employee);

    saveEmployee(employee);
  };

  const saveEmployee = async (employee) => {
    const url = `${process.env.REACT_APP_BASEURL}/employees/${employeeId}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });

    console.log(response);

    if (response.status >= 200 && response.status <= 299) {
      console.log("Anställd är sparad");
    } else {
      console.log("Det gick fel någonstans");
    }
  };

  return (
    <>
      <h1 className="page-title">Uppdatera Anställd</h1>
      <section className="form-container">
        <h4>Anställd information</h4>
        <section className="form-wrapper">
          <form className="form" onSubmit={handleSaveEmployee}>
            <input
              onChange={onHandleEmployeeIdTextChanged}
              value={employeeId}
              type="hidden"
              id="employeeId"
              name="employeeId"
            />
            <div className="form-control">
              <label htmlFor="">Användarnamn</label>
              <input
                onChange={onHandleUserNameTextChanged}
                value={userName}
                type="text"
                id="userName"
                name="userName"
              />
            </div>
            <div className="form-control">
              <label htmlFor="firstName">Förnamn</label>
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

export default EditEmployee;
