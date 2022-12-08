function NameFailure({ isInitial, isEmpty, isSmall }) {
  const failure = !isInitial && (isEmpty || isSmall);

  var errorText = "";

  if (isEmpty) {
    errorText = "Name is empty";
  }

  if (!isEmpty && isSmall) {
    errorText = "Name is small";
  }

  return failure ? (
    <div className="ml- mt-2 text-sm text-failure-500">{errorText}</div>
  ) : null;
}

export default NameFailure;
