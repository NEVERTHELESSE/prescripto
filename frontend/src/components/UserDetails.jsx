import { Link } from "react-router-dom";

export default function UserDetails() {
  const userinfo = [
    { name: "my profile", link: "account" },
    { name: "my appointments", link: "appointment" },
    { name: "logout" },
  ];
  return (
    <div className="absolute  rounded-2xl shadow bg-overColor right-[2rem] border border-primaryColor flex flex-col">
      {userinfo.map((r, index) => (
        <Link
          to={r.link}
          key={r.name}
          className={`py-3 text-2xl hover:bg-coverColor  duration-150 cursor-pointer
             ${
               index == 0 && "hover:rounded-tl-2xl hover:rounded-tr-2xl"
             } capitalize px-7 ${
            r.name != "logout"
              ? "border-b "
              : "hover:rounded-bl-2xl hover:rounded-br-2xl"
          }  `}
        >
          {r.name}
        </Link>
      ))}
    </div>
  );
}
