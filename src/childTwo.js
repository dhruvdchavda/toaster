import React from "react";
import Button from "./button";

function ChildTwo() {
  return (
    <>
      <h3 style={{ marginLeft: 60 }}>
        Child two component inside child one component
      </h3>
      <Button />
    </>
  );
}

export default ChildTwo;
