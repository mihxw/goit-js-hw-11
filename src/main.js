import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api.js';

export const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const inputValue = form.elements.state.value.trim();

  refs.gallery.innerHTML = '';

  if (!inputValue) {
    iziToast.error({
      message: 'Please enter your request',
      position: 'topRight',
    });
    return;
  }

  toggleLoader(true);

  fetchImages(inputValue, refs.gallery)
    .catch(error => {
      iziToast.error({
        message: 'Error fetching images. Please try again later.',
        position: 'topRight',
      });
      console.error(error);
    })
    .finally(() => {
      toggleLoader(false);
    });

  refs.form.reset();
}

function toggleLoader(isVisible) {
  refs.loader.classList.toggle('is-hidden', !isVisible);
}