import React, { useState } from "react";
import TopNav from "../../components/TopNav/TopNav";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import Alert from "../../components/Alert/Alert";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Login = () => {
  const [state, setState] = useState(initialState);
  const [alert, setAlert] = useState(false);
  const handleChange = (e) => {
    console.log(e.target.name);
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("noinoi");
    setAlert(!alert);
  };
  return (
    <div className="w-full h-full flex text-center overflow-hidden">
      <Alert
        alert={alert}
        children={"Some Errors!"}
        alertClass={"bg-red-200"}
        alertText={"text-red-900 "}
        alertCross={"text-red-900 "}
        onClick={() => {
          setAlert(false);
        }}
      />
      <div className="animate-ease-in-top-to-bottom bg-white w-[80%] sm:w-[45%] md:w-[40%] lg:w-[25%] h-[450px]  m-auto items-center rounded-md border-t-[4px] border-t-[#9b5204] px-7">
        <TopNav
          className="!pt-6 !pb-6 !px-0 justify-center"
          navClass="text-[28px]"
        />
        <h1 className="text-center !font-LexendDeca text-[#84582a] text-[20px] font-normal">
          Login
        </h1>
        <form onSubmit={onSubmit}>
          <InputField
            label="Email Address"
            type="email"
            name="email"
            handleChange={(e) => handleChange(e)}
            inputClass="text-[#84582a] !font-LexendDeca"
            containerClass="!pt-5"
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            handleChange={(e) => handleChange(e)}
            inputClass={"text-[#84582a] !font-LexendDeca"}
            containerClass="!pt-6"
          />

          <Button containerClass="mt-8 w-full" className="w-full" type="submit">
            Login
          </Button>
        </form>
        <p className="text-[#84582a] pt-4  !font-LexendDeca text-sm">
          Don't have an account?
          <Link to="/register" className=" text-[#84582a]  underline ps-1">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
