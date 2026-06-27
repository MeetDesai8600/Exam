import { useDispatch } from "react-redux";

import { deleteStudent } from "../redux/actions/studentActions";

import { useNavigate } from "react-router-dom";

function StudentDetails({ student }) {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleDelete = () => {

    const confirmDelete =
      window.confirm("Are you sure you want to delete this student?");

    if (confirmDelete) {

      dispatch(deleteStudent(student.id));

      alert("Student Deleted Successfully");
    }
  };

  const handleEdit = () => {

    navigate(`/edit/${student.id}`);
  };

  return (

    <div className="col-md-4 mb-4">

      <div className="card shadow h-100">

        {/* Student Image */}

        <img src={student.image || "https://via.placeholder.com/300"}
          alt={student.name}
          className="card-img-top"
          style={{
            height: "250px",
            objectFit: "cover",
          }}
        />

        <div className="card-body">

          <h4 className="card-title">
            {student.name}
          </h4>

          <hr />

          <p>
            <strong>
              Roll No:
            </strong>{" "}
            {student.rollNumber}
          </p>

          <p><strong>Phone:</strong>{" "}
            {student.phone}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {student.email}
          </p>

          <p>
            <strong>Age:</strong>{" "}
            {student.age}
          </p>

          <p>
            <strong>Class:</strong>{" "}
            {student.class}
          </p>

          <p>
            <strong>Grade:</strong>{" "}
            {student.grade}
          </p>

        </div>

        <div className="card-footer bg-white">

          <button className="btn btn-warning me-2" onClick={handleEdit}>
            Edit
          </button>

          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default StudentDetails;