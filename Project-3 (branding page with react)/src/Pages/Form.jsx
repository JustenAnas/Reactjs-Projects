import { useState } from "react";
import "remixicon/fonts/remixicon.css";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "contactForm",
      JSON.stringify({ name, email, message })
    );

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="flex m-auto w-[65%] ">
      <div className="w-1/2 px-8   flex flex-col justify-center ">
        <div className="flex gap-4 mb-4">
          <button className="flex-1 bg-black text-white py-2 rounded hover:bg-gray-800 transition">
            <i className="ri-message-ai-3-line"></i>
            VIA Support Chat
          </button>
          <button className="flex-1 bg-black text-white py-2 rounded hover:bg-gray-800 transition">
            <i className="ri-phone-fill"></i>
            VIA Call
          </button>
        </div>
        <div className="mb-8">
          <button className="w-full bg-white text-black border  py-2 rounded hover:bg-gray-100 transition font-bold ">
            <i className="ri-message-ai-3-line"></i>
            VIA Email Form
          </button>
        </div>

        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            className="w-full px-3 py-2 border rounded"
          />
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border rounded"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            className="w-full px-3 py-2 border rounded"
            rows={4}
          />
          <button
            type="submit"
            className="bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-1/2 flex items-center justify-center overflow-hidden  ">
        <img
          src="./contact.svg"
          alt="Contact Illustration"
          className="width: 75%; overflow-hidden "
        />
      </div>
    </div>
  );
};

export default Form;
