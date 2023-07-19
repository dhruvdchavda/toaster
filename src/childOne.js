import React from "react";
import ChildTwo from "./childTwo";

function ChildOne() {
  return (
    <>
      <h2 style={{ marginLeft: 40 }}>Child one component inside main page</h2>
      <ChildTwo />
    </>
  );
}

export default ChildOne;
