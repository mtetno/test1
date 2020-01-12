export default {
  PRICE_PATTERN: /^\d+(?:[.,]\d+)*$/,
  EMAIL_PATTERN: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
  PASSWORD_PATTERN:/^.{6,100}$/,
  ONLY_LETTERS_PATTERN:/^[a-zA-Z]{1,50}$/,
  NO_FUTURE_DATE:'no future date',
  VALID_PHONE_NO:/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
  ALPHANUMERIC_PATTERN:/^[a-zA-Z0-9_]*$/,
  ONLY_NUMBER_PATTERN:/\d/,
};
