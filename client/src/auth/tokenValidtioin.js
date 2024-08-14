const jwt_decode = require("jwt-decode");

const useTokenValidation = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decodedToken = jwt_decode.jwtDecode(token);
    const currentTime = Date.now() / 1000; // Current time in seconds
    if (decodedToken.exp < currentTime) {
      localStorage.removeItem("token");
      return false; // Token is expired
    }
    return true; // Token is valid
  }
  return false; // No token found
};

export default useTokenValidation;
