import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { handleSuccess } from './render-function.js';
import { refs } from '../main.js';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '48226781-c314bf294542f2e13595e23de';
const PER_PAGE = 15;

export async function fetchImages(query, page = 1) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: PER_PAGE,
        page,
      },
    });

    const data = response.data;

    if (data.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return { hits: [], totalHits: 0 };
    }

    const markup = handleSuccess(data.hits);
    refs.gallery.insertAdjacentHTML('beforeend', markup);

    const library = new SimpleLightbox('.gallery a', {
      captionDelay: 300,
      captionsData: 'alt',
    });

    library.refresh();

    return data;
  } catch (error) {
    console.error('Error fetching images:', error);
    iziToast.error({
      message: 'Error fetching images. Please try again later.',
      position: 'topRight',
    });
    throw error;
  }
}
