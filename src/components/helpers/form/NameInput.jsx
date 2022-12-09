import { forwardRef } from "react";

import NameFailure from "./NameFailure";
import InputMark from "./InputMark";

const NameInput = forwardRef(({ text, validation }, ref) => {
  const { isInitial, isEmpty, isSmall, isBig, isOkay } = validation;

  const failure = !isInitial && !isOkay;
  const success = !isInitial && isOkay;

  return (
    <div>
      <input
        ref={ref}
        type="text"
        name={"name"}
        placeholder={text}
        className={`w-full rounded-md border-2 border-bgDark-300 bg-transparent pt-2 pb-2 pl-2 pr-10 caret-violet-500 selection:bg-violet-400 focus:border-violet-400 focus:outline-none dark:caret-orange-400 dark:selection:bg-orange-300 dark:selection:text-bgDark-900 dark:focus:border-bgLight-200 ${
          failure ? "border-failure-500 " : null
        } 
      ${success ? "border-success-500" : null}`}
      />
      <InputMark success={success} failure={failure} />
      <NameFailure
        isEmpty={isEmpty}
        isSmall={isSmall}
        isBig={isBig}
        failure={failure}
      />
    </div>
  );
});

export default NameInput;
