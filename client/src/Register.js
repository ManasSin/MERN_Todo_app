import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function RegisterUser(e) {
    e.preventDefault();

    const data = { email, password };
    axios
      .post("http://localhost:4000/register", data, { withCredentials: true })
      .then(() => {});
  }
  return (
    <form action="" onSubmit={(e) => RegisterUser(e)}>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <br />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
