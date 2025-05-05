import React from "react";
import { ButtonProps } from "../Constants";
function MyButton(props: ButtonProps) {
  function handleClick() {
    alert("You clicked me!");
  }

  return <button onClick={handleClick}>{props.buttontext}</button>;
}
export default MyButton;
