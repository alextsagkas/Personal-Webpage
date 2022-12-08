import { forwardRef } from "react";

import EmailFailure from "./EmailFailure";
import InputMark from "./InputMark";

const EmailInput = forwardRef(({ text, validation }, ref) => {
  const { isInitial, isEmpty, containsAt, endsWithDotCom, isBig } = validation;

  const failure =
    ((!isEmpty && !containsAt) || (!isEmpty && isBig) || !endsWithDotCom) &
    !isInitial;

  const success =
    (!isEmpty && containsAt && endsWithDotCom && !isBig) & !isInitial;

  return (
    <div>
      <input
        ref={ref}
        type="text"
        placeholder={text}
        className={`w-full rounded-md border-2 border-bgDark-300 bg-transparent p-2 caret-violet-500 selection:bg-violet-400 focus:border-violet-400 focus:outline-none dark:caret-orange-400 dark:selection:bg-orange-300 dark:selection:text-bgDark-900 dark:focus:border-bgLight-200 ${
          failure ? "border-failure-500" : null
        } ${success ? "border-success-500" : null}`}
      />
      <InputMark failure={failure} success={success} />
      <EmailFailure
        isInitial={isInitial}
        isEmpty={isEmpty}
        containsAt={containsAt}
        endsWithDotCom={endsWithDotCom}
        isBig={isBig}
      />
    </div>
  );
});

export default EmailInput;
