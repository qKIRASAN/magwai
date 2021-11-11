import {createFocusArea} from './focus-area.js';
import {lockScroll,unlockScroll} from './scroll-lock.js';
import {isEscEvent} from './utils.js';
import {focus, blur, validate, submitForm} from './form.js';
import {createPhoneMask} from './phone-mask.js';

const BODY = `body`;
const POPUP = `popup`;
const FORM_FIELDS = `input, textarea`;
const FORM_CLASS = `form`;
const BURGER_BASE_CLASS = `burger`;
const REQUEST_CONTACTS_CLASS = `contacts__request`;
const REQUEST_EVENT_CLASS = `event__request`;

document.addEventListener('DOMContentLoaded', () => {
  const requestButtons = document.querySelectorAll(`.${REQUEST_CONTACTS_CLASS}, .${REQUEST_EVENT_CLASS}`);

  if (requestButtons) {
    requestButtons.forEach((requestButton) => init(requestButton));
  }
});

function init(requestButton) {
  requestButton.addEventListener(`click`, showPopup);

  function showPopup(evt) {
    createPopup();
    evt.preventDefault();
  }

  function createPopup() {
    const body = document.querySelector(BODY);
    const template = document.querySelector(`#${POPUP}`).content.querySelector(`.${POPUP}`);
    const popup = template.cloneNode(true);
    const form = popup.querySelector(`.${FORM_CLASS}`);
    const formFields = popup.querySelectorAll(FORM_FIELDS);
    const closeButton = popup.querySelector(`.${BURGER_BASE_CLASS}`);
    const popupFocusArea = createFocusArea(popup);
    const phoneMask = createPhoneMask(popup);

    body.appendChild(popup);
    popupFocusArea.lock();
    lockScroll();
    phoneMask.init();

    if (formFields) {
      for (let i = 0; i < formFields.length; i++) {
        formFields[i].addEventListener(`focus`, focus);
        formFields[i].addEventListener(`blur`, blur);
        formFields[i].addEventListener(`keyup`, validate);

        formFields[0].focus();
      }
    }

    form.addEventListener(`submit`, submitForm);
    popup.addEventListener(`keydown`, hidePopup);
    closeButton.addEventListener(`click`, hidePopup);
  }

  function hidePopup(evt) {
    const popup = document.querySelector(`.${POPUP}`);

    if (isEscEvent(evt) || evt.type === `click`) {
      popup.remove();
      unlockScroll();
      requestButton.focus();
    }
  }
}
