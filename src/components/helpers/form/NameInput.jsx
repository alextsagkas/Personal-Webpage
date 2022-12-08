import { forwardRef } from "react";

import NameFailure from "./NameFailure";
import InputMark from "./InputMark";

const NameInput = forwardRef(({ text, validation }, ref) => {
  const { isInitial, isEmpty, isSmall, isBig } = validation;

  const failure = (isSmall || isEmpty || isBig) & !isInitial;
  const success = (!isSmall && !isEmpty && !isBig) & !isInitial;

  return (
    <div>
      <input
        ref={ref}
        type="text"
        name={text.toLowerCase()}
        placeholder={text}
        className={`w-full rounded-md border-2 border-bgDark-300 bg-transparent p-2 caret-violet-500 selection:bg-violet-400 focus:border-violet-400 focus:outline-none dark:caret-orange-400 dark:selection:bg-orange-300 dark:selection:text-bgDark-900 dark:focus:border-bgLight-200 ${
          failure ? "border-failure-500 " : null
        } 
      ${success ? "border-success-500" : null}`}
      />
      <InputMark failure={failure} success={success} />
      <NameFailure
        isInitial={isInitial}
        isEmpty={isEmpty}
        isSmall={isSmall}
        isBig={isBig}
      />
    </div>
  );
});

export default NameInput;
