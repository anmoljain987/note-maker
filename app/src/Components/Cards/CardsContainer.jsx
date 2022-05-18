import React from "react";
// import { useSelector } from "react-redux";
import Cards from "./Cards";
import { Stack } from "react-bootstrap";

function CardsContainer({ notes }) {
  //   const notes = useSelector((state) => state.data);
  //   console.log("notes", notes);
 
//   notes.sort((a, b) => {
//     return new Date(b.current) - new Date(a.current);
//   });
  return notes ? (
    <Stack gap={3} style={{ width: "20rem" }} className="overflow mx-auto">
      {notes.map((el, i) => (
        <Cards el={el} key={i} />
      ))}
    </Stack>
  ) : (
    <h1 className="mx-auto text-center ">No Notes found</h1>
  );
}
export default CardsContainer;
