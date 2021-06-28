import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import api from "../Services/httpService";

export const UserContext = createContext();
export function UserStorage({ children }) {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      console.log(token);
      if (token) {
        try {
          setError(null);
          setLoading(true);
          api.defaults.headers.post = { Authorization: `Bearer ${token}` };
          const response = await api.post("/jwt-auth/v1/token/validate");
          if (!response) throw new Error("Token Inválido");
          await getUser(token);
        } catch (error) {
          userLogOut()
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, []);

  async function userLogOut() {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem("token");
  }

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
    <UserContext.Provider value={{ userLogin, userLogOut, data }}>
      {children}
    </UserContext.Provider>
  );
}
