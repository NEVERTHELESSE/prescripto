import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="mt-[6rem] flex justify-center items-center h-[90vh]">
      <form
        action=""
        className="flex flex-col w-[30%] mr-4 text-2xl border p-2 rounded-lg items-center"
      >
        <div className="flex items-center">
          <img src="/prescripto.png" alt="" className="size-[3rem]" />
          <p className="text-3xl font-['eufm10'] italic font-bold">
            Prescripto
          </p>
        </div>
        <p className="text-3xl font-bold text-center">Login to Prescripto</p>
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="w-full p-4 my-3 bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 my-3 bg-gray-700"
        />
        <button className="p-4 duration-700 rounded-full bg-primaryColor hover:bg-secondaryColor ">
          Login
        </button>
        <p className="my-3">Don&apos;t have an account?</p>
        <Link to="/signup">Signup</Link>
      </form>
      <img src="/hospital/nurse2.jpg" alt="" className="w-[30rem]" />
    </div>
  );
}

export default Login;
