import api from "..";

async function TokenPost(username, password) {
  try {
    const response = await api.post("/jwt-auth/v1/token", {
      username,
      password,
    });
    const { data } = await response;
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default TokenPost;
