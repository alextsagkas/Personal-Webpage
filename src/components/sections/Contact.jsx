import { forwardRef, useState, useEffect } from "react";

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
  const [name, setName] = useState("");
  const [nameIsInitial, setNameIsInitial] = useState(true);
  const [nameValidation, setNameValidation] = useState({
    isEmpty: true,
    isSmall: true,
    isBig: false,
    isOkay: false,
  });
  const [email, setEmail] = useState("");
  const [emailIsInitial, setEmailIsInitial] = useState(true);
  const [emailValidation, setEmailValidation] = useState({
    isEmpty: true,
    containsAt: false,
    endsWithDotCom: false,
    isBig: false,
    isOkay: false,
  });
  const [message, setMessage] = useState("");
  const [messageIsInitial, setMessageIsInitial] = useState(true);
  const [messageValidation, setMessageValidation] = useState({
    isEmpty: true,
    isSmall: true,
    isBig: false,
    isOkay: false,
  });
  const [isInitial, setIsInitial] = useState(true);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [allowFetch, setAllowFetch] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [successFetch, setSuccessFetch] = useState(false);

  useEffect(() => {
    if (name.length === 0) {
      setNameIsInitial(true);
    } else {
      setNameValidation(checkName(name));
      setNameIsInitial(false);
    }
  }, [name]);

  useEffect(() => {
    if (email.length === 0) {
      setEmailIsInitial(true);
    } else {
      setEmailValidation(checkEmail(email));
      setEmailIsInitial(false);
    }
  }, [email]);

  useEffect(() => {
    if (message.length === 0) {
      setMessageIsInitial(true);
    } else {
      setMessageValidation(checkMessage(message));
      setMessageIsInitial(false);
    }
  }, [message]);

  const submitForm = (event) => {
    event.preventDefault();

    setNameValidation(checkName(name));
    setEmailValidation(checkEmail(email));
    setMessageValidation(checkMessage(message));

    setIsInitial(false);
    setButtonPressed(true);
  };

  useEffect(() => {
    if (
      buttonPressed &&
      nameValidation.isOkay &&
      emailValidation.isOkay &&
      messageValidation.isOkay
    ) {
      setAllowFetch(true);
    } else {
      setAllowFetch(false);
      setButtonPressed(false);
    }
  }, [buttonPressed, nameValidation, emailValidation, messageValidation]);

  useEffect(() => {
    if (allowFetch) {
      setDisableButton(true);
      fetchData(name, email, message).then((success) => {
        setSuccessFetch(success);
        setDisableButton(false);
        if (success) {
          setName("");
          setEmail("");
          setMessage("");
          const timeout = setTimeout(() => {
            setIsInitial(true);
          }, 3000);
          return () => {
            clearTimeout(timeout);
          };
        }
      });
    }
    setButtonPressed(false);
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
              name={name}
              text={"Name"}
              setName={setName}
              isInitial={isInitial}
              validation={{ nameIsInitial, ...nameValidation }}
            />
            <EmailInput
              email={email}
              text={"Email"}
              setEmail={setEmail}
              isInitial={isInitial}
              validation={{ emailIsInitial, ...emailValidation }}
            />
            <MessageInput
              message={message}
              text={"Message"}
              setMessage={setMessage}
              isInitial={isInitial}
              validation={{ messageIsInitial, ...messageValidation }}
            />
            {/* For Spambots */}
            <input type="hidden" className="hidden" />
            <div className="flex flex-row justify-between">
              <SubmitButton disableButton={disableButton} />
              <FetchMessage
                success={successFetch}
                pending={disableButton}
                buttonPressed={buttonPressed}
                isInitial={isInitial}
              />
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
