import { useState } from "react";

function Sidebar({ selected, setselected }) {
  const type = [
    "",
    "general physician",
    "gynecologist",
    "dermatologist",
    "psychiatrist",
    "gastroenterologist",
    "pediatricians",
    "neurologist",
    "ardiologist",
    "oncologist",
  ];
  return (
    <div>
      <div className="w-[20rem]"></div>
      <div className="fixed h-full bg-bgcolor">
        {type.map((r, i) => (
          <p
            key={r}
            className={`px-8 cursor-pointer ${
              r == selected && "bg-primaryColor"
            } py-2 my-2 text-3xl capitalize border-fgcolor border rounded-lg `}
            onClick={() => setselected(r)}
          >
            {r != "" ? r : "all"}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
