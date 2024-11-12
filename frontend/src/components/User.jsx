import { lazy, Suspense } from "react";

function User() {
  const Userdetails = lazy(() => import("./UserDetails"));
  return (
    <details>
      <summary className="list-none cursor-pointer">
        <img
          src="/user/user1.jpg"
          alt="user"
          className="size-[3rem] rounded-full  border  p-1 border-primaryColor"
        />
      </summary>
      <Suspense fallback={"loading"}>
        <Userdetails />
      </Suspense>
    </details>
  );
}

export default User;
