import React, { useContext } from "react";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import { UserContext } from "../../Contexts/UserContext";
import Button from "../Form/Button";

import { Container, Nav, LinkLogin, LinkLogo } from "./styles";

function Header() {
  const { data, userLogOut } = useContext(UserContext);

  return (
    <Container>
      <Nav>
        <LinkLogo to="/" aria-label="Dogs - Home">
          <Dogs />
        </LinkLogo>

        {data ? (
          <>
            <LinkLogin to="/conta">{data.nome}</LinkLogin>
            <button onClick={userLogOut}>Sair</button>
          </>
        ) : (
          <LinkLogin to="/login">Login / Criar</LinkLogin>
        )}
      </Nav>
    </Container>
  );
}

export default Header;
