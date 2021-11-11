import {createStorage} from './store.js';
import {sendData} from './api.js';
import {showErrorMessage, showSuccessMessage} from './message.js';

const PLACEHOLDER = `placeholder`;
const USER_NAME = `user-name`;
const USER_EMAIL = `user-email`;
const USER_PHONE = `user-phone`;
const USER_MESSAGE = `user-message`;
const FORM = `form`;
const FORM_FIELD_CLASS = `form__field`;
const FORM_FIELD_INVALID_CLASS = `form__field--invalid`;
const FORM_FIELDS = `input, textarea`;

const store = createStorage();

const validityState = {
  name: false,
  email: false,
  phone: true,
  message: false
};

function checkValidityState() {
  return Object.values(validityState).every((value) => {
    return value === true;
  });
}

export function submitForm(evt) {
  const isValid = checkValidityState();
  const form = evt.target;
  const formData = new FormData(form);
  const formFieldContainers = form.querySelectorAll(`.${FORM_FIELD_CLASS}`);
  const formFields = form.querySelectorAll(FORM_FIELDS);

  if (isValid) {
    sendData(showSuccessMessage, showErrorMessage, formData);
  } else {
    for (let i = 0, j = 0; i < formFieldContainers.length, j < formFields.length; i++, j++) {
      const isEmpty = formFields[j].value === ``;
      const typeTel = formFields[j].type === `tel`;

      if (isEmpty && !typeTel) {
        formFieldContainers[i].classList.add(FORM_FIELD_INVALID_CLASS);
      }
    }
  }

  evt.preventDefault();
}

export function focus(evt) {
  const formField = evt.target;
  const formFieldContainer = evt.target.closest(`.${FORM_FIELD_CLASS}`);

  store.save(PLACEHOLDER, formField.placeholder);
  formField.focus();
  formField.placeholder = '';

  if (formFieldContainer.classList.contains(FORM_FIELD_INVALID_CLASS)) {
    formFieldContainer.classList.remove(FORM_FIELD_INVALID_CLASS);
  }
}

export function blur(evt) {
  const formField = evt.target;

  formField.blur();
  formField.placeholder = store.get(PLACEHOLDER);
  validate(evt);
}

export function validate(evt) {
  const formField = evt.target;
  const formFieldContainer = formField.closest(`.${FORM_FIELD_CLASS}`);
  const form = formField.closest(`.${FORM}`);

  if (formField.name === USER_NAME) {
    validityState.name = checkName(formField.value);
    if (!validityState.name) {
      formFieldContainer.classList.add(FORM_FIELD_INVALID_CLASS);
    } else {
      formFieldContainer.classList.remove(FORM_FIELD_INVALID_CLASS);
    }
  }

  if (formField.name === USER_EMAIL) {
    validityState.email = checkEmail(formField.value);
    if (!validityState.email) {
      formFieldContainer.classList.add(FORM_FIELD_INVALID_CLASS);
    } else {
      formFieldContainer.classList.remove(FORM_FIELD_INVALID_CLASS);
    }
  }

  if (formField.name === USER_PHONE) {
    validityState.phone = checkPhone(formField.value);
    if (!validityState.phone) {
      formFieldContainer.classList.add(FORM_FIELD_INVALID_CLASS);
    } else {
      formFieldContainer.classList.remove(FORM_FIELD_INVALID_CLASS);
    }
  }

  if (formField.name === USER_MESSAGE) {
    validityState.message = checkMessage(formField.value);
    if (!validityState.message) {
      formFieldContainer.classList.add(FORM_FIELD_INVALID_CLASS);
    } else {
      formFieldContainer.classList.remove(FORM_FIELD_INVALID_CLASS);
    }
  }

  form.noValidate = true;
}

function checkName(value) {
  const regExpName = /^[A-ZА-Я][A-ZА-Я\s]*[A-ZА-Я]$/i;

  return regExpName.test(value);
}

function checkEmail(value) {
  const regExpEmail = /^[A-Z0-9.,_%+\-!?]{2,20}@(?:[A-Z0-9-]{1,20}\.){1,3}[A-Z]{2,20}$/i;

  return regExpEmail.test(value);
}

function checkPhone(value) {
  const regExpPhone = /[0-9+\s()-]{18}/;

  if (value === '') {
    return true;
  }

  return regExpPhone.test(value);
}

function checkMessage(value) {
  const regExpMessage = /[A-ZА-Я\s().,!?]+/i;

  return regExpMessage.test(value);
}
