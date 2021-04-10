import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </label>
        </div>

        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </label>
        </div>

        <div>
          <Button variant="contained" color="secondary" type="submit">
            Login
          </Button>
        </div>
      </form>
  );
};

export default LoginForm;
