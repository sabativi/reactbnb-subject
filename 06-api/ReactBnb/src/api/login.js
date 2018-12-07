import user from "../data/user.json";

const checkCredential = (email, password) =>
  user.email === email && user.password === password;

export default checkCredential;
