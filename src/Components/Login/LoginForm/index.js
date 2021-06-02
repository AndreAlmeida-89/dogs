import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import api from "../../../Api";

import { Form } from "./styles";

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
      const { data } = response;
      console.log(data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert(
          `Erro 404: O servidor não pode encontrar o recurso solicitado. Erro: ${error.response.data.message}`
        );
      }
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Entar</button>
      </Form>

      <Link to={`${url}/criar`}>Cadastro</Link>
    </section>
  );
}

export default LoginForm;
