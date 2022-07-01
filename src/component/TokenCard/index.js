import React from "react";
import { useSelector } from "react-redux";

export default function TokenCard() {
  //take the state from redux
  const theSameToken = useSelector((state) => state.tokenReducer);

  return (
    <div>
      <br></br>
      <h1>Token Card</h1>
      {theSameToken}
      <h1>Token Card</h1>
    </div>
  );
}
