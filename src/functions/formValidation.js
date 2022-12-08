export const checkName = (name) => {
  var isEmpty = true;
  var isSmall = true;

  if (name != undefined) {
    const text = name.trim(name);

    console.log("text: ", text);

    if (text.length > 0) {
      isEmpty = false;

      if (text.length < 2) {
        isSmall = true;
      } else {
        isSmall = false;
      }
    }

    return { isEmpty, isSmall };
  }
};

export const checkEmail = (email) => {
  var isEmpty = true;
  var containsAt = false;
  var endsWithDotCom = false;
  var isBig = false;

  if (email != undefined) {
    const text = email.trim(email);

    if (text.length > 0) {
      isEmpty = false;
    }

    if (text.includes("@")) {
      containsAt = true;
    }

    if (text.endsWith(".com")) {
      endsWithDotCom = true;
    }

    if (text.length > 320) {
      isBig = true;
    } else {
      isBig = false;
    }
  }
  return { isEmpty, containsAt, endsWithDotCom, isBig };
};

export const checkMessage = (message) => {
  var isEmpty = true;
  var isSmall = true;
  var isBig = false;

  if (message != undefined) {
    const text = message.trim(message);

    if (text.length > 0) {
      isEmpty = false;

      if (text.length < 20) {
        isSmall = true;
      } else {
        isSmall = false;
      }

      if (text.length > 400) {
        isBig = true;
      } else {
        isBig = false;
      }
    }
  }

  return { isEmpty, isSmall, isBig };
};
