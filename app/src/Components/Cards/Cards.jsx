import React from "react";
import { Card } from "react-bootstrap";
import styles from "./Cards.module.css";

function Cards({ el }) {
  const { title, body, date } = el;

  return (
    <Card className={styles.cards}>
      <Card.Header className={`${styles.header} text-center`}>
        <Card.Title>{title}</Card.Title>
      </Card.Header>
      <Card.Body className={styles.body}>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
      <Card.Footer className={`text-muted ${styles.body}`}>
        <small>{new Intl.DateTimeFormat("en-IN").format(new Date(date))}</small>
      </Card.Footer>
    </Card>
  );
}

export default Cards;
