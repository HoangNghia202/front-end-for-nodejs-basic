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

const handleGetAllUserAPI = async (userId) => {
  const response = await axios.get("/api/get-all-user", { id: userId });
  return response;
};

const handleCreateNewUserAPI = async (userData) => {
  const response = await axios.post("/api/create-new-user", userData);
  console.log(">>>response create new user", response);

  return response;
};

const handleDeleteUserAPI = async (userId) => {
  const response = await axios.post("/api/delete-user", { id: userId });
  return response;
};

export {
  handleLoginAPI,
  handleGetAllUserAPI,
  handleCreateNewUserAPI,
  handleDeleteUserAPI,
};
