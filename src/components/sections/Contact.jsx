import { forwardRef, useState, useRef } from "react";

import Title from "../utility/Title";
import Input from "../helpers/Input";
import TextArea from "../helpers/TextArea";
import SubmitButton from "../helpers/SubmitButton";

const Contact = forwardRef((props, ref) => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");

  const submitForm = (event) => {
    event.preventDefault();
    console.log("name: ", nameRef.current.value);
    console.log("email: ", emailRef.current.value);
    console.log("message: ", messageRef.current.value);
  };

  return (
    <section ref={ref} className="flex flex-col">
      <div className="flex items-center justify-center">
        {/* TODO: Form Post Logic */}
        <form
          onSubmit={submitForm}
          // action="https://getform.io/f/13faa335-225a-4d88-8561-0f5940673221"
          method="POST"
          className="flex w-full flex-col"
        >
          <Title>Contact</Title>
          <div className="flex flex-col gap-4">
            <Input text={"Name"} type={"text"} ref={nameRef} />
            <Input text={"Email"} type={"email"} ref={emailRef} />
            <TextArea text={"Message"} ref={messageRef} />
            {/* For Spambots */}
            <input type="hidden" className="hidden" />
            <SubmitButton />
          </div>
        </form>
      </div>
    </section>
  );
});

export default Contact;
