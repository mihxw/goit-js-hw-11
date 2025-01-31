import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api.js';

export const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
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

  // Показуємо лоадер
  refs.loader.classList.remove('is-hidden');

  // Виконуємо запит на пошук
  fetchImages(inputValue)
    .then(data => {
      // Якщо запит успішний, можна додати елементи в галерею
      // В даному випадку ми це пропускаємо, бо ви не надали код для додавання зображень
    })
    .catch(error => {
      // Якщо виникла помилка, ховаємо лоадер та виводимо повідомлення
      refs.loader.classList.add('is-hidden');
      iziToast.error({
        message: 'Error fetching images. Please try again later.',
        position: 'topRight',
      });
      console.error(error);
    })
    .finally(() => {
      // Оскільки це фінальний етап, ми все одно ховаємо лоадер, навіть якщо все пройшло успішно
      refs.loader.classList.add('is-hidden');
    });

  refs.form.reset();  // Очищаємо форму після пошуку
}