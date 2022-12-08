import { forwardRef, useRef, useState } from "react";

import Title from "../utility/Title";
import NameInput from "../helpers/NameInput";
import EmailInput from "../helpers/EmailInput";
import TextArea from "../helpers/TextArea";
import SubmitButton from "../helpers/SubmitButton";

import { checkName, checkEmail } from "../../functions/formValidation";

const Contact = forwardRef((props, ref) => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");

  const [nameValidation, setNameValidation] = useState({
    isInitial: true,
    isEmpty: false,
    isSmall: false,
  });

  const [emailValidation, setEmailValidation] = useState({
    isInitial: true,
    isEmpty: false,
    containsAt: false,
    endsWithDotCom: false,
  });

  const submitForm = (event) => {
    event.preventDefault();

    setNameValidation({
      isInitial: false,
      ...checkName(nameRef.current.value),
    });

    setEmailValidation({
      isInitial: false,
      ...checkEmail(emailRef.current.value),
    });

    console.log("name: ", nameRef.current.value);
    console.log("email: ", emailRef.current.value);
    console.log("message: ", messageRef.current.value);
    console.log("check name: ", nameValidation);
    console.log("check email: ", emailValidation);
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
            <NameInput
              text={"Name"}
              ref={nameRef}
              validation={nameValidation}
            />
            <EmailInput
              text={"Email"}
              ref={emailRef}
              validation={emailValidation}
            />
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
