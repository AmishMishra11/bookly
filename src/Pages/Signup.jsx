import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

import { signinUser } from "../Services/Auth/signupApi";

import { toast } from "react-toastify";
import { Loading } from "../Components/Loading";

function Singup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const EMAIL_REGEX = new RegExp(
    // eslint-disable-next-line
    "^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])$"
  );

  const [tempUserDetail, setTempUserDetail] = useState({
    tempFullName: "",
    tempEmail: "",
    tempPassword: "",
  });

  const handleChange = (e) => {
    setTempUserDetail({
      ...tempUserDetail,
      [e.target.name]: e.target.value,
    });
  };

  const { tempFullName, tempEmail, tempPassword } = tempUserDetail;

  const [loading, setLoading] = useState(false);

  const correctSignup = () => {
    signinUser(
      tempFullName,
      tempEmail,
      tempPassword,
      dispatch,
      navigate,
      setLoading
    );
    setLoading(true);
  };

  return (
    <div className="flex lg:justify-between items-center w-screen h-[calc(100vh-8rem)]  bg-secondaryLight dark:bg-nightDark ">
      <div className="flex justify-center items-center  bg-fixed  w-full h-full">
        <div
          className=" flex-row justify-center content-center w-80 xl:w-96 p-5 m-2  border-2 rounded-lg border-primary shadow-xl bg-light 
        dark:bg-night"
        >
          <h1 className="text-primary text-3xl font-semibold text-center mb-10">
            Sign Up
          </h1>

          <div className="flex-row  justify-center items-center w-full p-1">
            <div className="dark:text-secondaryLight">Full Name:</div>
            <div>
              <input
                className="border-2 rounded border-primary w-full p-1  dark:text-secondaryLight   dark:bg-nightInput"
                type="text"
                placeholder="Full Name"
                id="full-name-id"
                name="tempFullName"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex-row  justify-center items-center w-full p-1">
            <div className="dark:text-secondaryLight">Email:</div>
            <div>
              <input
                className="border-2 rounded border-primary w-full p-1 dark:text-secondaryLight   dark:bg-nightInput"
                type="test"
                placeholder="name@company.com"
                id="email-id"
                name="tempEmail"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex-col justify-center items-center w-full  p-1">
            <div className="dark:text-secondaryLight">Password:</div>
            <div>
              <input
                className="border-2 rounded border-primary w-full p-1 dark:text-secondaryLight dark:bg-nightInput"
                type="password"
                placeholder="••••••••"
                id="password-id"
                name="tempPassword"
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
              onClick={() =>
                tempFullName && tempEmail && tempPassword
                  ? !EMAIL_REGEX.test(tempEmail)
                    ? toast.error("Please enter valid Email")
                    : tempPassword.length < 6
                    ? toast.error("Please choose a strong Passwrod")
                    : correctSignup()
                  : toast.error("Please fill all the fields")
              }
            >
              Sign Up
            </div>
          )}

          <div className="p-1 text-center ">
            <Link
              className="hover:border-b-2 border-primary dark:text-secondaryLight"
              to="/login"
            >
              Already have an Account
              <i className="fa-solid fa-angle-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singup;
