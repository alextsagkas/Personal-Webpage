import EmailFailure from "./EmailFailure";
import InputMark from "./InputMark";

const EmailInput = ({ email, text, setEmail, isInitial, validation }) => {
  const { emailIsInitial, isEmpty, containsAt, endsWithDotCom, isBig, isOkay } =
    validation;

  const failure = (!isInitial || !emailIsInitial) & !isOkay;
  const success = (!isInitial || !emailIsInitial) & isOkay;

  return (
    <div>
      <input
        type="text"
        name={"email"}
        placeholder={text}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className={`w-full rounded-md border-2 border-bgDark-300 bg-transparent pt-2 pb-2 pl-2 pr-10 caret-violet-500 selection:bg-violet-400 focus:outline-none dark:caret-orange-400 dark:selection:bg-orange-300 dark:selection:text-bgDark-900 ${
          failure ? "border-failure-500" : null
        } ${success ? "border-success-500" : null} ${
          !failure && !success
            ? "focus:border-violet-400 dark:focus:border-bgLight-200"
            : null
        }`}
      />
      <InputMark failure={failure} success={success} />
      <EmailFailure
        isEmpty={isEmpty}
        containsAt={containsAt}
        endsWithDotCom={endsWithDotCom}
        isBig={isBig}
        failure={failure}
      />
    </div>
  );
};

export default EmailInput;
