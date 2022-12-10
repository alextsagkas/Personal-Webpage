import TextAreaMark from "./TextAreaMark";

import MessageFailure from "./MessageFailure";

const MessageInput = ({ message, text, setMessage, isInitial, validation }) => {
  const { messageIsInitial, isEmpty, isSmall, isBig, isOkay } = validation;

  const failure = (!isInitial || !messageIsInitial) & !isOkay;
  const success = (!isInitial || !messageIsInitial) & isOkay;

  return (
    <div>
      <textarea
        name={"message"}
        placeholder={text}
        rows="10"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        className={`w-full resize-none rounded-md border-2 border-bgDark-300 bg-transparent py-2 pl-2 pr-10 caret-violet-500 selection:bg-violet-400 focus:outline-none dark:caret-orange-400  dark:selection:bg-orange-300 dark:selection:text-bgDark-900 ${
          failure ? "border-failure-500 focus:border-failure-500" : null
        } ${success ? "border-success-500 focus:border-success-500" : null} ${
          !failure && !success
            ? "focus:border-violet-400 dark:focus:border-bgLight-200"
            : null
        }`}
      />
      <TextAreaMark failure={failure} success={success} />
      <MessageFailure
        isEmpty={isEmpty}
        isSmall={isSmall}
        isBig={isBig}
        failure={failure}
      />
    </div>
  );
};

export default MessageInput;
