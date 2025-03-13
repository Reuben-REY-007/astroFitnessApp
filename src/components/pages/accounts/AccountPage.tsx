import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signin from "./Signin";
import BackgroundImg from "@/assets/RK1V3C.webp";

const AccountPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative ">
      <button className=" absolute text-white bg-black m-5 px-5 py-1 rounded" onClick={()=>navigate("/")}>Back</button>
      <div className="flex w-full items-center justify-center">
        <img
          src={BackgroundImg}
          alt=""
          className=" h-screen w-full object-cover img-fluid"
        />
        <div className="signinBg absolute shadow-xl">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
