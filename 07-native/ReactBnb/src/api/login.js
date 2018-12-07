import API_URL from "../config/api";
import crypto from "../helpers/crypto";

const checkCredential = async (email, password) => {
  const paramsFetch = {
    method: "POST",
    headers: {
      Authorization: `Basic ${crypto.btoa(`${email}:${password}`)}`
    }
  };
  const raw = await fetch(`${API_URL}/auth`, paramsFetch);
  return raw.json();
};

export default checkCredential;
