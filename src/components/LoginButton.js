import React from "react";
import './../App.css';
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className={'App-landing-button'} onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;