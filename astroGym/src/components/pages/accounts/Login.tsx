import { Button, TextInput } from "flowbite-react";
import React, { useState } from "react";
import Signup from "./Signup";

type Props = {};

const Login = (props: Props) => {
  const [signUp, setSignUp] = useState(false);

  return (
    <div className="w-full">
      {signUp ? (
        <div className="md:w-[450px]">
          <Signup setSignUp={setSignUp} />
        </div>
      ) : (
        <form className="flex h-96 md:w-96 flex-col gap-4 p-5 ">
          <div className="mb-3">
            <label className="mb-2 block font-bold text-white">
              Email address
            </label>
            <TextInput
              id="email"
              type="email"
              placeholder="name@gmail.com"
              required={true}
            />
          </div>

          <div className="mb-3">
            <label className="mb-2 block font-bold text-white">Password</label>
            <TextInput
              id="password"
              type="password"
              placeholder="*******"
              required={true}
            />
          </div>

          <div className="">
            <div className="custom-control custom-checkbox flex items-center gap-2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label
                className="custom-control-label text-white"
                htmlFor="customCheck1"
              >
                Remember me
              </label>
            </div>
          </div>

          <Button type="submit">Submit</Button>
          <div className="flex gap-2 text-white">
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
            <p
              className="text-md cursor-pointer pl-2 font-bold underline"
              onClick={() => setSignUp(true)}
            >
              SignUp
            </p>
          </div>

        </form>
      )}
    </div>
  );
};

export default Login;
