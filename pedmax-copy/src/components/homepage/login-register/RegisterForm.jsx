import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [country, setCountry] = useState("");
  const [agreement, setAgreement] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
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
            Country:
            <input
              type="text"
              name="country"
              value={country}
              onChange={(event) => {
                setCountry(event.target.value);
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
          <label>
            Confirm Password:
            <input
              type="password"
              name="cnfPassword"
              value={cnfPassword}
              onChange={(event) => {
                setCnfPassword(event.target.value);
              }}
            />
          </label>
        </div>

        <div>
          <label>
            Agreement:
            <input
              type="checkbox"
              checked={agreement}
              name="agreement"
              value={agreement}
              onChange={(event) => {
                setAgreement(!agreement);
              }}
              required={true}
            />
          </label>
        </div>
        <br />
        <div>
          <Button variant="contained" color="secondary" type="submit">
            Register
          </Button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
