import { forwardRef } from "react";

const TextArea = forwardRef(({ text, validation }, ref) => {
  const { isInitial, isEmpty, isSmall } = validation;

  return (
    <textarea
      ref={ref}
      name={text}
      placeholder={text}
      rows="10"
      className={`resize-none rounded-md border-2 border-bgDark-300 bg-transparent p-2 caret-violet-500 selection:bg-violet-400 focus:border-violet-400 focus:outline-none dark:caret-orange-400  dark:selection:bg-orange-300 dark:selection:text-bgDark-900  dark:focus:border-bgLight-200 ${
        (isSmall || isEmpty) & !isInitial ? "border-red-500 delay-75" : null
      } ${
        (!isSmall && !isEmpty) & !isInitial ? "border-green-500 delay-75" : null
      }`}
    />
  );
});

export default TextArea;
