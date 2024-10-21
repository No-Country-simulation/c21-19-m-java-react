import axios from "axios";

const useAuthentication = () => {
  const createUser = (data) => {
    const url = "url";
    axios
      .post(url, data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const loginUser = (data) => {
    const url = "url";
    axios
      .post(url, data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return { createUser, loginUser };
};

export default useAuthentication;
