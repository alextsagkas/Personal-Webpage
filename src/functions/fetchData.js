export const fetchData = async (name, email, message) => {
  var success = false;
  const formData = new FormData();

  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);

  try {
    const response = await fetch(
      `https://getform.io/f/${import.meta.env.VITE_API_KEY}`,
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    const responseData = await response.json();
    success = responseData.success;
  } catch (error) {
    success = false;
  }

  return success;
};
