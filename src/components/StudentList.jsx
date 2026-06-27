import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchStudents } from "../redux/actions/studentActions";
import StudentDetails from "./StudentDetails";

function StudentList() {

  const dispatch = useDispatch();

  const {
    students,
    loading,
    error
  } = useSelector((state) => state);

  const [sortBy, setSortBy] =
    useState("");

  const [filterClass, setFilterClass] =
    useState("");

  useEffect(() => {

    dispatch(fetchStudents());

  }, [dispatch]);

  // FILTER

  let filteredStudents = [...students];

  if (filterClass !== "") {

    filteredStudents =
      filteredStudents.filter(
        (student) =>
          student.class === filterClass
      );
  }

  // SORT

  if (sortBy === "name") {

    filteredStudents.sort(
      (a, b) =>
        a.name.localeCompare(b.name)
    );
  }

  if (sortBy === "roll") {

    filteredStudents.sort(
      (a, b) =>
        Number(a.rollNumber) -
        Number(b.rollNumber)
    );
  }

  // LOADING

  if (loading) {

    return (
      <div className="container mt-5">
        <h2>Loading Students...</h2>
      </div>
    );
  }

  // ERROR

  if (error) {

    return (
      <div className="container mt-5">

        <h2 className="text-danger">
          {error}
        </h2>

      </div>
    );
  }

  return (

    <div className="container mt-4">

      <h2 className="mb-4">
        Student List
      </h2>

      {/* SORT & FILTER */}

      <div className="row mb-4">

        <div className="col-md-4">

          <select
            className="form-select"
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
          >

            <option value="">
              Sort Students
            </option>

            <option value="name">
              Sort By Name
            </option>

            <option value="roll">
              Sort By Roll Number
            </option>

          </select>

        </div>

        <div className="col-md-4">

          <select
            className="form-select"
            value={filterClass}
            onChange={(e) =>
              setFilterClass(
                e.target.value
              )
            }
          >

            <option value="">
              All Classes
            </option>

            <option value="BCA">
              BCA
            </option>

            <option value="MCA">
              MCA
            </option>

            <option value="BSC">
              BSC
            </option>

          </select>

        </div>

      </div>

      {/* STUDENTS */}

      <div className="row">

        {filteredStudents.length === 0 ? (

          <h4>No Students Found</h4>

        ) : (

          filteredStudents.map(
            (student) => (

              <StudentDetails
                key={student.id}
                student={student}
              />

            )
          )

        )}

      </div>

    </div>
  );
}

export default StudentList;