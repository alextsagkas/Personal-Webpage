import { forwardRef, useRef, useState, useEffect } from "react";

import Title from "../utility/Title";
import NameInput from "../helpers/form/NameInput";
import EmailInput from "../helpers/form/EmailInput";
import MessageInput from "../helpers/form/MessageInput";
import SubmitButton from "../helpers/SubmitButton";
import {
  checkName,
  checkEmail,
  checkMessage,
} from "../../functions/formValidation";

import { fetchData } from "../../functions/fetchData";

const Contact = forwardRef((props, ref) => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");

  const [nameValidation, setNameValidation] = useState({
    isInitial: true,
    isEmpty: false,
    isSmall: false,
    isBig: false,
    isOkay: false,
  });

  const [emailValidation, setEmailValidation] = useState({
    isInitial: true,
    isEmpty: false,
    containsAt: false,
    endsWithDotCom: false,
    isBig: false,
    isOkay: false,
  });

  const [messageValidation, setMessageValidation] = useState({
    isInitial: true,
    isEmpty: false,
    isSmall: false,
    isBig: false,
    isOkay: false,
  });
  const [disableButton, setDisableButton] = useState(false);
  const [successFetch, setSuccessFetch] = useState(false);

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

    setMessageValidation({
      isInitial: false,
      ...checkMessage(messageRef.current.value),
    });
  };

  useEffect(() => {
    const readyForSubmission =
      nameValidation.isOkay & emailValidation.isOkay & messageValidation.isOkay;

    if (readyForSubmission) {
      setDisableButton(true);
      fetchData(
        nameRef.current.value,
        emailRef.current.value,
        messageRef.current.value
      ).then((success) => {
        setSuccessFetch(success);
        setDisableButton(false);
      });
    }
  }, [nameValidation, emailValidation, messageValidation]);

  // // Debugging
  // console.log("name: ", nameRef.current.value);
  // console.log("email: ", emailRef.current.value);
  // console.log("message: ", messageRef.current.value);
  // console.log("check name: ", nameValidation);
  // console.log("check email: ", emailValidation);
  // console.log("check message: ", messageValidation);

  return (
    <section ref={ref} className="flex flex-col">
      <div className="flex items-center justify-center">
        {/* TODO: Form Post Logic */}
        <form
          onSubmit={submitForm}
          method="POST"
          accept-charset="UTF-8"
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
            <MessageInput
              text={"Message"}
              ref={messageRef}
              validation={messageValidation}
            />
            {/* For Spambots */}
            <input type="hidden" className="hidden" />
            <SubmitButton disableButton={disableButton} />
          </div>
        </form>
      </div>
    </section>
  );
});

export default Contact;
