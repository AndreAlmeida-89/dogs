import { Link } from "react-router-dom";
import styled from "styled-components";
import Box from "../../StyledComponents/Generics/Box";
import User from "../../Assets/usuario.svg";

export const Container = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  position: fixed;
  width: 100%;
  z-index: 100;
  background: white;
  top: 0px;
`;

export const Nav = styled(Box).attrs({ as: "nav" })`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkLogo = styled(Link)`
  padding: 0.5rem 0;
`;

export const LinkLogin = styled(Link)`
  color: #333;
  display: flex;
  align-items: center;

  ::after {
    content: "";
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url("${User}") no-repeat center center;
    margin-left: 0.5rem;
    position: relative;
    top: -1px;
  }
`;
