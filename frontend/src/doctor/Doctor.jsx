import { useState } from "react";
import { doctorsLists } from "../home/doctorlist";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function Doctor() {
  const [selected, setSelected] = useState("");
  return (
    <div className="pt-[6rem] px-[5rem] flex">
      <Sidebar selected={selected} setselected={setSelected} />
      <div className="flex flex-wrap justify-around ml-2">
        {doctorsLists
          .filter((s) => s.speciality.toLowerCase().includes(selected))
          .map((r) => (
            <Link
              to={`/doctor/${r.id}`}
              key={r}
              className="m-2 border rounded-lg border-fgcolor"
            >
              <img
                src={r.imageUrl}
                alt=""
                id="topDoctor"
                className="w-[20rem] bg-gray-500 h-[25rem] object-contain"
              />
              <p className="text-2xl text-center">{r.name}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Doctor;
