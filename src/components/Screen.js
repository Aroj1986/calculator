import React from "react";

const Screen = (props) => {

  return (
    <div className="top">
      <span onClick={props.deleteDigit} className="clear">C</span>
      <div className="screen">
        {props.result? <span>{props.result}</span> : ''} {props.calc || "0"}      
      </div>
    </div>
  );
};

export default Screen;
