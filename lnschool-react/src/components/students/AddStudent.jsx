import { useState } from "react";

function AddStudent() {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");

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
  const onHandleUserTypeTextChanged = (e) => {
    setUserType(e.target.value);
  };

  const handleSaveStudent = (e) => {
    e.preventDefault();
    const student = {
      userName,
      firstName,
      lastName,
      address,
      phoneNumber,
      email,
      userType,
    };

    console.log(student);

    saveStudent(student);
  };

  const saveStudent = async (student) => {
    const url = `${process.env.REACT_APP_BASEURL}/students`;
    const response = await fetch(url, {
      method: "POST",
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
      <h1 className="page-title">Lägg till Elev</h1>
      <section className="form-container">
        <h4>Elev information</h4>
        <section className="form-wrapper">
          <form className="form" onSubmit={handleSaveStudent}>
            <div className="form-control">
              <label htmlFor="userName">Användarnamn</label>
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
            <div className="form-control">
              <label htmlFor="userType">Användartyp</label>
              <input
                onChange={onHandleUserTypeTextChanged}
                value={userType}
                type="text"
                id="userType"
                name="userType"
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

export default AddStudent;
