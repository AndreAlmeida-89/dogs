import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import useForm from "../../../Hooks/useForm";
import api from "../../../Services/httpService";
import Form from "../../Form";
import Button from "../../Form/Button";
import Input from "../../Form/Input";

function LoginForm() {
  let { url } = useRouteMatch();
  const username = useForm('email');
  const password = useForm();
  
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.post("json/jwt-auth/v1/token", {
        username: username.value,
        password: password.value,
      });
      const { data } = await response;
      console.log(data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Erro 404: O servidor não pode encontrar o recurso solicitado.");
      }
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
