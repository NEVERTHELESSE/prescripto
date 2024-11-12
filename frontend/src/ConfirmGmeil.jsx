import axios from "axios";

function ConfirmGmeil() {
  async function confirm() {
    await axios
      .post("http://192.168.208.1:9000/signup")
      .then((res) => console.log(res.data));
  }

  return (
    <div className="pt-[6rem]">
      <form action="" onSubmit={confirm}>
        <input
          type="number"
          placeholder="Enter your confirmation code"
          className="w-[30rem] text-2xl p-5"
        />
        <button type="submit" className="p-4 text-2xl bg-primaryColor">
          submit
        </button>
      </form>
    </div>
  );
}

export default ConfirmGmeil;
