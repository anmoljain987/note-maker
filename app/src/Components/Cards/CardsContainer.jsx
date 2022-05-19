import React from "react";
// import { useSelector } from "react-redux";
import Cards from "./Cards";
import { Stack } from "react-bootstrap";

function CardsContainer({ notes }) {
  //   const notes = useSelector((state) => state.data);
  // if (notes !== undefined && notes.length !== 0) {
  //   notes.sort((a, b) => {
  //     return new Date(b.current) - new Date(a.current);
  //   });
  // }

  // const temp = notes.slice(0);
  console.log("notes", notes);
  // if (temp.length !== 0) {
  //   temp.sort
  // }

  return notes ? (
    <Stack gap={3} style={{ width: "20rem" }} className="overflow mx-auto">
      {notes.map((el, i, arr) => (
        <Cards el={arr[arr.length - i - 1]} key={i} />
      ))}
    </Stack>
  ) : (
    <h1 className="mx-auto text-center ">No Notes found</h1>
  );
}
export default CardsContainer;
