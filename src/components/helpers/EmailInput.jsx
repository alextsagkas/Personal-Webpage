import { forwardRef } from "react";

const EmailInput = forwardRef(({ text, validation }, ref) => {
  const { isInitial, isEmpty, containsAt, endsWithDotCom } = validation;

  return (
    <input
      ref={ref}
      type="text"
      placeholder={text}
      className={`rounded-md border-2 border-bgDark-300 bg-transparent p-2 caret-violet-500 selection:bg-violet-400 focus:border-violet-400 focus:outline-none dark:caret-orange-400 dark:selection:bg-orange-300 dark:selection:text-bgDark-900 dark:focus:border-bgLight-200 ${
        (!isEmpty && containsAt && endsWithDotCom) & !isInitial
          ? "border-green-500 delay-75"
          : null
      } ${
        ((!isEmpty && !containsAt) || !endsWithDotCom) & !isInitial
          ? "border-red-500 delay-75"
          : null
      }`}
    />
  );
});

export default EmailInput;
