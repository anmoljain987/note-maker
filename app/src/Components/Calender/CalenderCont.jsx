import React, { useState } from "react";
import Calender from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Form, Button, Toast } from "react-bootstrap";
import styles from "./CalenderCont.module.css";
// import { useDispatch } from "react-redux";
// import { dataActions } from "../../Store/index";
function CalenderCont({ setNotes }) {
  const [show, setShow] = useState(false); //This is used to hide the input box when a date is not selected
  const intialData = {
    date: new Date(),
    title: "",
    body: "",
  };
  const [data, setData] = useState(intialData); // This for handling the state of the submit note
  // const dispatch = useDispatch();
  const formHandler = (e) => {
    // This is Used for handling the form's input
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };
  const onChange = (e) => {
    setData({ ...data, date: e });
    setShow(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(dataActions.addData(data));
    setNotes((prev) => [...prev, data]);
    setData(intialData);
    setShow(false);
  };
  const { title, date, body } = data;
  return (
    <Form className="col-md-8 mx-5" onSubmit={submitHandler}>
      {" "}
      <Toast className="text-center mb-2 mx-auto d-flex justify-content-center">
        <h1>Note Maker</h1>
      </Toast>
      <Form.Group className="mb-3 d-flex justify-content-center">
        {" "}
        <Calender
          className={styles.calender}
          minDate={new Date()}
          onChange={onChange}
          name="date"
          value={date}
          activeStartDate={null}
        />
      </Form.Group>
      {show && (
        <>
          <Form.Group className=" mb-3">
            <Form.Control
              className={`${styles.calender} me-auto`}
              name="title"
              value={title}
              placeholder="Add Note Title"
              onChange={formHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              className={`${styles.calender} me-auto`}
              name="body"
              value={body}
              placeholder=" Add Note"
              onChange={formHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex justify-content-end">
            {" "}
            <Button variant="danger" type="submit">
              Submit
            </Button>
          </Form.Group>
        </>
      )}
    </Form>
  );
}

export default CalenderCont;
