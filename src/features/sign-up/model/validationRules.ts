export const EMAIL_REGEX = new RegExp(/^\S+@\S+\.\S+$/);

export const PASSWORD_REGEX = {
    lowerCase: /[a-z]/,
    upperCase: /[A-Z]/,
    number: /\d/,
    specialChar: /[#?!@$%^&*-]/,
};

export const MIN_PASSWORD = 6;
export const MAX_PASSWORD = 32;

