import React from "react";
import LoginButton from './components/LoginButton'

const LandingPage = () => {

  return (
    <div className="App-landing">
      <div className="App-landing-darkfilter">
        <p>
          Welcome on Velib Location project website. Please login to access services.
        </p>
        <LoginButton/>
      </div>
    </div>
  );
};

export default LandingPage;