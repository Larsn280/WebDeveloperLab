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
import CustomerCourseList from "./components/courses/CustomerCourseList";
import CustomerCourseDetails from "./components/courses/CustomerCourseDetails";
import EmployeeList from "./components/employees/EmployeeList";
import EditEmployee from "./components/employees/EditEmployee";
import AddEmployee from "./components/employees/AddEmployee";
import StudentList from "./components/students/StudentList";
import EditStudent from "./components/students/EditStudent";
import AddStudent from "./components/students/AddStudent";
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
        <Route path="/registrate" element={<Registrate />} />
        <Route path="/courseDetails/:id" element={<CustomerCourseDetails />} />
        <Route path="/customerList" element={<CustomerCourseList />} />
        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/list" element={<CourseList />} />
          <Route path="/employeeList" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/editEmployee/:id" element={<EditEmployee />} />
          <Route path="/studentList" element={<StudentList />} />
          <Route path="/addStudent" element={<AddStudent />} />
          <Route path="/editStudent/:id" element={<EditStudent />} />
          <Route path="/addCourse" element={<AddCourse />} />
          <Route path="/editCourse/:id" element={<EditCourse />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
