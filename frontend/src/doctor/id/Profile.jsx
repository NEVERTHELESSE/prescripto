/* eslint-disable react/prop-types */

import { FaCheck } from "react-icons/fa";
import Date from "./Date";

function Profile({ doctor }) {
  return (
    <div className="flex px-[5rem] justify-around items-center">
      <img
        src={doctor.imageUrl}
        alt="imageUrl"
        className="w-[30rem] h-[45rem] object-contain"
      />
      <div className="ml-8">
        <p className="text-6xl font-bold capitalize">{doctor.name}</p>
        <p className="my-2 text-4xl capitalize font-italic">
          {doctor.speciality}
        </p>
        <p className="text-2xl">
          A healthcare professional specializing in diagnosing, managing, and or
          balance problems. health and help manage like tinnitus (ringing in the
          ears). Audiologists often work in various settings, including
          hospitals, private practices, schools, and rehabilitation centers. To
          become an audiologist, individuals typically need a Doctor of
          Audiology (Au.D.) degree and must meet licensing requirements, which
          vary by region
        </p>
        <p className="mt-1 text-2xl underline">Appointment Fees</p>
        <div className="flex items-center">
          <span className="text-3xl font-bold">${doctor.price}</span>
          <FaCheck className="ml-5 text-3xl text-green-400" />
          <span className="text-3xl font-bold text-green-500">Available</span>
        </div>
        <p className="my-2 text-3xl font-bold underline">Booking Slots</p>
        <Date />
      </div>
    </div>
  );
}

export default Profile;
