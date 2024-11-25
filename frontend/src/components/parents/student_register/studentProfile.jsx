import { useParams } from "react-router-dom";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import { useEffect, useState } from "react";

function StudentProfile() {
  const { id } = useParams();
  const [student, setStudent] = useState();
  useEffect(() => {
    let datas = new FormData();
    datas.append("id", id);
    fetch("http://localhost:4000/parent/view_student", {
      method: "post",
      body: datas,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("result", result);
        setStudent(result);
      });
  }, []);
  return (
    <>
      <Header />
      <div>{id}</div>
      <Footer />
    </>
  );
}
export default StudentProfile;
