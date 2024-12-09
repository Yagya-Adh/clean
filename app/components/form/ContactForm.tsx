"use client";
import { useState } from "react";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <section className="max-w-screen-xl mx-auto px-10 sm:px-40 md:px-60 lg:px-80">
        <div className="flex flex-col justify-center items-center bg-black rounded-md py-4 px-10">
          <p className="font-inter font-normal text-lg text-white">
            Thank you! Your submission has been received!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-screen-xl mx-auto px-10 sm:px-40 md:px-60 lg:px-80">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center animate-fadeInUp">
          <div className="py-2 flex flex-col w-full">
            <label
              htmlFor="name"
              className="text-sm md:text-lg font-inter font-normal text-clean-black-10/40"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl shadow border-transparent focus:border-black outline-none"
            />
          </div>

          <div className="py-2 flex flex-col w-full">
            <label
              htmlFor="email"
              className="text-sm md:text-lg font-inter font-normal text-clean-black-10/40"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="e.g. johndoe@email.com"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl shadow border-transparent focus:border-black outline-none"
            />
          </div>

          <div className="py-2 flex flex-col w-full">
            <label
              htmlFor="phone"
              className="text-sm md:text-lg font-inter font-normal text-clean-black-10/40"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              placeholder="(123) - 456 - 789"
              value={formData.phone}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl shadow border-transparent focus:border-black outline-none"
            />
          </div>

          <div className="py-2 flex flex-col w-full">
            <label
              htmlFor="message"
              className="text-sm md:text-lg font-inter font-normal text-clean-black-10/40"
            >
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              placeholder="Write Your Message Here"
              value={formData.message}
              onChange={handleChange}
              className="rounded-2xl py-2 px-3 shadow border-transparent focus:border-black outline-none"
            />
          </div>
        </div>
        <div className="my-2">
          <button
            type="submit"
            disabled={isLoading}
            className="hover:bg-black hover:text-white bg-clean-green-10 px-4 py-3 rounded-xl text-sm  md:text-lg font-inter font-light shadow-sm duration-300 transition-all ease-in-out"
          >
            {isLoading ? "Please wait..." : "Send Message"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
