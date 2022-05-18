import "./App.css";
import CalenderCont from "./Components/Calender/CalenderCont";
import { Col, Container, Row } from "react-bootstrap";
import CardsContainer from "./Components/Cards/CardsContainer";
import { useState } from "react";
function App() {
  const [notes, setNotes] = useState([]);
  return (
    <Container className="mt-2 ">
      <Row>
        {" "}
        <Col sm={6}>
          <CalenderCont setNotes={setNotes} />
        </Col>
        <Col sm={6}>
          {" "}
          <CardsContainer notes={notes} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
