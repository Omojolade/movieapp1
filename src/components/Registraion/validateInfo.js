export default function validateInfo(values) {
  const errors = {};

  Object.entries(values).forEach(([key, value]) => {
    let field = "";

    if (!value.trim()) {
      switch (key) {
        case "username":
          field = "User name required";
          break;

        case "email":
          field = "Email required";
          break;

        case "password":
          field = "Password is required";
          break;

        default:
          break;
      }
      errors[key] = field;
    }

    if (key === "email" && value) {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const correctEmailAddress = emailRegex.test(value.toLowerCase().trim());
      field = "Email address is invalid";
      if (!correctEmailAddress) errors[key] = field;
    }

    if (key === "password" && value) {
      field = "Password needs to be 6 characters or more";
      if (value.length < 6) errors[key] = field;
    }
  });

  return Object.keys(errors).length ? errors : false;
}
