function BookAppointment() {
  return (
    <div className="w-full flex justify-around h-[40rem] bg-primaryColor rounded-3xl p-8  items-center">
      <div className="w-[50%] ">
        <p className="text-6xl font-bold capitalize">
          book appointment with trusted doctor
        </p>
        <div className="flex mt-[3rem]">
          <img
            src="/user/user1.jpg"
            alt="user"
            id="doctor1"
            className="size-[5rem] rounded-full"
          />
          <img
            src="/user/user2.jpg"
            alt="user"
            id="doctor1"
            className="size-[5rem] rounded-full ml-[-10px] border border-primaryColor"
          />
          <img
            src="/user/user3.jpg"
            alt="user"
            id="doctor1"
            className="size-[5rem] rounded-full ml-[-10px] border border-primaryColor object-contain"
          />
          <p className="ml-2 text-2xl font-bold">
            Simply browse through our extensive list of trusted doctors.
            Schedule your appointment hassle-free
          </p>
        </div>
        <button className="p-5 px-8 mt-20 text-3xl duration-200 rounded-full cursor-pointer hover:bg-overColor bg-bgcolor">
          Book Appointment
        </button>
      </div>
      <img
        src="/doctor/doctor3.png"
        alt="doctor1"
        className="w-[30rem]  animate-pulse"
        id="doctor1"
      />
    </div>
  );
}

export default BookAppointment;
