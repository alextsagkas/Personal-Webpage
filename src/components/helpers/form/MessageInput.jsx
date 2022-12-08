import { forwardRef } from "react";
import TextAreaMark from "./TextAreaMark";

import MessageFailure from "./MessageFailure";

const MessageInput = forwardRef(({ text, validation }, ref) => {
  const { isInitial, isEmpty, isSmall, isBig } = validation;

  const failure = (isSmall || isEmpty || isBig) & !isInitial;
  const success = (!isSmall && !isEmpty && !isBig) & !isInitial;

  return (
    <div>
      <textarea
        ref={ref}
        name={text.toLowerCase()}
        placeholder={text}
        rows="10"
        className={`w-full resize-none rounded-md border-2 border-bgDark-300 bg-transparent p-2 caret-violet-500 selection:bg-violet-400 focus:border-violet-400 focus:outline-none dark:caret-orange-400  dark:selection:bg-orange-300 dark:selection:text-bgDark-900  dark:focus:border-bgLight-200 ${
          failure ? "border-failure-500" : null
        } ${success ? "border-success-500" : null}`}
      />
      <TextAreaMark failure={failure} success={success} />
      <MessageFailure
        isInitial={isInitial}
        isEmpty={isEmpty}
        isSmall={isSmall}
        isBig={isBig}
      />
    </div>
  );
});

export default MessageInput;
