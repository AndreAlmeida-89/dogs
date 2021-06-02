import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
    </Container>
  );
}

export default Header;
