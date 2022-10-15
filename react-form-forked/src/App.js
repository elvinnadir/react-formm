import "./styles.css";
import React, { useState } from "react";
import Input from "./components/input/Input";
import Button from "./components/button/Button";
import Form from "./components/form/Form";
export default function App() {
  const [user, setUser] = useState({
    name: "",
    password: ""
  });

  const handleChange = (e) => {
    if (e.target.type === "text") {
      setUser({ ...user, name: e.target.value });
      console.log(user);
    } else if (e.target.type === "password") {
      setUser({ ...user, password: e.target.value });
      console.log(user);
    }
  };

  const handleClick = () => {
    if (user.name === "") {
      alert("Write your username");
    } else if (user.password === "") {
      alert("Write your password");
    } else {
      alert("Username:" + user.name + " " + "Your Password:" + user.password);
    }
  };

  return (
    <div className="App">
      <h1>Login Form</h1>
      <Form>
        <Input
          type={"text"}
          placeHolder={"Username"}
          value={user.name}
          onChange={handleChange}
        />
        <Input
          type={"password"}
          placeHolder={"Password"}
          value={user.password}
          onChange={handleChange}
        />
        <Button onClick={handleClick} />
      </Form>
    </div>
  );
}
