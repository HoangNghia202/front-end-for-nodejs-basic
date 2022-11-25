import axios from "../axios";

const handleLoginAPI = async (email, password) => {
  console.log("run into login api");

  const response = await axios.post("/api/login", {
    email: email,
    password: password,
  });
  console.log("response", response);
  return response;
};
export { handleLoginAPI };
