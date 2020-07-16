import React from "react";

const HomeButton = (props) => {
  const { target, title } = props;

  return <button onClick={() => target}>{title}</button>;
};

export default HomeButton;