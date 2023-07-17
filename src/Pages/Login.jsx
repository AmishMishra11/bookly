import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../Services/Auth/loginApi";

import { toast } from "react-toastify";
import { Loading } from "../Components/Loading";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tempUserDetail, setTempUserDetail] = useState({
    tempEmail: "",
    tempPassword: "",
  });

  const handleChange = (e) => {
    setTempUserDetail({
      ...tempUserDetail,
      [e.target.name]: e.target.value,
    });
  };

  const { tempEmail, tempPassword } = tempUserDetail;

  const [loading, setLoading] = useState(false);

  const correctLogin = () => {
    loginUser(tempEmail, tempPassword, dispatch, navigate, setLoading);
    setLoading(true);
  };

  return (
    <div className="flex lg:justify-between items-center w-screen h-[calc(100vh-8rem)] bg-secondaryLight dark:bg-nightDark ">
      <div className="flex justify-center items-center  bg-fixed  w-full h-full ">
        <div
          className=" flex-row justify-center content-center w-80 xl:w-96 p-5 m-2  bg-light 
        dark:text-secondaryLight dark:bg-night border-2 rounded-lg border-primary shadow-xl"
        >
          <h1 className="text-primary text-3xl  font-semibold text-center mb-10">
            Login
          </h1>

          <div className="flex-row  justify-center items-center w-full p-1">
            <div className="dark:text-secondaryLight">Email:</div>
            <div>
              <input
                className="border-2 rounded border-primary w-full p-1 dark:bg-nightInput"
                type="text"
                id="email-id"
                placeholder="Email"
                name="tempEmail"
                value={tempEmail}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex-col justify-center items-center w-full  p-1">
            <div className="dark:text-secondaryLight">Password:</div>
            <div>
              <input
                className="border-2 rounded border-primary w-full p-1 dark:bg-nightInput"
                type="password"
                id="password-id"
                placeholder="••••••••"
                name="tempPassword"
                value={tempPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          {loading ? (
            <div className="mx-1 my-2 p-3 text-center bg-primary text-light rounded-lg cursor-pointer">
              <Loading />
            </div>
          ) : (
            <div
              className="mx-1 my-2 p-3 text-center bg-primary text-light rounded-lg cursor-pointer"
              onClick={() => {
                tempEmail && tempPassword
                  ? correctLogin()
                  : toast.error("Please fill all the fields");
              }}
            >
              Login
            </div>
          )}

          <div
            className="mx-1 my-2 p-3 text-center text-primary bg-light dark:text-secondaryLight dark:bg-night border-2 rounded-lg border-primary cursor-pointer"
            onClick={() =>
              setTempUserDetail({
                tempEmail: "guest@gmail.com",
                tempPassword: "Guest@123",
              })
            }
          >
            Guest Login
          </div>
          <div className="p-1 text-center ">
            <Link
              className="hover:border-b-2 border-primary dark:text-secondaryLight"
              to="/signup"
            >
              Create New Account <i className="fa-solid fa-angle-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
