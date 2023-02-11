import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registrate() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleEmailTextChanged = (e) => {
    setEmail(e.target.value);
  };

  const onHandlePasswordTextChanged = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const url = `${process.env.REACT_APP_BASEURL}/auth/register`;
    console.log(url);

    const user = {
      email: email,
      password: password,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    console.log(response);

    if (response.status >= 200 && response.status <= 299) {
      const result = await response.json();
      localStorage.setItem("token", JSON.stringify(result.token));
      navigate("/login");
    } else {
      console.log("Det gick inte att registrera dig...");
    }
  };

  return (
    <>
      <h1 className="page-title">Registrera</h1>
      <section className="form-container">
        <h4>Användar info</h4>
        <section className="form-wrapper">
          <form className="form" onSubmit={handleRegister}>
            <div className="form-control">
              <label htmlFor="Email">Email</label>
              <input
                onChange={onHandleEmailTextChanged}
                value={email}
                type="text"
                id="email"
                name="email"
              />
            </div>
            <div className="form-control">
              <label htmlFor="password">Lösenord</label>
              <input
                onChange={onHandlePasswordTextChanged}
                value={password}
                type="password"
                id="password"
                name="password"
              />
            </div>
            <div className="buttons">
              <button type="submit" className="btn">
                Registrera
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
}

export default Registrate;
