import { forwardRef } from "react";

const TextArea = forwardRef(({ text }, ref) => {
  return (
    <textarea
      ref={ref}
      name={text}
      placeholder={text}
      rows="10"
      className="resize-none rounded-md border-2 border-bgDark-300 bg-transparent p-2 caret-violet-500 selection:bg-violet-400 focus:border-violet-400 focus:outline-none dark:caret-orange-400  dark:selection:bg-orange-300 dark:selection:text-bgDark-900  dark:focus:border-bgLight-200"
      required
    />
  );
});

export default TextArea;
