function MessageFailure({ isInitial, isEmpty, isSmall, isBig }) {
  const failure = !isInitial && (isEmpty || isSmall || isBig);

  var errorText = "";

  if (isEmpty) {
    errorText = "Message is empty";
  }

  if (!isEmpty && isSmall) {
    errorText = "Message is small";
  }

  if (!isEmpty && isBig) {
    errorText = "Message is extensive";
  }

  return failure ? (
    <div className="mt-[2px] text-sm text-failure-500">{errorText}</div>
  ) : null;
}

export default MessageFailure;
