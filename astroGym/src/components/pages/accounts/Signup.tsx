import { Button, TextInput } from "flowbite-react";
import { type } from "os";

type Props = {
  setSignUp: React.Dispatch<React.SetStateAction<boolean>>;
};
const Signup = ({ setSignUp }: Props) => {
  return (
    <form className="flex flex-col gap-4 p-5 rounded-2xl">
      <div className="mb-3">
        <label className="mb-2 block text-white font-bold">First name</label>
        <TextInput
          id="name"
          type="text"
          placeholder="First name"
          required={true}
        />
      </div>
      <div className="mb-3">
        <label className="mb-2 block text-white font-bold">Last name</label>
        <TextInput
          id="name"
          type="text"
          placeholder="Last name"
          required={true}
        />
      </div>
      <div className="mb-3">
        <label className="mb-2 block text-white font-bold">Email address</label>
        <TextInput
          id="email"
          type="email"
          placeholder="name@gmail.com"
          required={true}
        />
      </div>
      <div className="mb-3">
        <label className="mb-2 block text-white font-bold">Password</label>
        <TextInput id="password" type="password" placeholder="*******" required={true} />
      </div>
      <Button type="submit">Sign Up</Button>
      <p className="flex justify-center text-white">
        Already registered <p className="pl-2 underline font-bold text-md cursor-pointer" onClick={() => setSignUp(false)}>sign in?</p>
      </p>
    </form>
  );
};

export default Signup;
