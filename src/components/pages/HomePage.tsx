import React from "react";
import Hero from "./hero/Hero";
import InvitationInfo from "./invitationInfo/InvitationInfo";
import Location from "./location/Location";
import Confirmation from "./confirmation/Confirmation";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <InvitationInfo />
      <Location />
      <Confirmation />
    </div>
  );
};

export default HomePage;
