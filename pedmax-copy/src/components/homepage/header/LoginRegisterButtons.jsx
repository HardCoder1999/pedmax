import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ModalLoginForm from "../login-register/ModalLoginForm";
import ModalRegisterForm from "../login-register/ModalRegisterForm";

const useStyles = makeStyles((theme) => ({
  button: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const LoginRegisterButtons = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        item
        xs={6}
        justify="flex-end"
        className={classes.button}
      >
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setLoginOpen(!isLoginOpen);
            }}
          >
            Login
          </Button>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setRegisterOpen(!isRegisterOpen);
            }}
          >
            Register
          </Button>
        </Grid>
      </Grid>
      <ModalLoginForm isLoginOpen={isLoginOpen} setLoginOpen={setLoginOpen} />
      <ModalRegisterForm
        isRegisterOpen={isRegisterOpen}
        setRegisterOpen={setRegisterOpen}
      />
    </>
  );
};

export default LoginRegisterButtons;
