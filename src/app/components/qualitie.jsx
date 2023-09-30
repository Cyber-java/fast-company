import React from "react";

const Qualitie = ({ color, name }) => (
  <span className={"badge m-1 bg-" + color}>{name}</span>
);

export default Qualitie;
