const ContactForm = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-96">
      <form>
        <div className="flex flex-col justify-center items-center animate-fadeInUp">
          <div className="py-2 flex flex-col w-full">
            <label className="text-sm text-clean-black-10/60" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              placeholder="e.g. John Doe "
              className="
              rounded-full
              py-2 px-3 
              border-transparent
              shadow 
              focus:border 
              :border-black 
              outline-none"
            />
          </div>
          <div className="py-2 flex flex-col w-full">
            <label className="text-sm text-clean-black-10/60" htmlFor="email">
              Email Address
            </label>
            <input
              type="text"
              placeholder="e.g. johndoe@email.com"
              className="
              rounded-full 
              py-2 px-3 
              border-transparent 
              shadow focus:border 
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
              rounded-full 
              py-2 
              px-3 
              border-transparent 
              shadow 
              focus:border 
              focus:border-black 
              outline-none"
            />
          </div>
          <div className="py-2 flex flex-col w-full">
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Write Your Message Here"
              className="
              rounded-2xl 
              py-2 
              px-3 
              border-transparent 
              shadow 
              focus:border 
              focus:border-black 
              outline-none"
              rows={3}
            ></textarea>
          </div>
        </div>

        <div className="my-2">
          <button
            className="
              bg-clean-green-10
               hover:bg-black 
               text-black
               hover:text-white 
               rounded-xl
               text-sm 
               shadow-sm
               px-2 
               py-3 
               duration-300
               transition-all
               ease-in-out
              "
            type="button"
          >
            Send Message{" "}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
