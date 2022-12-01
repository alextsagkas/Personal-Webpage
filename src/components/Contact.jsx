import Title from "./Title";

function Contact() {
  return (
    <section className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        {/* TODO: Check if this works on deployment */}
        <form
          action="https://getform.io/f/13faa335-225a-4d88-8561-0f5940673221"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="button"
            className="text-center inline-block px-8 py-3 w-max text-base 
            font-medium rounded-md text-white bg-gradient-to-r 
            from-blue-500 to-violet-400 dark:to-orange-400 drop-shadow-md 
            hover: stroke-white"
          >
            Work with Me
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
