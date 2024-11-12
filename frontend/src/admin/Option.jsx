import Dashboard from "./Dashboard";
import { FaHome } from "react-icons/fa";
import AddDoctor from "./AddDoctor";
import DoctorList from "./DoctorList";
import Appointments from "./Appointments";

export const options = [
  {
    id: 1,
    name: "dashboard",
    component: <Dashboard />,
    icon: <FaHome />,
  },
  {
    id: 2,
    name: "appointments",
    component: <Appointments />,
    icon: <FaHome />,
  },
  {
    id: 3,
    name: "add doctor",
    component: <AddDoctor />,
    icon: <FaHome />,
  },
  {
    id: 4,
    name: "doctor list",
    component: <DoctorList />,
    icon: <FaHome />,
  },
];
