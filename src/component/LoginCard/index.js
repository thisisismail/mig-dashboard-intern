import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { token } from "../../store/action/index.js";
import "./style/LoginCard.css";
import FetchLogin from "../../api_call/index.js";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
// import TokenCard from "../TokenCard/index.js";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

export default function LoginCard() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const tokenFromRedux = useSelector((state) => state.tokenReducer);

  useEffect(() => {
    console.log(input.username ?? "");
  }, [input.username]);

  useEffect(() => {
    console.log(input.password ?? "");
  }, [input.password]);

  let history = useHistory();
  let location = useLocation();

  const goPrivate = () => {
    history.push("/private");
    // window.location();
    // location.reload();
  };

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (tokenFromRedux !== "") {
  //     goPrivate();
  //     console.log("berhasil");
  //   }
  // }, [tokenFromRedux]);

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
      .then(() => {
        goPrivate();
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="login-card-container">
      <Card className="w-full">
        <CardBody>
          <Typography variant="h5" className="mb-2 px-1 text-black-300">
            Login
          </Typography>
          <input
            type="text"
            name="username"
            onChange={handleInput}
            value={input.username ?? ""}
            placeholder="Email address"
            className="border-2 border-grey-200 rounded-xl px-2 mb-2"
          />
          <input
            type="password"
            name="password"
            onChange={handleInput}
            value={input.password ?? ""}
            placeholder="Password"
            className="border-2 border-grey-200 rounded-xl px-2 mb-2"
          />
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={!(input.username && input.password)} //disable button as the form is empty
            className="rounded-xl"
            color="green"
          >
            Masuk
          </Button>
          {/* <TokenCard /> */}
        </CardBody>
      </Card>
    </div>
  );
}
