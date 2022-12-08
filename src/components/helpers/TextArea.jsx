import { forwardRef } from "react";

import MessageFailure from "./MessageFailure";

const TextArea = forwardRef(({ text, validation }, ref) => {
  const { isInitial, isEmpty, isSmall } = validation;

  return (
    <div>
      <textarea
        ref={ref}
        name={text}
        placeholder={text}
        rows="10"
        className={`w-full resize-none rounded-md border-2 border-bgDark-300 bg-transparent p-2 caret-violet-500 selection:bg-violet-400 focus:border-violet-400 focus:outline-none dark:caret-orange-400  dark:selection:bg-orange-300 dark:selection:text-bgDark-900  dark:focus:border-bgLight-200 ${
          (isSmall || isEmpty) & !isInitial
            ? "border-failure-500 delay-75"
            : null
        } ${
          (!isSmall && !isEmpty) & !isInitial
            ? "border-success-500 delay-75"
            : null
        }`}
      />
      <MessageFailure
        isInitial={isInitial}
        isEmpty={isEmpty}
        isSmall={isSmall}
      />
    </div>
  );
});

export default TextArea;
