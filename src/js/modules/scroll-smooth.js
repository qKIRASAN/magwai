const EVENT_LINK_CLASS = `event__link`;

const links = document.querySelectorAll(`.${EVENT_LINK_CLASS}`);

if (links) {
  links.forEach((link) => link.addEventListener(`click`, scrollPage));
}

function scrollPage(evt) {
  if (!evt.currentTarget.hasAttribute(`href`)) {
    return;
  }

  evt.preventDefault();
  scrollSmooth(evt.currentTarget.hash);
}

function scrollSmooth(hash) {
  const element = document.querySelector(hash);

  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: `smooth`,
    });
  }
}
