import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/admin/Home";
import AddTeacher from "./components/admin/teacher/addTeacher";
import Login from "./components/admin/login";
import ViewTeacher from "./components/admin/teacher/viewTeacher/viewTeacher";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/admin" element={<Home />}></Route>
          <Route path="/admin/viewTeacher" element={<ViewTeacher />}></Route>
          <Route path="/admin/addTeacher" element={<AddTeacher />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
