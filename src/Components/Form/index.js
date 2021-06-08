import React from "react";

import { Container } from "./styles";

function Form({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

export default Form;
