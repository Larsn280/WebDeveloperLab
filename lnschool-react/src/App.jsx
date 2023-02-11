// Här importerar vi Reacts react-router-dom
// Reacts navigerings motor...
// import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

// Importera kompenenten Navbar...
// import Navbar from "./components/navbar/Navbar";
// Importera komponenten Home...
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import CourseList from "./components/courses/CourseList";
import AddCourse from "./components/courses/AddCourse";
import EditCourse from "./components/courses/EditCourse";
import Registrate from "./components/registration/Registrate";
import RequireAuth from "./components/authentication/RequireAuth";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layOut/Layout";

import "./utilities.css";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registrate />} />
        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/list" element={<CourseList />} />
          <Route path="/addCourse" element={<AddCourse />} />
          <Route path="/editCourse/:id" element={<EditCourse />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

