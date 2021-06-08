import React from "react";

import { Container} from "./styles";

function Input({ label, type, name, onChange }) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} onChange={onChange} />
      <p>Error</p>
    </Container>
  );
}

export default Input;
