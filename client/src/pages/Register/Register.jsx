import React, { useState } from "react";
import TopNav from "../../components/TopNav/TopNav";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
const initialState = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const [state, setState] = useState(initialState);
  const handleChange = (e) => {
    console.log(e.target.name);
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };
  const onSubmit = () => {
    console.log("noinoi");
  };
  return (
    <div className="w-full h-full flex text-center">
      <div className="bg-white w-[80%] sm:w-[45%] md:w-[40%] lg:w-[25%] h-[500px]  m-auto items-center rounded-md border-t-[4px] border-t-[#9b5204] px-7">
        <TopNav
          className="!pt-5 !pb-5 !px-0 justify-center"
          navClass="text-[28px]"
        />
        <h1 className="text-center font-LexendDeca text-[#84582a] text-[20px] font-normal">
          Register
        </h1>
        <form onSubmit={onSubmit}>
          <InputField
            label="Name"
            type="text"
            name="name"
            handleChange={(e) => handleChange(e)}
            inputClass="text-[#84582a]"
            containerClass="!pt-2"
          />
          <InputField
            label="Email Address"
            type="email"
            name="email"
            handleChange={(e) => handleChange(e)}
            inputClass="text-[#84582a]"
            containerClass="!pt-3"
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            handleChange={(e) => handleChange(e)}
            inputClass={"text-[#84582a]"}
            containerClass="!pt-3"
          />
          <Button containerClass="mt-8 w-full" className="w-full" type="submit">
            Register
          </Button>
        </form>
        <p className="text-[#84582a] pt-3 font-Roboto text-sm">
          Already have an account?
          <Link to="/login" className=" text-[#84582a]  underline ps-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
