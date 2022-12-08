import { forwardRef } from "react";

import Title from "../utility/Title";

const Contact = forwardRef((props, ref) => (
  <section ref={ref} className="flex flex-col">
    <div className="flex items-center justify-center">
      {/* TODO: Check if this works on deployment */}
      <form
        action="https://getform.io/f/13faa335-225a-4d88-8561-0f5940673221"
        method="POST"
        className="flex w-full flex-col"
      >
        <Title>Contact</Title>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="rounded-md border-2 border-bgDark-300 bg-transparent p-2 caret-violet-500 selection:bg-violet-400 focus:border-violet-400 focus:outline-none dark:caret-orange-400 dark:selection:bg-orange-300 dark:selection:text-bgDark-900 dark:focus:border-bgLight-200"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="my-4 rounded-md border-2 border-bgDark-300 bg-transparent p-2 caret-violet-500 selection:bg-violet-400 focus:border-violet-400 focus:outline-none dark:caret-orange-400 dark:selection:bg-orange-300 dark:selection:text-bgDark-900 dark:focus:border-bgLight-200"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="10"
          className="mb-4 resize-none rounded-md border-2 border-bgDark-300 bg-transparent p-2 caret-violet-500 selection:bg-violet-400 focus:border-violet-400 focus:outline-none dark:caret-orange-400  dark:selection:bg-orange-300 dark:selection:text-bgDark-900  dark:focus:border-bgLight-200"
          required
        />
        <button
          type="button"
          className="w-max rounded-md bg-gradient-to-r from-blue-500 to-violet-400 stroke-white px-8 py-3 text-center text-base font-medium text-white transition duration-300 ease-in-out hover:scale-105 hover:from-blue-500 hover:to-violet-500 focus:outline-bgDark-900 dark:to-orange-400 hover:dark:to-orange-500 dark:focus:outline-white "
        >
          Work with Me
        </button>
      </form>
    </div>
  </section>
));

export default Contact;
