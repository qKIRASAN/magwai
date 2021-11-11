import {createFocusArea} from './focus-area.js';
import {lockScroll, unlockScroll} from './scroll-lock.js';
import {isEscEvent} from './utils.js';

const LOGO_CLASS = `logo`;
const HEADER_CLASS = `header`;
const HEADER_FIXED_CLASS = `header--fixed`;
const HEADER_LOGO_CLASS = `header__logo`;
const HEADER_LOGO_NOJS_CLASS = `header__logo--no-js`;
const BURGER_BASE_CLASS = `burger`;
const BURGER_BUTTON_CLASS = `burger--button-burger`;
const BURGER_CROSS_CLASS = `burger--button-cross`;
const NAVLIST_CLASS = `nav__list`;
const NAVLIST_OPEN_CLASS = `nav__list--open`;
const NAVLINK_CLASS = `nav__link`;
const CONTACTS_CLASS = `contacts`;
const CONTACTS_VISIBLE_CLASS = `contacts--visible`;
const ARIA_LABEL_ATTRIBUTE = `aria-label`;
const ARIA_EXPANDED_ATTRIBUTE = `aria-expanded`;
const VALUE_SHOW = `показать меню`;
const VALUE_HIDE = `закрыть меню`;

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector(`.${HEADER_CLASS}`);
  const logo = header.querySelector(`.${LOGO_CLASS}`);
  const burgerButton = header.querySelector(`.${BURGER_BASE_CLASS}`);
  const navList = header.querySelector(`.${NAVLIST_CLASS}`);
  const contacts = header.querySelector(`.${CONTACTS_CLASS}`);
  const headerFocusArea = createFocusArea(header);

  function addHandlers() {
    header.addEventListener(`click`, toggleMenu);
    header.addEventListener(`keydown`, hideMenu);
    burgerButton.removeEventListener(`click`, addHandlers);
  }

  function toggleMenu(evt) {
    if (evt.target.closest(`.${BURGER_BASE_CLASS}`) ||
      evt.target.closest(`.${HEADER_LOGO_CLASS}`) ||
      evt.target.closest(`.${NAVLINK_CLASS}`))
    {
      header.classList.toggle(HEADER_FIXED_CLASS);
      navList.classList.toggle(NAVLIST_OPEN_CLASS);
      contacts.classList.toggle(CONTACTS_VISIBLE_CLASS);
      burgerButton.classList.toggle(BURGER_BUTTON_CLASS);
      burgerButton.classList.toggle(BURGER_CROSS_CLASS);

      if (burgerButton.classList.contains(BURGER_CROSS_CLASS)) {
        lockScroll();
        headerFocusArea.lock();

        burgerButton.setAttribute(ARIA_LABEL_ATTRIBUTE, VALUE_HIDE);
        burgerButton.setAttribute(ARIA_EXPANDED_ATTRIBUTE, true);
      } else {
        unlockScroll();
        headerFocusArea.unlock();

        burgerButton.setAttribute(ARIA_LABEL_ATTRIBUTE, VALUE_SHOW);
        burgerButton.setAttribute(ARIA_EXPANDED_ATTRIBUTE, false);

        burgerButton.addEventListener(`click`, addHandlers);
        header.removeEventListener(`click`, toggleMenu);
        header.removeEventListener(`keydown`, hideMenu);
      }
    }
  }

  function hideMenu(evt) {
    if (isEscEvent(evt)) {
      header.classList.remove(HEADER_FIXED_CLASS);
      navList.classList.remove(NAVLIST_OPEN_CLASS);
      contacts.classList.remove(CONTACTS_VISIBLE_CLASS);
      burgerButton.classList.remove(BURGER_CROSS_CLASS);
      burgerButton.classList.add(BURGER_BUTTON_CLASS);

      if (burgerButton.classList.contains(BURGER_CROSS_CLASS)) {
        burgerButton.setAttribute(ARIA_LABEL_ATTRIBUTE, VALUE_HIDE);
        burgerButton.setAttribute(ARIA_EXPANDED_ATTRIBUTE, true);
      } else {
        burgerButton.setAttribute(ARIA_LABEL_ATTRIBUTE, VALUE_SHOW);
        burgerButton.setAttribute(ARIA_EXPANDED_ATTRIBUTE, false);
      }

      unlockScroll();
      headerFocusArea.unlock();

      burgerButton.addEventListener(`click`, addHandlers);
      header.removeEventListener(`click`, toggleMenu);
      header.removeEventListener(`keydown`, hideMenu);
    }
  }

  (function init() {
    burgerButton.classList.add(BURGER_BUTTON_CLASS);
    logo.classList.remove(HEADER_LOGO_NOJS_CLASS);
    navList.classList.remove(NAVLIST_OPEN_CLASS);
    contacts.classList.remove(CONTACTS_VISIBLE_CLASS);

    burgerButton.addEventListener(`click`, addHandlers);
  })();
});
