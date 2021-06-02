import api from "..";

async function UserPost(username, email, password) {
  try {
    const response = await api.post("/json/api/user", {
      username,
      email,
      password,
    });
    const { data } = await response;
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default UserPost