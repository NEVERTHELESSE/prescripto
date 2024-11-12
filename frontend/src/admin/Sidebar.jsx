import { useState } from "react";
import { options } from "./Option";

function Sidebar() {
  const [selected, setSelected] = useState("dashboard");
  return (
    <div className="bg-primaryColor">
      {options.map((option) => (
        <div key={option.id} className="flex">
          <div
            className={`flex cursor-pointer my-4 items-center p-4 text-2xl capitalize ${
              selected == option.name &&
              "border-r bg-overColor  border-primaryColor"
            }`}
            onClick={() => setSelected(option.name)}
          >
            {option.icon}
            <p className="ml-2">{option.name}</p>
          </div>
          {selected == option.name && option.component}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
