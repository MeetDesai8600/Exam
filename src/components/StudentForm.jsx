import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, updateStudent } from "../redux/actions/studentActions";
import { useNavigate, useParams } from "react-router-dom";

function StudentForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const students = useSelector((state) => state.students);

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

  // Load existing student while editing
  useEffect(() => {
    if (id) {
      const existingStudent = students.find(
        (student) => String(student.id) === String(id)
      );

      if (existingStudent) {
        setStudent(existingStudent);
      }
    }
  }, [id, students]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id) {
      await dispatch(updateStudent(id, student));
      alert("Student Updated Successfully");
    } else {
      await dispatch(addStudent(student));
      alert("Student Added Successfully");
    }

    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">

        <div className="col-md-8">

          <div className="card shadow-lg">

            <div className="card-header bg-primary text-white text-center">
              <h2>{id ? "Update Student" : "Add Student"}</h2>
            </div>

            <div className="card-body">

              <form onSubmit={handleSubmit}>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Roll Number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="rollNumber"
                      value={student.rollNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Student Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={student.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={student.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={student.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Age</label>
                    <input
                      type="number"
                      className="form-control"
                      name="age"
                      value={student.age}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Class</label>
                    <input
                      type="text"
                      className="form-control"
                      name="class"
                      value={student.class}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Grade</label>
                    <input
                      type="text"
                      className="form-control"
                      name="grade"
                      value={student.grade}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Image URL</label>
                    <input
                      type="text"
                      className="form-control"
                      name="image"
                      value={student.image}
                      onChange={handleChange}
                    />
                  </div>

                </div>

                <div className="text-center mt-4">

                  <button
                    type="submit"
                    className={`btn btn-lg px-5 ${
                      id ? "btn-warning" : "btn-success"
                    }`}
                  >
                    {id ? "Update Student" : "Add Student"}
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