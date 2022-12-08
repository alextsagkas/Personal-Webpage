import { forwardRef } from "react";

import Title from "../utility/Title";
import Input from "../helpers/Input";
import TextArea from "../helpers/TextArea";
import SubmitButton from "../helpers/SubmitButton";

const Contact = forwardRef((props, ref) => (
  <section ref={ref} className="flex flex-col">
    <div className="flex items-center justify-center">
      {/* TODO: Form Post Logic */}
      <form
        // action="https://getform.io/f/13faa335-225a-4d88-8561-0f5940673221"
        // method="POST"
        className="flex w-full flex-col"
      >
        <Title>Contact</Title>
        <div className="flex flex-col gap-4">
          <Input text={"Name"} type={"text"} />
          <Input text={"Email"} type={"email"} />
          <TextArea text={"Message"} />
          <SubmitButton />
        </div>
      </form>
    </div>
  </section>
));

export default Contact;
