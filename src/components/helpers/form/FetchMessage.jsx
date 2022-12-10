function FetchMessage({ success, pending, buttonPressed, isInitial }) {
  if (!isInitial) {
    if (pending) {
      return <div className="py-3 font-medium">Pending...</div>;
    }

    if (!pending && success) {
      return <div className="py-3 font-medium text-success-500">Success!</div>;
    }

    if (!pending && !success) {
      return (
        <div className="py-3 font-medium text-failure-500">
          Please try again!
        </div>
      );
    }
  }
}

export default FetchMessage;
