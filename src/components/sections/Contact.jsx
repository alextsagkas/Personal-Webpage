import { forwardRef, useRef, useState, useEffect } from "react";

import Title from "../utility/Title";
import NameInput from "../helpers/form/NameInput";
import EmailInput from "../helpers/form/EmailInput";
import MessageInput from "../helpers/form/MessageInput";
import SubmitButton from "../helpers/SubmitButton";
import FetchMessage from "../helpers/form/FetchMessage";

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

  const [validation, setValidation] = useState({
    name: {
      isEmpty: true,
      isSmall: true,
      isBig: false,
      isOkay: false,
    },
    email: {
      isEmpty: true,
      containsAt: false,
      endsWithDotCom: false,
      isBig: false,
      isOkay: false,
    },
    message: {
      isEmpty: true,
      isSmall: true,
      isBig: false,
      isOkay: false,
    },
  });
  const [isInitial, setIsInitial] = useState(true);
  const [allowFetch, setAllowFetch] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [successFetch, setSuccessFetch] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();

    setValidation({
      name: checkName(nameRef.current.value),
      email: checkEmail(emailRef.current.value),
      message: checkMessage(messageRef.current.value),
    });
    setIsInitial(false);
  };

  useEffect(() => {
    if (
      !isInitial &&
      validation.name.isOkay &&
      validation.email.isOkay &&
      validation.message.isOkay
    ) {
      setAllowFetch(true);
    } else {
      setAllowFetch(false);
    }
  }, [validation, isInitial]);

  useEffect(() => {
    if (allowFetch) {
      setDisableButton(true);
      fetchData(
        nameRef.current.value,
        emailRef.current.value,
        messageRef.current.value
      ).then((success) => {
        setSuccessFetch(success);
        setDisableButton(false);
        if (success) {
          nameRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
          const timeout = setTimeout(() => {
            setIsInitial(true);
          }, 3000);
          return () => {
            clearTimeout(timeout);
          };
        }
      });
    }
  }, [allowFetch]);

  return (
    <section ref={ref} className="flex flex-col">
      <div className="flex items-center justify-center">
        <form
          onSubmit={submitForm}
          method="POST"
          acceptCharset="UTF-8"
          className="flex w-full flex-col"
        >
          <Title>Contact</Title>
          <div className="flex flex-col gap-4">
            <NameInput
              text={"Name"}
              ref={nameRef}
              validation={{ isInitial, ...validation.name }}
            />
            <EmailInput
              text={"Email"}
              ref={emailRef}
              validation={{ isInitial, ...validation.email }}
            />
            <MessageInput
              text={"Message"}
              ref={messageRef}
              validation={{ isInitial, ...validation.message }}
            />
            {/* For Spambots */}
            <input type="hidden" className="hidden" />
            <div className="flex flex-row justify-between">
              <SubmitButton disableButton={disableButton} />
              {allowFetch ? (
                <FetchMessage success={successFetch} pending={disableButton} />
              ) : null}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
});

export default Contact;

// // Debugging
// console.log("name: ", nameRef.current.value);
// console.log("email: ", emailRef.current.value);
// console.log("message: ", messageRef.current.value);
// console.log("check name: ", nameValidation);
// console.log("check email: ", emailValidation);
// console.log("check message: ", messageValidation);
