const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { elements } = event.currentTarget;
  const searchQuery = elements.state.value.trim();

  refs.gallery.innerHTML = '';

  if (!searchQuery) {
    showErrorMessage('Please enter a search term');
    return;
  }

  toggleLoaderVisibility(true);

  getImages(searchQuery)
    .catch(error => {
      toggleLoaderVisibility(false);
      showErrorMessage('Unable to fetch images. Try again later.');
      console.error(error);
    })
    .finally(() => {
      toggleLoaderVisibility(false);
    });

  refs.form.reset();
}

function showErrorMessage(message) {
  iziToast.error({
    message: message,
    position: 'topRight',
  });
}

function toggleLoaderVisibility(isVisible) {
  if (isVisible) {
    refs.loader.classList.remove('is-hidden');
  } else {
    refs.loader.classList.add('is-hidden');
  }
}

function getImages(query) {
  // This function would handle the fetching of images from an API
  // Replace this with actual logic for fetching images
}
