import React, { useContext } from "react";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import { UserContext } from "../../Contexts/UserContext";

import { Container, Nav, LinkLogin, LinkLogo } from "./styles";

function Header() {
  const { data } = useContext(UserContext);

  return (
    <Container>
      <Nav>
        <LinkLogo to="/" aria-label="Dogs - Home">
          <Dogs />
        </LinkLogo>
        
        {data ? (
          <LinkLogin to="/conta">{data.nome}</LinkLogin>
        ) : (
          <LinkLogin to="/login">Login / Criar</LinkLogin>
        )}
      </Nav>
    </Container>
  );
}

export default Header;
