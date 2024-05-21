import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefaulf();
  };
  return (
    <div
      name="contact"
      className=" pt-10 bg-gradient-to-b from-black to-gray-800 h-auto sm:h-screen w-full text-white font-Basic"
    >
      <div className="max-w-screen-lg flex flex-col justify-center p-4 w-full h-full sm:max-h-screen mx-auto">
        <div className="pb-8">
          <p className="text-4xl inline border-b-4 border-gray-600 font-bold">
            Contact us
          </p>
          <p className="py-5">Submit the below form to get touch with me </p>
        </div>
        <div className="flex justify-center">
          <form
            action="https://getform.io/f/zbxdjorb"
            method="POST"
            className="flex flex-col gap-3 w-full  max-w-lg"
          >
            <input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Enter your name"
              className="p-2 rounded-md bg-transparent border-2 focus:outline-none text-white"
              required
            />
            <input
              type="text"
              name="email"
              autoComplete="off"
              placeholder="Enter your email"
              className="p-2 rounded-md bg-transparent border-2 focus:outline-none text-white "
              required
            />
            <textarea
              type="text"
              name="message"
              placeholder="Write message here!!"
              rows={10}
              className="p-2 rounded-md bg-transparent border-2 focus:outline-none text-white"
              required
            />
            <button
              className="bg-gradient-to-b from-cyan-500 to-blue-500 py-3 px-6 mx-auto rounded-lg hover:opacity-80"
              onClick={handleSubmit}
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
