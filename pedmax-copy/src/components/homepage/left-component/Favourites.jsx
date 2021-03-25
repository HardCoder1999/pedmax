import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import ModalLoginForm from "../login-register/ModalLoginForm";
import ModalRegisterForm from "../login-register/ModalRegisterForm";
import { NavLink } from "react-router-dom";

const Favourites = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  return (
    <>
      <Grid item>
        <h3 className={"titles"}>Favorites</h3>
        <h5>
          Available after &nbsp;
          <NavLink
            to="/"
            onClick={() => {
              setLoginOpen(!isLoginOpen);
            }}
          >
            Login
          </NavLink>
          &nbsp; or &nbsp;
          <NavLink
            to="/"
            onClick={() => {
              setRegisterOpen(!isRegisterOpen);
            }}
          >
            Register
          </NavLink>
        </h5>
      </Grid>
      <ModalLoginForm isLoginOpen={isLoginOpen} setLoginOpen={setLoginOpen} />
      <ModalRegisterForm
        isRegisterOpen={isRegisterOpen}
        setRegisterOpen={setRegisterOpen}
      />
    </>
  );
};

export default Favourites;
