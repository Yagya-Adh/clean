const ContactForm = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-10 sm:px-40 md:px-60 lg:px-80">
      <form>
        <div className="flex flex-col justify-center items-center animate-fadeInUp">
          <div className="py-2 flex flex-col w-full">
            <label className="text-sm text-clean-black-10/60" htmlFor="name">
              Name
            </label>
            <input
              required
              type="text"
              placeholder="e.g. John Doe "
              className="
              px-4 
              py-3 
              rounded-xl
              shadow 
              border-transparent
              focus:border 
              focus:border-black 
              outline-none
              "
            />
          </div>
          <div className="py-2 flex flex-col w-full">
            <label className="text-sm text-clean-black-10/60" htmlFor="email">
              Email Address
            </label>
            <input
              required
              type="text"
              placeholder="e.g. johndoe@email.com"
              className="
               px-4 
              py-3 
              rounded-xl
              border-transparent
              shadow 
              focus:border 
              focus:border-black 
              outline-none"
            />
          </div>
          <div className="py-2 flex flex-col w-full">
            <label className="text-sm text-clean-black-10/60" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="(123) - 456 - 789"
              className="
              px-4 
              py-3 
              rounded-xl
              shadow 
              border-transparent
              focus:border 
              focus:border-black 
              outline-none"
            />
          </div>
          <div className="py-2 flex flex-col w-full">
            <label className="text-sm text-clean-black-10/60" htmlFor="message">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Write Your Message Here"
              className="
              rounded-2xl 
              py-2 
              px-3 
              shadow 
              border-transparent 
              focus:border 
              focus:border-black 
              outline-none
              "
              rows={4}
            ></textarea>
          </div>
        </div>
        <div className="my-2">
          <button
            className="
            px-4 
            py-3 
            bg-clean-green-10
            hover:bg-black 
            text-black
            hover:text-white 
            rounded-xl
            text-sm 
            shadow-sm
            duration-300
            transition-all
            ease-in-out
            "
            type="submit"
          >
            Send Message{" "}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
