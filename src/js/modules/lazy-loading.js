import {getData} from './api.js';
import {showWarningMessage} from './message.js'

const REQUEST = `request`;
const POST_REQUEST_CLASS = `posts__request`;
const POST_INNER_CLASS = `posts__inner`;
const POST_POSITION = `beforeend`;
const COUNT = 6;
const INITIAL_COUNT = 10;

let storage = [];
let indexFrom = 0;
let indexTo = COUNT;

const postsContainer = document.querySelector(`.${POST_INNER_CLASS}`);

function loadPosts() {
  renderPosts(storage);
}

function renderPosts(data, isInitialLoading) {
  if (isInitialLoading) {
    indexTo = INITIAL_COUNT;
  }

  const posts = data.slice(indexFrom, indexTo);

  posts.forEach((post) => {
    const {
      img,
      alt,
      title,
      lead,
      description,
      author,
      datetime,
      date
    } = post;

    const template = `
      <article class="post">
        <picture>
          <source type="image/webp"
            srcset="${img}.webp 1x, ${img}@2x.webp 2x"
          >
          <!-- 1х: 320px; 2x: 640px -->
          <img src="${img}.jpg"
            srcset="${img}@2x.jpg 2x"
            width="320"
            height="185"
            alt="${alt}"
          >
        </picture>
        <div lang="en" class="post__content">
          <div class="post__title">
            <h3>${title}</h3>
            <p>${lead}</p>
          </div>
          <p>${description}</p>
          <div class="post__bottom">
            <p>Posted by
              <a class="post__author" href="#">
                <b>${author}</b>
              </a>, on
              <time datetime="${datetime}">${date}</time>
            </p>
            <a class="post__link" href="#">Continue reading</a>
          </div>
        </div>
      </article>
    `;

    postsContainer.insertAdjacentHTML(POST_POSITION, template);
  });

  indexFrom += (isInitialLoading) ? INITIAL_COUNT : COUNT;

  if (indexTo >= data.length) {
    indexTo = data.length;
  } else {
    indexTo += COUNT;
  }
}

function loadData(data) {
  storage = data.posts;
  postsContainer.innerHTML = ``;
  renderPosts(storage, true);
}

function showWarning() {
  showWarningMessage();
}

document.addEventListener('DOMContentLoaded', () => {
  (function init() {
    const requestButton = document.querySelector(`#${REQUEST}`);

    requestButton.classList.add(POST_REQUEST_CLASS);
    requestButton.addEventListener(`click`, loadPosts);
  })();

  getData(loadData, showWarning);
});
