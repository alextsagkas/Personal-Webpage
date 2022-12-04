import Title from "./Title";

function Contact() {
  return (
    <section className="mx-auto mb-10 flex flex-col">
      <div className="flex items-center justify-center">
        {/* TODO: Check if this works on deployment */}
        <form
          action="https://getform.io/f/13faa335-225a-4d88-8561-0f5940673221"
          method="POST"
          className="flex w-full flex-col md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="rounded-md border-2 bg-transparent p-2 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="my-4 rounded-md border-2 bg-transparent p-2 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="mb-4 rounded-md border-2 bg-transparent p-2 focus:outline-none"
          />
          <button
            type="button"
            className="hover: inline-block w-max rounded-md bg-gradient-to-r from-blue-500 to-violet-400 stroke-white px-8 py-3 text-center text-base font-medium text-white drop-shadow-md dark:to-orange-400"
          >
            Work with Me
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
