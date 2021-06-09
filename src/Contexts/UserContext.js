import React, { createContext, useState, useEffect } from "react";
import api from "../Services/httpService";

export const UserContext = createContext();
export function UserStorage({ children }) {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      getUser(token);
    }
  }, []);

  async function getUser(token) {
    const resp = await api.get("/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(resp.data);
    setData(resp.data);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      const response = await api.post("/jwt-auth/v1/token", {
        username,
        password,
      });
      const { data } = await response;
      window.localStorage.setItem("token", data.token);
      getUser(data.token);
      console.log(data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Erro 404: O servidor não pode encontrar o recurso solicitado.");
      }
    }
  }

  return (
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  );
}
