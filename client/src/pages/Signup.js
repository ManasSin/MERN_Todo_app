import { useState } from "react";
import { useSignup } from "../Hooks/useSignup";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isloading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="signup">
      <h3>Sign Up</h3>
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
      <button disabled={isloading} type="submit">
        Signup
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};
