import { Link } from "react-router-dom";
import { doctorsLists } from "./doctorlist";

function TopDoctor() {
  return (
    <div className="text-center ">
      <h1 className="text-6xl">Top Doctor to Book</h1>
      <p className="my-3 text-2xl bg-opacity-60">
        Simply browse through our extensive doctor
      </p>
      <div className="flex flex-wrap justify-around">
        {doctorsLists.slice(0, 20).map((r) => (
          <Link
            id="topDoctor"
            to={`/doctor/${r.id}`}
            key={r.id}
            className="mx-2 my-4 duration-1000 rounded-lg cursor-pointer bg-coverColor hover:scale-110"
          >
            <img
              src={r.imageUrl}
              alt={r.name}
              className="w-[20rem] h-[30rem] bg-overColor  object-cover hover:bg-coverColor"
            />
            <div className="flex flex-col items-center justify-center">
              {r.isAvailable ? (
                <div>
                  <div className="flex items-center justify-center">
                    <div className="size-[10px] rounded-full bg-primaryColor text-center mr-2"></div>
                    <span>Available</span>
                  </div>
                </div>
              ) : (
                <p>not available</p>
              )}
              <p className="my-2 text-2xl font-bold ">{r.name}</p>
              <p className="my-2 capitalize">{r.speciality}</p>
            </div>
          </Link>
        ))}
      </div>
      <Link
        to="/doctors"
        className="px-20 py-4 text-2xl font-bold rounded-l-full bg-primaryColor my-[2rem] mb-[3rem]"
      >
        More
      </Link>
    </div>
  );
}

export default TopDoctor;
