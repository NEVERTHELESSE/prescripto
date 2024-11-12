import { useState } from "react";
import { enqueueSnackbar } from "notistack";
import { Link } from "react-router-dom";
import axios from "axios";
import { signInWithGithub, signInWithGoogle } from "./Firebase";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function createAccount(e) {
    e.preventDefault();
    if (password != confirmPassword) {
      setIsCorrect(true);
    } else if (submitting) {
      null;
    } else {
      setSubmitting(true);
      axios
        .post(`http://localhost:9000/api/signup`, {
          username,
          email,
          password,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data == "duplicate key") {
            enqueueSnackbar("User already exist kindly login", {
              variant: "warning",
            });
            setTimeout(() => {
              setSubmitting(false);
            }, 1000);
          } else if (res.data.success == "success") {
            enqueueSnackbar(
              `We have send a confirmation code to your email kindly confirm`,
              {
                variant: "success",
              }
            );
            // window.location.replace("/confirm");
          } else {
            enqueueSnackbar(
              "there was an error while creating user kindly try again",
              { variant: "error" }
            );
          }
        });
    }
  }

  return (
    <div className="mt-[6rem] flex justify-center items-center">
      <img src="/hospital/nurse4.jpg" alt="" className="w-[30rem]" />
      <form
        onSubmit={createAccount}
        action=""
        className="flex flex-col w-[30%] ml-4 text-2xl border p-2 rounded-lg items-center"
      >
        <div className="flex items-center">
          <img src="/prescripto.png" alt="" className="size-[3rem]" />
          <p className="text-3xl font-['eufm10'] italic font-bold">
            Prescripto
          </p>
        </div>
        <p className="text-3xl font-bold text-center">
          Create Account for Prescripto
        </p>
        <input
          type="text"
          required
          placeholder="Username"
          className="w-full p-4 my-3 bg-gray-700"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="Email Address"
          className="w-full p-4 my-3 bg-gray-700"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder="Password"
          className="w-full p-4 my-3 bg-gray-700"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder="Confirm Password"
          className="w-full p-4 my-3 bg-gray-700"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            if (password == confirmPassword) {
              setIsCorrect(false);
            }
          }}
        />
        {isCorrect && (
          <p className="text-red-500 text-[1rem] font-bold ">
            Password not match
          </p>
        )}
        <button
          className={`p-4 duration-700 rounded-full ${
            submitting
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-primaryColor hover:bg-secondaryColor "
          }  `}
        >
          Create Account
        </button>
        <div className="flex">
          <img
            src="/auth/google.svg"
            alt=""
            className="size-[3rem] cursor-pointer"
            onClick={signInWithGoogle}
          />
          <img
            src="/auth/github.png"
            alt=""
            className="size-[4rem] cursor-pointer"
            onClick={signInWithGithub}
          />
        </div>
        <p className="my-3">Already have an account?</p>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
}

export default Signup;
