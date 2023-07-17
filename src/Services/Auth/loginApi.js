import { toast } from "react-toastify";

import { userLogin, setUserDetails } from "../../Redux/Features/authSlice";
import axios from "axios";

export const loginUser = async (
  tempEmail,
  tempPassword,
  dispatch,
  navigate,
  setLoading
) => {
  try {
    const res = await axios({
      method: "GET",
      url: "https://64b2df6838e74e386d55abe8.mockapi.io/auth/signup",
      data: { email: tempEmail, password: tempPassword },
    });

    if (res.status === 200) {
      const allUsers = res.data;

      function findUser(email, password) {
        const foundUser = allUsers.find(
          (user) => user.email === email && user.password === password
        );
        return foundUser ? foundUser : null;
      }

      const emailToFind = tempEmail;
      const passwordToFind = tempPassword;

      const matchedUser = findUser(emailToFind, passwordToFind);

      if (matchedUser) {
        localStorage.setItem("token", "token");
        localStorage.setItem("userDetails", JSON.stringify(matchedUser));
        dispatch(userLogin());
        dispatch(setUserDetails(matchedUser));
        navigate("/");
      } else {
        setLoading(false);
        toast.error("Email or Password incorrect");
      }
    }
  } catch (e) {
    setLoading(false);
    console.log("error occured: ", e);
    toast.error(e.response.data.message);
  }
};
