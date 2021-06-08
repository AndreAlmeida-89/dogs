import React from "react";

import { Container } from "./styles";

function Input({ label, type, name, onChange, error, value, onBlur }) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </Container>
  );
}

export default Input;
