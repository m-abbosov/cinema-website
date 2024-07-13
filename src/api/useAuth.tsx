// hooks/useAuth.js
import axios from "axios";
import {useState} from "react";
import API from "../utils/API";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // const navigate = useNavigate();

  const login = async (username: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const res = await API.post("/accounts/token/", {username, password});
      // localStorage.setItem("token", res.data.token);
      console.log(res.data);
      // navigate("/");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "An unexpected error occurred");
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const register = async (username: string, password: string) => {
    setLoading(true);
    setError(null);

    console.log(username, password);

    try {
      const res = await API.post("/accounts/create/", {
        username,
        password,
      });
      console.log(res.data);
      // navigate("/login");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "An unexpected error occurred");
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return {login, register, loading, error};
};

export default useAuth;
