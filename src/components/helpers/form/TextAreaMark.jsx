import { Tick, Cross } from "../../icons/Icons";

function TextAreaMark({ failure, success }) {
  if (success) {
    return (
      <div className="absolute w-11/12 max-w-5xl -translate-x-[1rem] md:w-8/12">
        <div className="absolute right-7 -top-[2.5rem] scale-105 text-success-500">
          <Tick />
        </div>
      </div>
    );
  }

  if (failure) {
    return (
      <div className="absolute w-11/12 max-w-5xl -translate-x-[1rem] md:w-8/12">
        <div className="absolute right-7 -top-[2.5rem] scale-105 bg-bgLight-50 text-failure-500 dark:bg-bgDark-900">
          <Cross />
        </div>
      </div>
    );
  }
}

export default TextAreaMark;
