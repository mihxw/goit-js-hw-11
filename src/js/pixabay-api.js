import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { handleSuccess } from './render-function.js';
import { refs } from '../main.js';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '48226781-c314bf294542f2e13595e23de';

export function fetchImages(value) {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=30`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      const markup = handleSuccess(data.hits);
      refs.gallery.insertAdjacentHTML('beforeend', markup);

      const library = new SimpleLightbox('.gallery a', {
        captionDelay: 300,
        captionsData: 'alt',
      });

      library.refresh();
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
}