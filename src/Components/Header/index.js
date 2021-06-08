import React from "react";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";

import { Container, Nav, LinkLogin, LinkLogo } from "./styles";

function Header() {
  return (
    <Container>
      <Nav>
        <LinkLogo to="/" aria-label="Dogs - Home">
          <Dogs />
        </LinkLogo>
        <LinkLogin to="/login">Login / Criar</LinkLogin>
      </Nav>
    </Container>
  );
}

export default Header;
