function SubmitButton({ disableButton }) {
  return (
    <button
      disabled={disableButton}
      type="submit"
      className={`w-max rounded-md bg-gradient-to-r from-blue-500 to-violet-400 px-8 py-3 text-center text-base font-medium text-white dark:to-orange-400  ${
        disableButton
          ? "opacity-75 focus:outline-none dark:to-orange-400"
          : "transition duration-300 ease-in-out hover:scale-105 hover:from-blue-500 hover:to-violet-500  focus:outline-bgDark-900 hover:dark:to-orange-500 dark:focus:outline-white"
      }`}
    >
      Send
    </button>
  );
}

export default SubmitButton;
