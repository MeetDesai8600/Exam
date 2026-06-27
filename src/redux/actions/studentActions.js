import axios from "axios";

const API_URL = "http://localhost:3000/students";

// FETCH STUDENTS

export const fetchStudents = () => async (dispatch) => {

  dispatch({
    type: "FETCH_STUDENTS_REQUEST"
  });

  try {

    const response = await axios.get(API_URL);

    dispatch({
      type: "FETCH_STUDENTS_SUCCESS",
      payload: response.data
    });

  } catch (error) {

    dispatch({
      type: "FETCH_STUDENTS_FAILURE",
      payload: error.message
    });

  }
};

// ADD STUDENT

export const addStudent = (student) => async (dispatch) => {

  try {

    const response = await axios.post(
      API_URL,
      student
    );

    dispatch({
      type: "ADD_STUDENT",
      payload: response.data
    });

  } catch (error) {

    console.log(error);

  }
};

// UPDATE STUDENT

export const updateStudent = (id, student) =>
  async (dispatch) => {

    try {

      const response = await axios.put(
        `${API_URL}/${id}`,
        student
      );

      dispatch({
        type: "UPDATE_STUDENT",
        payload: response.data
      });

    } catch (error) {

      console.log(error);

    }
};

// DELETE STUDENT

export const deleteStudent = (id) =>
  async (dispatch) => {

    try {

      await axios.delete(
        `${API_URL}/${id}`
      );

      dispatch({
        type: "DELETE_STUDENT",
        payload: id
      });

    } catch (error) {

      console.log(error);

    }
};