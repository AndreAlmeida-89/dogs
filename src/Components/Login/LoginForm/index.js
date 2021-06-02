import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import { Form } from "./styles";

function LoginForm() {
  let { url } = useRouteMatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    }
    
    try {
      const response = await fetch(
        "https://dogsapi.origamid.dev/json/jwt-auth/v1/token", config
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
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
