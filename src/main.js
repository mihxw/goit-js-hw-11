import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api.js';

export const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  searchButton: document.querySelector('.button'),  // Кнопка для пошуку
};

refs.searchButton.addEventListener('click', handleSearch);  // Слухаємо натискання на кнопку

function handleSearch(event) {
  event.preventDefault();  // Запобігаємо стандартній поведінці кнопки

  const inputValue = refs.form.elements.state.value.trim();

  refs.gallery.innerHTML = '';  // Очищаємо галерею перед пошуком

  // Перевірка, чи введено значення
  if (!inputValue) {
    iziToast.error({
      message: 'Please enter your request',
      position: 'topRight',
    });
    return;
  }

  // Виконуємо запит на пошук
  fetchImages(inputValue)
    .then(data => {
      // Якщо запит успішний, можна додати елементи в галерею
      // Пропускаємо це для прикладу
    })
    .catch(error => {
      // Якщо виникла помилка, виводимо повідомлення
      iziToast.error({
        message: 'Error fetching images. Please try again later.',
        position: 'topRight',
      });
      console.error(error);
    });

  refs.form.reset();  // Очищаємо форму після пошуку
}