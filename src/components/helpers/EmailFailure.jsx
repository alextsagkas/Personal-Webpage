function EmailFailure({ isInitial, isEmpty, containsAt, endsWithDotCom }) {
  const failure = !isInitial && (isEmpty || !containsAt || !endsWithDotCom);

  var errorText = "";

  if (isEmpty) {
    errorText = "Email is empty";
  }

  if (!isEmpty && !containsAt) {
    errorText = 'Email does not contain "@" sign';
  }

  if (!isEmpty && !endsWithDotCom) {
    errorText = 'Email does not end with ".com"';
  }

  if (!isEmpty && !containsAt && !endsWithDotCom) {
    errorText = 'Email does not contain "@" sign or end with ".com"';
  }

  return failure ? (
    <div className="mt-2 text-sm text-failure-500">{errorText}</div>
  ) : null;
}

export default EmailFailure;
