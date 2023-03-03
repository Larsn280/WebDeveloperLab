import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditStudent() {
  const params = useParams();
  const [studentId, setStudentId] = useState("");
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchStudent(params.id);
  }, [params.id]);

  const fetchStudent = async (id) => {
    console.log(id);
    const url = `${process.env.REACT_APP_BASEURL}/students/${id}`;

    const response = await fetch(url);
    console.log(response);

    if (!response.ok) {
      console.log("Hittade inga studenter, eller så gick något fel");
    }

    const student = await response.json();
    console.log(student);
    setStudentId(student.studentId);
    setUserName(student.userName);
    setFirstName(student.firstName);
    setLastName(student.lastName);
    setAddress(student.address);
    setPhoneNumber(student.phoneNumber);
    setEmail(student.email);
  };

  const onHandleStudentIdTextChanged = (e) => {
    setStudentId(e.target.value);
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

  const handleSaveStudent = (e) => {
    e.preventDefault();
    const student = {
      studentId,
      userName,
      firstName,
      lastName,
      address,
      phoneNumber,
      email,
    };

    console.log(student);

    saveStudent(student);
  };

  const saveStudent = async (student) => {
    const url = `${process.env.REACT_APP_BASEURL}/students/${studentId}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });

    console.log(response);

    if (response.status >= 200 && response.status <= 299) {
      console.log("Student är sparad");
    } else {
      console.log("Det gick fel någonstans");
    }
  };

  return (
    <>
      <h1 className="page-title">Uppdatera Student</h1>
      <section className="form-container">
        <h4>Student information</h4>
        <section className="form-wrapper">
          <form className="form" onSubmit={handleSaveStudent}>
            <input
              onChange={onHandleStudentIdTextChanged}
              value={studentId}
              type="hidden"
              id="studentId"
              name="studentId"
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
                onChange={onHandleFirstNameTextChanged}
                value={firstName}
                type="text"
                id="firstName"
                name="firstName"
              />
            </div>
            <div className="form-control">
              <label htmlFor="lastName">Efternamn</label>
              <input
                onChange={onHandleLastNameTextChanged}
                value={lastName}
                type="text"
                id="lastName"
                name="lastName"
              />
            </div>
            <div className="form-control">
              <label htmlFor="address">Adress</label>
              <input
                onChange={onHandleAddressTextChanged}
                value={address}
                type="text"
                id="address"
                name="address"
              />
            </div>
            <div className="form-control">
              <label htmlFor="phoneNumber">Tel</label>
              <input
                onChange={onHandlePhoneNumberTextChanged}
                value={phoneNumber}
                ype="text"
                id="phoneNumber"
                name="phoneNumber"
              />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input
                onChange={onHandleEmailTextChanged}
                value={email}
                type="text"
                id="email"
                name="email"
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

export default EditStudent;
