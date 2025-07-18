import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaArrowRightLong,
  FaFacebookMessenger,
  FaWhatsapp,
} from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
import { LuSend } from "react-icons/lu";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6kyj6zt", "template_q2opytj", form.current, {
        publicKey: "nvS-KzKa0R-lFD6n_",
      })
      .then(e.target.reset());
  };

  return (
    <section >
      <h2 className=" text-center text-4xl pb-2">Get in touch</h2>
      <p className=" text-center text-2xl text-stone-400">Contact Me</p>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className=" flex flex-col items-center">
          <h3 className=" text-2xl py-2 text-center">Talk to me</h3>

          <div>
            <div className="mb-7 border w-80 text-center rounded-2xl flex flex-col py-4 items-center">
              <IoIosMailUnread className=" size-7" />
              <p className=" font-bold">Email</p>
              <p className=" text-stone-400">MahmoudQedais306@gmail.com</p>
              <a href="mailto:MahmoudQedais306@gmail.com"  className=" text-stone-300">
                Write me <FaArrowRightLong className=" inline ml-2" />
              </a>
            </div>

            <div className="my-7 border w-80 text-center rounded-2xl flex flex-col py-4 items-center">
              <FaWhatsapp className=" size-7" />

              <p className=" font-bold">Whatsapp</p>
              <p className=" text-stone-400">01150909991</p>
              <a
                href="https://wa.me/01150909991"
                target="_blank"
                rel="noopener noreferrer"
              >
                Write me <FaArrowRightLong className=" inline ml-2" />
              </a>
            </div>

            <div className="my-7 border w-80 flex flex-col py-4 items-center rounded-2xl">
              <FaFacebookMessenger className="size-7 " />
              <p className=" font-bold">Messenger</p>
              <p className=" text-stone-400">Mahmoud Qedais</p>
              <a
                href="https://m.me/m.Qedas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Write me <FaArrowRightLong className=" inline ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div className=" flex flex-col items-center">
          <h3 className=" text-2xl py-2 text-center">Write me your project</h3>
          <form ref={form} onSubmit={sendEmail} className=" w-full">

            <label htmlFor="Email" className="relative ">
              <input
                type="text"
                id="name"
                name="name"
                placeholder=""
                className=" h-12 rounded-2xl peer mt-0.5 w-full  border shadow-sm sm:text-sm mb-6"
              />

              <span
                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium
               text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 dark:bg-gray-900 dark:text-white"
              >
                Name
              </span>
            </label>


            <label htmlFor="Email" className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder=""
                className=" h-12 rounded-2xl peer mt-0.5 w-full  border shadow-sm sm:text-sm mb-6"
              />

              <span
                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium
               text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 dark:bg-gray-900 dark:text-white"
              >
                Email
              </span>
            </label>

            <label htmlFor="Email" className="relative">
              <textarea
                type="email"
                id="email"
                name="project"
                placeholder=""
                className="rounded-2xl peer mt-0.5 w-full  border shadow-sm sm:text-sm h-40"
              />

              <span
                className="absolute mt-3 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium
               text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 dark:bg-gray-900 dark:text-white"
              >
                Email
              </span>
            </label>

            <button type="submit" className="border mt-6 p-3 rounded-4xl bg-white text-black">
              Send Message <LuSend className=" inline" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
