export const checkName = (name) => {
  var isEmpty = true;
  var isSmall = false;

  if (name != undefined) {
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
  var isEmpty = true;
  var containsAt = false;
  var endsWithDotCom = false;

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
  }
  return { isEmpty, containsAt, endsWithDotCom };
};
