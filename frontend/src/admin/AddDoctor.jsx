import { FaUser } from "react-icons/fa";
import FirstHospital from "../home/FirstHospital";
function AddDoctor() {
  return (
    <div className="mx-6 mt-[-10rem] text-2xl">
      <p className="text-3xl">Add Doctor</p>
      <input type="file" className="hidden" id="upload" />
      <label htmlFor="upload" className="flex items-center">
        <FaUser className="p-2 mr-2 bg-gray-500 rounded-full text-[8rem]" />
        <p className="text-gray-400">Upload Doctor Picture</p>
      </label>
      <div className="flex">
        <div>
          <p>Your Name</p>
          <input type="text" placeholder="Name" />
        </div>
        <div>
          <p>Your Name</p>
          <input type="text" placeholder="Name" />
        </div>
      </div>
    </div>
  );
}

export default AddDoctor;
