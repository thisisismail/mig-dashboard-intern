import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { token } from "../../store/action/index.js";
import "./style/LoginCard.css";
import FetchLogin from "../../api_call/index.js";
// import TokenCard from "../TokenCard/index.js";

export default function LoginCard() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(input.username ?? "");
  }, [input.username]);

  useEffect(() => {
    console.log(input.password ?? "");
  }, [input.password]);

  const handleInput = (v) => {
    const name = v.target.name;
    const value = v.target.value;

    setInput((LastValue) => {
      return { ...LastValue, [name]: value };
    });
  };

  const handleSubmit = () => {
    console.log("Submitted");
    FetchLogin(input.username, input.password)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.access_token);
        //store the state to redux
        dispatch(token(result.access_token));
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="login-card-container">
      LoginCard
      <input
        type="text"
        name="username"
        onChange={handleInput}
        value={input.username ?? ""}
        placeholder="Email address"
      />
      <input
        type="password"
        name="password"
        onChange={handleInput}
        value={input.password ?? ""}
        placeholder="Password"
      />
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={!(input.username && input.password)} //disable button as the form is empty
      >
        Submit
      </button>
      {/* <TokenCard /> */}
    </div>
  );
}
