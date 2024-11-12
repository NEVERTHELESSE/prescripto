function Date() {
  const days = [
    {
      id: 1,
      day: "wed",
      date: 23,
    },
    {
      id: 2,
      day: "thur",
      date: 24,
    },
    {
      id: 3,
      day: "fri",
      date: 25,
    },
    {
      id: 4,
      day: "sat",
      date: 26,
    },
    {
      id: 5,
      day: "sun",
      date: 27,
    },
    {
      id: 6,
      day: "mon",
      date: 28,
    },
    {
      id: 7,
      day: "tues",
      date: 29,
    },
  ];
  return (
    <div>
      <div className="flex ">
        {days.map((r) => (
          <div
            key={r.id}
            className={`p-2 px-2 py-8 m-2 text-3xl border cursor-pointer rounded-full ${
              r.id == 3 && "bg-primaryColor"
            }`}
          >
            <p className="uppercase">{r.day}</p>
            <p className="text-center uppercase">{r.date}</p>
          </div>
        ))}
      </div>
      <button className="px-8 py-4 my-2 text-2xl font-bold duration-500 rounded-full bg-primaryColor hover:bg-overColor">
        Book Appointment
      </button>
    </div>
  );
}

export default Date;
