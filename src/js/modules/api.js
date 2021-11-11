import postsDB from '../../db/db.json'

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function checkStatus(response) {
  const {status, statusText} = response;
  if (!response.ok) {
    throw new Error(`${status} - ${statusText}`);
  }

  return response;
}

export function sendData(onSuccess, onError, body) {
  fetch(API_URL, {
    method: 'POST',
    body
  })
  .then(checkStatus)
  .then(onSuccess)
  .catch(onError);
}

export function getData(onSuccess, onError) {
  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(postsDB),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then(checkStatus)
  .then((response) => response.json())
  .then((data) => onSuccess(data))
  .catch(onError);
}
