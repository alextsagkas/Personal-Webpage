function MessageFailure({ isInitial, isEmpty, isSmall }) {
  const failure = !isInitial && (isEmpty || isSmall);

  var errorText = "";

  if (isEmpty) {
    errorText = "Message is empty";
  }

  if (!isEmpty && isSmall) {
    errorText = "Message is small";
  }

  return failure ? (
    <div className="mt-[2px] text-sm text-failure-500">{errorText}</div>
  ) : null;
}

export default MessageFailure;
