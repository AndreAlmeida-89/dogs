import React, { useEffect, useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { UserContext } from "../../../Contexts/UserContext";
import useForm from "../../../Hooks/useForm";
import api from "../../../Services/httpService";
import Form from "../../Form";
import Button from "../../Form/Button";
import Input from "../../Form/Input";

function LoginForm() {
  let { url } = useRouteMatch();
  const username = useForm("email");
  const password = useForm();

  const { userLogin } = useContext(UserContext);
  
  async function handleSubmit(event) {
    event.preventDefault();
    if (true) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="username" label="Usuário" {...username} />
        <Input type="password" name="password" label="Senha" {...password} />
        <Button>Entar</Button>
      </Form>

      <Link to={`${url}/criar`}>Cadastro</Link>
    </section>
  );
}

export default LoginForm;
