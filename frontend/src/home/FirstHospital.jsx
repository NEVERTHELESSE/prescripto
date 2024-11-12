import { useEffect, useRef, useState } from "react";

function useOnScreen(option) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting);
      });
    }, option);
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, option]);
  return [ref, visible];
}
function FirstHospital() {
  const [ref, visible] = useOnScreen({ rootMargin: "-10px" });
  const [refs, visibles] = useOnScreen({ rootMargin: "-10px" });
  const [refss, visibless] = useOnScreen({ rootMargin: "-10px" });

  return (
    <div>
      <div className="my-[5rem] flex">
        <img
          ref={ref}
          src="/hospital/hospital1.jpg"
          alt="hospital"
          // id="hospital"
          className={`w-[50%]  duration-1000 ${
            visible
              ? "translate-x-[0] opacity-100"
              : "translate-x-[-40rem] opacity-0"
          }`}
        />

        <div className="ml-5">
          <p className="text-5xl font-bold">Complex Hospital</p>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nam ab
            consectetur enim aliquam fugit exercitationem nobis consequatur aut
            repudiandae expedita repellendus beatae ut nisi velit blanditiis
            temporibus quos, praesentium culpa, atque sequi numquam. Laborum ex,
            itaque id doloribus voluptas animi nam culpa minus, nesciunt eius
            odit unde, veniam commodi.
          </p>
          <br />
          <p className="text-2xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nam ab
            consectetur enim aliquam fugit exercitationem nobis consequatur aut
            repudiandae expedita repellendus beatae ut nisi velit blanditiis
            temporibus quos, praesentium culpa, atque sequi numquam. Laborum ex,
            itaque id doloribus voluptas animi nam culpa minus, nesciunt eius
            odit unde, veniam commodi.
          </p>
        </div>
      </div>
      <div className="my-[7rem] flex">
        <div className="mr-5">
          <p className="text-6xl font-bold">Reliable Equipment</p>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nam ab
            consectetur enim aliquam fugit exercitationem nobis consequatur aut
            repudiandae expedita repellendus beatae ut nisi velit blanditiis
            temporibus quos, praesentium culpa, atque sequi numquam. Laborum ex,
            itaque id doloribus voluptas animi nam culpa minus, nesciunt eius
            odit unde, veniam commodi.
          </p>
          <br />
          <p className="text-2xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nam ab
            consectetur enim aliquam fugit exercitationem nobis consequatur aut
            repudiandae expedita repellendus beatae ut nisi velit blanditiis
            temporibus quos, praesentium culpa, atque sequi numquam. Laborum ex,
            itaque id doloribus voluptas animi nam culpa minus, nesciunt eius
            odit unde, veniam commodi.
          </p>
        </div>
        <img
          src="/hospital/nurse.jpg"
          ref={refs}
          alt="hospital"
          className={`w-[50%]  duration-1000 ${
            visibles ? "translate-x-[0]" : "translate-x-[20rem]"
          }`}
        />
      </div>
      <div className="my-[7rem] flex">
        <img
          src="/hospital/nurse1.jpg"
          alt="hospital"
          className={`w-[50%]  duration-1000 ${
            visibless ? "translate-x-[0]" : "translate-x-[-20rem]"
          }`}
          ref={refss}
        />
        <div className="ml-5">
          <p className="text-6xl font-bold">Professional Nursing</p>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nam ab
            consectetur enim aliquam fugit exercitationem nobis consequatur aut
            repudiandae expedita repellendus beatae ut nisi velit blanditiis
            temporibus quos, praesentium culpa, atque sequi numquam. Laborum ex,
            itaque id doloribus voluptas animi nam culpa minus, nesciunt eius
            odit unde, veniam commodi.
          </p>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nam ab
            consectetur enim aliquam fugit exercitationem nobis consequatur aut
            repudiandae expedita repellendus beatae ut nisi velit blanditiis
            temporibus quos, praesentium culpa, atque sequi numquam. Laborum ex,
            itaque id doloribus voluptas animi nam culpa minus, nesciunt eius
            odit unde, veniam commodi.
          </p>
          <br />
          <p className="text-2xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nam ab
            consectetur enim aliquam fugit exercitationem nobis consequatur aut
            repudiandae expedita repellendus beatae ut nisi velit blanditiis
            temporibus quos, praesentium culpa, atque sequi numquam. Laborum ex,
            itaque id doloribus voluptas animi nam culpa minus, nesciunt eius
            odit unde, veniam commodi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FirstHospital;
