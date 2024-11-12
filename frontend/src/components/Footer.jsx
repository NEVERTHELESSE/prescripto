function Footer() {
  return (
    <div className=" z-[100] bg-bgcolor  w-full">
      <div className="px-[6rem] my-[3rem] flex text-2xl justify-around">
        <div className="w-[40rem]">
          <div className="flex items-center">
            <img src="/prescripto.png" alt="logo" className="size-[4rem]" />
            <p className="text-4xl font-bold text-primaryColor">Prescripto</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            mollitia assumenda, ut laboriosam eaque dolorum aspernatur, error
            quibusdam dolor. Necessitatibus laudantium odio voluptas ipsa.
          </p>
        </div>
        <div>
          <h1 className="text-primaryColor">COMPANY</h1>
          <p>Home</p>
          <p>About Us</p>
          <p>Delivery</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <h1 className="text-primaryColor">GET IN TOUCH</h1>
          <p>+234 8092-233-9022</p>
          <p>prescripto@gmail.com</p>
        </div>
      </div>
      <p className="text-3xl text-center text-primaryColor">
        Copyright 2024 @ Prescripto.com - All Right Reserved.
      </p>
    </div>
  );
}

export default Footer;
