import { Link } from "react-router-dom";

function NextBookAppointment() {
  return (
    <div className="flex items-center justify-between w-full p-8 my-8 bg-primaryColor rounded-2xl">
      <img
        src="/doctor/doctor11.png"
        alt="doctor"
        className="w-[30rem] mx-[10rem]"
      />
      <div>
        <p className="text-6xl font-bold  my-[3rem]">
          Book Appointment With 100+ Trusted Doctor
          <br />
        </p>
        <Link
          to="/signup"
          className="px-8 py-3 text-3xl rounded-full bg-fgcolor text-bgcolor"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
}

export default NextBookAppointment;
