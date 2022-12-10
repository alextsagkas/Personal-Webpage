import NameFailure from "./NameFailure";
import InputMark from "./InputMark";

const NameInput = ({ name, text, isInitial, validation, setName }) => {
  const { nameIsInitial, isEmpty, isSmall, isBig, isOkay } = validation;

  const failure = (!isInitial || !nameIsInitial) && !isOkay;
  const success = (!isInitial || !nameIsInitial) && isOkay;

  return (
    <div>
      <input
        type="text"
        name={"name"}
        placeholder={text}
        value={name}
        onChange={(event) => setName(event.target.value)}
        className={`w-full rounded-md border-2 border-bgDark-300 bg-transparent pt-2 pb-2 pl-2 pr-10 caret-violet-500 selection:bg-violet-400 focus:outline-none dark:caret-orange-400 dark:selection:bg-orange-300 dark:selection:text-bgDark-900 ${
          failure ? "border-failure-500 " : null
        } 
      ${success ? "border-success-500" : null} ${
          !failure && !success
            ? "focus:border-violet-400 dark:focus:border-bgLight-200"
            : null
        }`}
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
};

export default NameInput;
