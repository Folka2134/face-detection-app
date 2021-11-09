import React from "react";
// import Tilt from "react-tilt";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="logo-container ma4 mt0 pa3">
      <div className="Tilt-inner">
        <img alt="" src={brain} />
      </div>
    </div>
  );
};

export default Logo;
