import {lockScroll, unlockScroll} from './scroll-lock.js';
import {createFocusArea} from './focus-area.js';
import {isEscEvent} from './utils.js';

const BODY = `body`;
const SUCCESS = `success`;
const FAIL = `error`;
const WARNING = `warning`;
const POPUP_CLASS = `popup`;
const MESSAGE_CLASS = `message`;
const DELAY = 850;

const body = document.querySelector(BODY);
const successMessageTemplate = document.querySelector(`#${SUCCESS}`).content.querySelector(`.${MESSAGE_CLASS}`);
const failMessageTemplate = document.querySelector(`#${FAIL}`).content.querySelector(`.${MESSAGE_CLASS}`);
const warningMessageTemplate = document.querySelector(`#${WARNING}`).content.querySelector(`.${MESSAGE_CLASS}`);

function createMessage(template) {
  const popup = document.querySelector(`.${POPUP_CLASS}`);
  const message = template.cloneNode(true);
  const messageFocusArea = createFocusArea(message);

  body.appendChild(message);
  messageFocusArea.lock();
  lockScroll();

  message.tabIndex = -1;
  message.focus();
  message.addEventListener(`keydown`, hideMessage);
  message.addEventListener(`click`, hideMessage);

  setTimeout(() => {
    message.remove();
    unlockScroll();
    if (popup) {
      popup.remove();
    }
  }, DELAY);
}

function hideMessage(evt) {
  const popup = document.querySelector(`.${POPUP_CLASS}`);
  const message = evt.currentTarget;

  if (isEscEvent(evt) || evt.type === `click`) {
    message.remove();
    unlockScroll();
    popup.remove();
  }
}

export function showSuccessMessage() {
  createMessage(successMessageTemplate);
}

export function showErrorMessage() {
  createMessage(failMessageTemplate);
}

export function showWarningMessage() {
  createMessage(warningMessageTemplate);
}
