export const checkName = (name) => {
  var isEmpty = false;
  var isSmall = false;

  if (name) {
    const text = name.trim(name);

    if (text.length > 0) {
      isEmpty = false;

      if (text.length < 2) {
        isSmall = true;
      }
    }

    return { isEmpty, isSmall };
  }
};

export const checkEmail = (email) => {
  var isEmpty = false;
  var containsAt = false;
  var endsWithDotCom = false;

  if (email) {
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
  }
  return { isEmpty, containsAt, endsWithDotCom };
};
