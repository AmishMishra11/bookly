import { toast } from "react-toastify";

import { userLogin, setUserDetails } from "../../Redux/Features/authSlice";
import axios from "axios";

export const signinUser = async (
  tempFullName,
  tempEmail,
  tempPassword,
  dispatch,
  navigate,
  setLoading
) => {
  try {
    const res = await axios({
      method: "POST",
      url: "https://64b2df6838e74e386d55abe8.mockapi.io/auth/signup",
      data: { email: tempEmail, password: tempPassword, name: tempFullName },
    });

    if (res.status === 201) {
      localStorage.setItem("token", "token");
      let userDetails = {
        fullName: tempFullName,
        email: tempEmail,
      };
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      dispatch(userLogin());
      dispatch(setUserDetails(userDetails));
      navigate("/");
    }
  } catch (e) {
    setLoading(false);
    console.log("error occured: ", e);
    toast.error(e.response.data.message);
  }
};
