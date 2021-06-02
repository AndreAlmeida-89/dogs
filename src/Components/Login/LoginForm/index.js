import axios from "axios";
import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import { Form } from "./styles";

function LoginForm() {
  let { url } = useRouteMatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const api = axios.create({
    baseURL: "https://dogsapi.origamid.dev",
    headers: {
      "Content-Type": "application/json",
    },
  });

  api.interceptors.response.use(null, (error) => {
    const isExpectedError =
      error.response &&
      error.response.status >= 404 &&
      error.response.status < 500;

    if (!isExpectedError) {
      console.log("Erro ocorrido:", error);
      alert("Um erro inesperado ocorreu.");
    }
    return Promise.reject(error);
  });

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
