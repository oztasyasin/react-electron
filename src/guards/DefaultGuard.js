import React from "react";
import Error from "../pages/Error";

const DefaultGuard = (props) => {
  const role = "User";
  const control = () => {
    if (
      props.permissions.includes("anyallow") ||
      props.permissions.includes(role)
    ) {
      return true;
    }
    return false;
  };
  return <>{control() ? props.children : <Error txt={props.errorTxt} />}</>;
};

export default DefaultGuard;
