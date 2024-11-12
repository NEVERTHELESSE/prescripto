import { useState } from "react";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

function Account() {
  const [email, setEmail] = useState("neverthelesse21@gmail.com");
  const [src, setSrc] = useState("/user/user1.jpg");
  return (
    <div className="mt-[6rem] px-[6rem] text-3xl flex justify-around">
      <div>
        <img
          src={src}
          alt="account"
          className="size-[20rem] rounded-lg object-cover"
        />
        <div>
          <div className="flex items-center my-3">
            <abbr title="email">
              <FaEnvelope />
            </abbr>
            <p className="m-2"> : {email}</p>
          </div>
          <div className="flex items-center my-3">
            <abbr title="phone-number">
              <FaPhone />
            </abbr>
            <p className="m-2">: +234 9051602536</p>
          </div>
          <div className="flex items-center my-3">
            <abbr title="address">
              <FaHouse />
            </abbr>
            <p className="m-2 capitalize">: Opposite neverthelesse, Ib</p>
          </div>
        </div>
        <div>
          <div className="flex items-center my-3">
            <abbr title="gender">
              <FaUser />
            </abbr>
            <p className="m-2"> : Female</p>
          </div>
        </div>
      </div>
      <form
        action=""
        className="flex flex-col w-[35%] ml-4 text-2xl border p-2 rounded-lg items-center"
      >
        <div className="flex items-center"></div>
        <p className="text-3xl font-bold text-center">Edit your account</p>
        <input
          type="file"
          onChange={(e) => setSrc(URL.createObjectURL(e.target.files[0]))}
        />
        <input
          type="text"
          placeholder="Username"
          className="w-full p-4 my-3 bg-gray-700"
        />
        <input
          type="text"
          placeholder="Permanent Address"
          className="w-full p-4 my-3 bg-gray-700"
        />
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="w-full p-4 my-3 bg-gray-700"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Previous password"
          className="w-full p-4 my-3 bg-gray-700"
        />
        <input
          type="password"
          placeholder="New Password"
          className="w-full p-4 my-3 bg-gray-700"
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          className="w-full p-4 my-3 bg-gray-700"
        />
        <button className="p-4 duration-700 rounded-full bg-primaryColor hover:bg-secondaryColor ">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Account;
