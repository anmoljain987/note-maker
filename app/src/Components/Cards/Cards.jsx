import React from "react";
import { Card } from "react-bootstrap";
import styles from "./Cards.module.css";

function Cards({ el }) {
  const { title, body, current } = el;

  return (
    <Card className={styles.cards}>
      <Card.Header className={`${styles.header} text-center`}>
        <Card.Title>
          <h2>{title}</h2>
        </Card.Title>
      </Card.Header>
      <Card.Body className={styles.body}>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
      <Card.Footer className={`text-muted ${styles.body}`}>
        <small>{`Created on ${new Intl.DateTimeFormat("en-IN", {
          dateStyle: "full",
          timeStyle: "short",
        }).format(new Date(current))}`}</small>
      </Card.Footer>
    </Card>
  );
}

export default Cards;
