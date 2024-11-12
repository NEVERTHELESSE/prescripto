import { doctorsLists } from "../../home/doctorlist";
import Profile from "./Profile";
import RelatedDoctor from "./RelatedDoctor";

function DoctorId() {
  const location = window.location.pathname.split("/")[2];
  const doctor = doctorsLists.find((r) => r.id == location);
  return (
    <div className="pt-[6rem]">
      <Profile doctor={doctor} />
      <RelatedDoctor sort={doctor.speciality} />
    </div>
  );
}

export default DoctorId;
