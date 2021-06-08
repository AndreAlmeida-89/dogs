import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import api from "../../../Services/httpService";
import Form from "../../Form";
import Button from "../../Form/Button";
import Input from "../../Form/Input";

function LoginForm() {
  let { url } = useRouteMatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.post("json/jwt-auth/v1/token", {
        username,
        password,
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
        <Input
          type="text"
          name="username"
          label="Usuário"
          onChange={({ target }) => setUsername(target.value)}
        />
        <Input
          type="password"
          name="password"
          label="Senha"
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button>Entar</Button>
      </Form>

      <Link to={`${url}/criar`}>Cadastro</Link>
    </section>
  );
}

export default LoginForm;
