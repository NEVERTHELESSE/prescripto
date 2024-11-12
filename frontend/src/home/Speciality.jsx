import { special } from "./special";
import "./special.css";

export default function Speciality() {
  return (
    <div className="my-[5rem] text-center text-2xl">
      <p className="p-2 my-4 text-6xl font-bold underline">
        Find By Speciality
      </p>
      <p className="text-3xl">
        Simply browse through the speciality of trusted doctors.
      </p>
      <p>Schedule your appointment hassle fee</p>
      <div className="flex justify-around my-8">
        {special.map((r) => (
          <div
            id="special"
            className="flex flex-col items-center justify-center p-3 duration-700 rounded-lg cursor-pointer bg-coverColor hover:bg-primaryColor"
            key={r.id}
          >
            <img
              src={r.image}
              alt={r.image}
              className="size-[7rem] rounded-full"
            />
            <p className="capitalize">{r.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
