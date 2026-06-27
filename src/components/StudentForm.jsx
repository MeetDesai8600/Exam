import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../redux/actions/studentActions";
import { useNavigate } from "react-router-dom";
function StudentForm() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    rollNumber: "",
    name: "",
    phone: "",
    email: "",
    age: "",
    class: "",
    grade: "",
    image: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  await dispatch(addStudent(student));

  alert("Student Added Successfully");

  navigate("/");
};
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">

          <div className="card shadow-lg border-0">

            <div className="card-header bg-primary text-white text-center">
              <h2>Add Student</h2>
            </div>

            <div className="card-body">

              <form onSubmit={handleSubmit}>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Roll Number
                    </label>
                    <input
                      type="text"
                      name="rollNumber"
                      className="form-control"
                      placeholder="Enter Roll Number"
                      value={student.rollNumber}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Student Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter Name"
                      value={student.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Enter Phone Number"
                      value={student.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter Email"
                      value={student.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      className="form-control"
                      placeholder="Enter Age"
                      value={student.age}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Class
                    </label>
                    <input
                      type="text"
                      name="class"
                      className="form-control"
                      placeholder="BCA / MCA / BSC"
                      value={student.class}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Grade
                    </label>
                    <input
                      type="text"
                      name="grade"
                      className="form-control"
                      placeholder="A+"
                      value={student.grade}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Image URL
                    </label>
                    <input
                      type="text"
                      name="image"
                      className="form-control"
                      placeholder="Paste Image URL"
                      value={student.image}
                      onChange={handleChange}
                    />
                  </div>

                </div>

                <div className="text-center mt-3">

                  <button
                    type="submit"
                    className="btn btn-success btn-lg px-5"
                  >
                    Add Student
                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default StudentForm;