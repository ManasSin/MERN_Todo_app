import { useState } from "react";
import { useLogin } from "../Hooks/useLogin";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="login">
      <h3>Log In</h3>
      <label htmlFor="email">Email :</label>
      <input
        type="email"
        id="email"
        className=""
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label htmlFor="password">Password :</label>
      <input
        type="password"
        id="password"
        className=""
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button disabled={isLoading} type="submit">
        Login
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};
