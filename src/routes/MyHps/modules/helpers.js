function validateUsername (username) {
  let
    isValid = true,
    errors = [];

  if (username === '' || username === undefined) {
    isValid = false;
    errors.push('Username is required.');
  }

  return {
    isValid,
    errors,
  };
}

function validatePassword (password) {
  let
    isValid = true,
    errors = [];

  if (password === '' || password === undefined) {
    isValid = false;
    errors.push('Password is required.');
  }

  return {
    isValid,
    errors,
  };
}

function validate (payload) {
  const
    validationUsername = validateUsername(payload.username),
    validationPassword = validatePassword(payload.password);

  return {
    isValid: validationUsername.isValid && validationPassword.isValid,
    errors: {
      username: validationUsername.errors,
      password: validationPassword.errors,
    },
  };
}

function addInputField (type = 'text', name = '', value = '') {
  let el = document.createElement('input');
  el.setAttribute('type', type);
  el.setAttribute('name', name);
  el.setAttribute('value', value);
  return el;
}

function postForm (payload, signInResult, customerId, action) {
  let f = document.createElement('form');
  f.setAttribute('class', 'hide');
  f.setAttribute('method', 'post');
  f.setAttribute('action', action);

  f.appendChild(addInputField('text', 'accessToken', signInResult.accessToken));
  f.appendChild(addInputField('text', 'refreshToken', signInResult.refreshToken));
  f.appendChild(addInputField('text', 'userId', signInResult.userId));
  f.appendChild(addInputField('text', 'userName', payload.username));
  f.appendChild(addInputField('text', 'loginType', 'ADMIN'));
  f.appendChild(addInputField('text', 'customerId', customerId));

  if (payload.isTemp) {
    f.appendChild(addInputField('text', 'temp', payload.password));
  }

  document.body.appendChild(f);
  f.submit();
}

function postFormLogout (action) {
  let f = document.createElement('form');
  f.setAttribute('class', 'hide');
  f.setAttribute('method', 'post');
  f.setAttribute('action', action);
  f.appendChild(addInputField('text', 'Logout', 'true'));
  document.body.appendChild(f);
  f.submit();
}

export default {
  validateUsername,
  validatePassword,
  validate,
  postForm,
  postFormLogout,
};
