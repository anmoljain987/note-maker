import "./App.css";
import CalenderCont from "./Components/Calender/CalenderCont";
import { Col, Container, Row } from "react-bootstrap";
import CardsContainer from "./Components/Cards/CardsContainer";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const [notes, setNotes] = useState(new Date().toISOString());
  console.log("notes", notes);
  // const temp = [     // Basic Structure of my data
  //   { title: "abc", body: "abs", date: new Date(), current: new Date() },
  // ];
  const datas = useSelector((state) => state.data);

  return (
    <Container className="mt-2 ">
      <Row>
        {" "}
        <Col sm={6}>
          <CalenderCont setNotes={setNotes} />
        </Col>
        <Col sm={6}>
          {" "}
          <CardsContainer notes={datas[notes]} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
