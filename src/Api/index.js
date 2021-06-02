import axios from "axios";

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
    alert(
      `Um erro inesperado ocorreu. Mensagem: ${error.response.data.message} `
    );
  }
  return Promise.reject(error);
});

export default api;
