import { useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
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
import StudentLogin from "./components/students/login/login";
import StudentsHome from "./components/students/home";
import Main from "./components/home/Home";
import Tic_tac from "./games/tic_tac/tic_tac";
import Typing from "./games/typing/typing";
import Snake from "./games/snake/snake";
import Guess from "./games/guess/guess";
import { AdminLayout } from "./components/layout/adminLayout";

function App() {
    const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem("admin")));
    const [teacher, setTeacher] = useState(JSON.parse(localStorage.getItem("teacher")));

    // console.log("qq", teacher);

    return (
        <>
            <BrowserRouter>
                <Routes>
                   
                        <Route path="/" element={<Main />}></Route>
                        <Route path="/admin/login" element={<AdminLogin />}></Route>
                        {/* {admin?.name === "admin" && ( */}
              {/* <> */ }
              
              <Route path="/admin" element={<AdminLayout/>}>

                                <Route path="home" element={<Home />}></Route>
                                <Route path="viewTeacher" element={<ViewTeacher />} />
                                <Route path="addTeacher" element={<AddTeacher />} />
                                <Route path="editTeacher" element={<EditTeacher />} />
                                <Route path="viewParents" element={<ViewParents />}></Route>
                                <Route path="viewStudent" element={<ViewStudents />}></Route>
              </Route>
                            {/* </> */}
                        {/* )} */}

                        <Route path="/teacher/login" element={<TeacherLogin />}></Route>
                        {teacher?.status === "teacher" && (
                            <>
                                <Route path="/teacher/home" element={<TeacherHome />}></Route>
                            </>
                        )}

                        <Route path="/parents/home" element={<ParentsHome />}></Route>
                        <Route path="/parents/login" element={<ParentsLogin />}></Route>

                        <Route path="/parents/register" element={<ParentsRegister />}></Route>
                        <Route path="/parents/student_register" element={<StudentRegister />}></Route>
                        <Route path="/student/login" element={<StudentLogin />}></Route>
                        <Route path="/students/home" element={<StudentsHome />}></Route>
                        <Route path="/games/tictac" element={<Tic_tac />}></Route>
                        <Route path="/games/typing" element={<Typing />}></Route>
                        <Route path="/games/snake" element={<Snake />}></Route>
                        <Route path="/games/guess" element={<Guess />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
