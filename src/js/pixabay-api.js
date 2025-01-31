import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { handleSuccess } from './render-function.js';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '48226781-c314bf294542f2e13595e23de';
const PER_PAGE = 15;

const refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('.input'),
  loader: document.querySelector('.loader'),
  gallery: document.querySelector('.gallery'),
};

refs.form.addEventListener('submit', handleSubmit);

async function fetchImages(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: PER_PAGE,
      },
    });

    const data = response.data;

    if (data.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    renderImages(data.hits);
  } catch (error) {
    iziToast.error({
      message: 'Error fetching images. Please try again later.',
      position: 'topRight',
    });
    throw error;
  }
}

function renderImages(images) {
  const markup = handleSuccess(images);
  refs.gallery.insertAdjacentHTML('beforeend', markup);

  const library = new SimpleLightbox('.gallery a', {
    captionDelay: 300,
    captionsData: 'alt',
  });

  library.refresh();
}

function handleSubmit(event) {
  event.preventDefault();
  const query = refs.input.value.trim();
  refs.gallery.innerHTML = '';

  if (!query) {
    iziToast.error({
      message: 'Please enter your request',
      position: 'topRight',
    });
    return;
  }

  toggleLoader(true);

  fetchImages(query)
    .catch(error => {
      iziToast.error({
        message: 'Error fetching images. Please try again later.',
        position: 'topRight',
      });
      console.error(error);
    })
    .finally(() => toggleLoader(false));

  refs.form.reset();
}

function toggleLoader(isVisible) {
  refs.loader.classList.toggle('is-hidden', !isVisible);
}