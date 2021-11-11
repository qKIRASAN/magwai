const EVENTS_CLASS = `events`;
const EVENTS_LIST_CLASS = `events__list`;
const EVENT_ACTIVE_CLASS = `event--active`;
const EVENT_REQUEST_CLASS = `event__request`;
const SLIDER_CLASS = `slider`;
const SLIDER_REQUEST_CLASS = `slider__request`;
const SLIDES_CLASS = `slider__list`;
const SLIDE_CLASS = `slider__item`;
const SLIDE_ACTIVE_CLASS = `slider__item--active`;
const TOGGLES_BASE_CLASS = `toggles`;
const TOGGLES_CLASS = `slider__toggles`;
const TOGGLE_CLASS = `slider__toggle`;
const TOGGLE_ACTIVE_CLASS = `slider__toggle--active`;

const slider = document.querySelector(`.${EVENTS_CLASS}`);
let currentIndex = 0;
let currentTransform = 0;

(function init() {
  if (slider) {
    const requestButtons = slider.querySelectorAll(`.${EVENT_REQUEST_CLASS}`);
    const slidesContainer = slider.querySelector(`.${EVENTS_LIST_CLASS}`);
    const slides = Array.from(slidesContainer.children);
    const togglesContainer = slider.querySelector(`.${TOGGLES_BASE_CLASS}`);
    const toggles = Array.from(togglesContainer.children);

    if (requestButtons) {
      requestButtons.forEach((request) => {
        request.classList.add(SLIDER_REQUEST_CLASS);
      });
    }

    if (slides) {
      slides.forEach((slide, i) => {
        slide.classList.remove(EVENT_ACTIVE_CLASS);
        slide.classList.add(SLIDE_CLASS);
        slide.dataset.index = i.toString();
      });
      slides[0].classList.add(SLIDE_ACTIVE_CLASS);
    }

    if (slidesContainer) {
      slidesContainer.classList.add(SLIDES_CLASS);
    }

    if (toggles) {
      toggles.forEach((toggle, i) => {
        toggle.classList.add(TOGGLE_CLASS);
        toggle.dataset.showSlide = i.toString();
      });
      toggles[0].classList.add(TOGGLE_ACTIVE_CLASS);
    }

    if (togglesContainer) {
      togglesContainer.classList.add(TOGGLES_CLASS);
      togglesContainer.addEventListener(`click`, changeSlide);
    }

    slider.classList.add(SLIDER_CLASS);
  }
})();

function changeSlide(evt) {
  const toggle = evt.target.closest(`.${TOGGLE_CLASS}`);
  if (!toggle) {
    return;
  }

  const slidesContainer = slider.querySelector(`.${SLIDES_CLASS}`);
  currentIndex = parseInt(toggle.dataset.showSlide);
  currentTransform = setTransform(currentIndex);

  slidesContainer.style.transform = `translateY(${currentTransform}%)`;
  setActiveClass();
  evt.preventDefault();
}

function setTransform(i) {
  if (i === 0) {
    return 0;
  } else {
    return -100 * i;
  }
}

function setActiveClass() {
  const slides = slider.querySelectorAll(`.${SLIDE_CLASS}`);
  const toggles = slider.querySelectorAll(`.${TOGGLE_CLASS}`);

  if(slides) {
    slides.forEach((slide) => {
      const index = parseInt(slide.dataset.index);

      if (currentIndex === index) {
        slide.classList.add(SLIDE_ACTIVE_CLASS);
      } else {
        slide.classList.remove(SLIDE_ACTIVE_CLASS)
      }
    });
  }

  if(toggles) {
    toggles.forEach((toggle) => {
      const index = parseInt(toggle.dataset.showSlide);

      if (currentIndex === index) {
        toggle.classList.add(TOGGLE_ACTIVE_CLASS);
      } else {
        toggle.classList.remove(TOGGLE_ACTIVE_CLASS)
      }
    });
  }
}
