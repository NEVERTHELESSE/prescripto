import { lazy, Suspense } from "react";

function Home() {
  const BookAppointment = lazy(() => import("./BookAppointment"));
  const Speciality = lazy(() => import("./Speciality"));
  const TopDoctor = lazy(() => import("./TopDoctor"));
  const NextBookAppointment = lazy(() => import("./NextBookAppointment"));
  const FirstHospital = lazy(() => import("./FirstHospital"));
  return (
    <div className="mt-[6rem] px-[5rem]">
      <Suspense fallback={"loading"}>
        <BookAppointment />
      </Suspense>
      <Suspense fallback={"loading"}>
        <FirstHospital />
      </Suspense>
      <Suspense fallback={"loading"}>
        <Speciality />
      </Suspense>
      <Suspense fallback={"loading"}>
        <TopDoctor />
      </Suspense>
      <Suspense fallback={"loading"}>
        <NextBookAppointment />
      </Suspense>
    </div>
  );
}

export default Home;
