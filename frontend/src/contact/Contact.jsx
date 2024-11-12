import {
  FaFacebook,
  FaPinterest,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Form from "./Form";

function Contact() {
  return (
    <div className="pt-[6rem] px-[5rem] flex justify-around text-3xl">
      <img
        src="/contact/contact1.jpg"
        alt="contact"
        className="w-[30%] animate-bounce"
      />
      <div className="ml-[3rem]">
        <div className="flex items-center my-5">
          <abbr title="facebook">
            <FaFacebook />
          </abbr>
          <p> Prescripto Hospital</p>
        </div>
        <div className="flex items-center my-5">
          <abbr title="whatsapp">
            <FaWhatsapp />
          </abbr>
          <p> +234 905 160 2335</p>
        </div>
        <div className="flex items-center my-5">
          <abbr title="twitter">
            <FaTwitter />
          </abbr>
          <p> Prescripto Hospital</p>
        </div>
        <div className="flex items-center my-5">
          <abbr title="pinterest">
            <FaPinterest />
          </abbr>
          <p> Prescripto Hospital</p>
        </div>
        <div className="flex items-center my-5">
          <abbr title="telegram">
            <FaTelegram />
          </abbr>
          <p> Prescripto Hospital</p>
        </div>
      </div>
      <div className="w-[40%] border-l  p-4">
        <p>Kindly submit your request</p>
        <p>We will reply to you at your email address in less than 24hours</p>
        <Form />
      </div>
    </div>
  );
}

export default Contact;
