import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/admin/Home";
import AddTeacher from "./components/admin/teacher/addTeacher/addTeacher";
import AdminLogin from "./components/admin/login/login";
import ViewTeacher from "./components/admin/teacher/viewTeacher/viewTeacher";
import EditTeacher from "./components/admin/teacher/editTeacher/editTeacher";
import ViewParents from "./components/admin/parents/viewParents";
import ViewStudents from "./components/admin/students/viewStudents";
import TeacherHome from "./components/teacher/Home";
import TeacherLogin from "./components/teacher/login/login";
import ParentsHome from "./components/parents/Home";
import ParentsRegister from "./components/parents/parent_register/register";
import ParentsLogin from "./components/parents/login/login";
import StudentRegister from "./components/parents/student_register/std_register";
import StudentLogin from "./components/students/login";
import StudentsHome from "./components/students/home";
import Main from "./components/home/Home";
import { AdminLayout } from "./components/layout/adminLayout";
import { TeacherLayout } from "./components/layout/teacherLayout";
import { StudentLayout } from "./components/layout/studentLayout";
import { ParentsLayout } from "./components/layout/parentsLayout";

import Games from "./components/students/games/gameHome";
import Snake from "./components/students/games/snake/snake";
import ProfilePage from "./components/admin/teacher/viewTeacher/profile";
import Student_profile from "./components/admin/students/student_profile";
import Teacher_Students from "./components/admin/teacher/viewTeacher/teacherStudents";
import Students from "./components/teacher/components/students";
import StudentProfile from "./components/parents/student_register/studentProfile";
import Typing from "./components/students/games/typing";
import Guess from "./components/students/games/guess";
import Fruit from "./components/students/games/fruit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/admin/login" element={<AdminLogin />}></Route>
          <Route path="/teacher/login" element={<TeacherLogin />}></Route>
          <Route path="/parents/login" element={<ParentsLogin />}></Route>
          <Route path="/parents/register" element={<ParentsRegister />}></Route>
          <Route path="/student/login" element={<StudentLogin />}></Route>

          <Route path="/admin" element={<AdminLayout />}>
            {/* <Route path="/admin/login" element={<Home />}></Route> */}

            <Route path="home" element={<Home />}></Route>
            <Route path="viewTeacher" element={<ViewTeacher />} />
            <Route path="addTeacher" element={<AddTeacher />} />
            <Route path="editTeacher/:id" element={<EditTeacher />} />
            <Route path="profile/:id" element={<ProfilePage />} />
            <Route path="teacher/students/:id" element={<Teacher_Students />} />

            <Route path="student_profile" element={<Student_profile />} />
            <Route path="viewParents" element={<ViewParents />}></Route>
            <Route path="viewStudent" element={<ViewStudents />}></Route>
          </Route>

          <Route path="/teacher" element={<TeacherLayout />}>
            <Route path="home" element={<TeacherHome />}></Route>
            <Route path="students/:id" element={<Students />} />
          </Route>

          <Route path="/parents" element={<ParentsLayout />}>
            <Route path="home" element={<ParentsHome />}></Route>
            <Route
              path="student_register"
              element={<StudentRegister />}
            ></Route>
            <Route
              path="studentProfile/:id"
              element={<StudentProfile />}
            ></Route>
          </Route>

          <Route path="/student" element={<StudentLayout />}>
            <Route path="home" element={<StudentsHome />}></Route>
            <Route path="games" element={<Games />}></Route>
            <Route path="games/snake" element={<Snake />}></Route>
            <Route path="typing/:id" element={<Typing />}></Route>
            <Route path="guess/:id" element={<Guess />}></Route>
            <Route path="fruit/:id" element={<Fruit />}></Route>


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
