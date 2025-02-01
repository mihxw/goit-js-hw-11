import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api.js';
import { handleSuccess } from './js/render-function.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loaderContainer: document.querySelector('.loader-container'),
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

  refs.loaderContainer.classList.remove('is-hidden'); // Показуємо лоадер

  fetchImages(inputValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message: 'No images found. Try another search!',
          position: 'topRight',
        });
        return;
      }

      const markup = handleSuccess(data.hits);
      refs.gallery.insertAdjacentHTML('beforeend', markup);

      const lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 300,
        captionsData: 'alt',
      });

      lightbox.refresh();
    })
    .catch(error => {
      iziToast.error({
        message: 'Error fetching images. Please try again later.',
        position: 'topRight',
      });
      console.error(error);
    })
    .finally(() => {
      refs.loaderContainer.classList.add('is-hidden'); // Ховаємо лоадер після завершення запиту
    });

  refs.form.reset();
}