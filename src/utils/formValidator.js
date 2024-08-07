export const emailValidator = {
  required: "Please enter your email",
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Please enter a valid email address",
  },
};

export const passwordValidator = {
  required: "Please enter your password",
  pattern: {
    value:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    //Example Password:StrongPassword123!
    message:
      "Password must include lowercase, uppercase, digit, special character, and be at least 8 characters.",
  },
};

export const confirmPasswordValidator = {
  required: "Please confirm your password",
  validate: (value) =>
    value === "" ? "Please confirm your password" : undefined,
};

export const nameValidator = {
  required: "Please enter your name",
  pattern: {
    value: /^[a-zA-Z\s]+$/,
    message: "Please enter a valid name",
  },
  minLength: {
    value: 4,
    message: "Name must be greater than 3 characters",
  },
};

export const textFieldValidator = {
  required: "This field is required",
  minLength: {
    value: 20,
    message: "Company description must be at least 20 characters",
  },
};

export const commentValidator = {
  required: "This field is required",
  minLength: {
    value: 5,
    message: "Comment must be at least 5 characters",
  },
};


export const numberValidator = {
  required: "This field is required",
  pattern: {
    value: /^\d+$/,
    message: "Numbers only, don't include signs(#,$,€,¥)",
  },
};
