import axios from "axios";
import { useState } from "react";

function Form() {
  const [username, setUsername] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendMessage(e) {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/contact", {
        username,
        subject,
        email,
        message,
      })
      .then((res) => console.log(res.data));
  }

  return (
    <form action="" onSubmit={sendMessage}>
      <input
        type="text"
        placeholder="Username"
        className="w-full p-4 my-3 bg-gray-700"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email Address"
        className="w-full p-4 my-3 bg-gray-700"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        className="w-full p-4 my-3 bg-gray-700"
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        name=""
        id=""
        placeholder="Your Message"
        rows={5}
        className="w-full p-4 my-3 bg-gray-700"
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button className="px-8 py-2 rounded-full bg-primaryColor">Submit</button>
    </form>
  );
}

export default Form;
