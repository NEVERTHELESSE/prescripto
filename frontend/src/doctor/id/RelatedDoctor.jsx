import { doctorsLists } from "../../home/doctorlist";

export default function RelatedDoctor({ sort }) {
  const location = window.location.pathname.split("/")[2];
  const selectedDoctor = doctorsLists.filter(
    (r) => r.speciality.includes(sort) && r.id != location
  );
  return (
    <div>
      <p className="text-4xl font-bold text-center capitalize">
        related doctor
      </p>
      <div className="flex flex-wrap items-center ">
        {selectedDoctor.map((r) => (
          <div key={r.id} className="m-2 border ">
            <img
              src={r.imageUrl}
              alt=""
              className="w-[30rem] h-[40rem] object-cover"
            />
            <p className="text-3xl font-bold text-center">{r.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
