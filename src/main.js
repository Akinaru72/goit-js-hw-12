import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('#search-form');
const loader = document.querySelector('#loader');
const galleryContainer = document.querySelector('#gallery');
const loadBtn = document.querySelector('.js-load-btn');
const API_KEY = '48131456-02178b54d24f02562d64ec2d5';

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

let page = 1;
let query = '';

const toggleLoadBtn = isVisible => {
  loadBtn.classList.toggle('hidden', !isVisible);
};

form.addEventListener('submit', async event => {
  event.preventDefault();
  galleryContainer.innerHTML = '';

  query = event.currentTarget.elements.searchQuery.value.trim();
  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
      timeout: 3000,
    });
    form.reset();
    return;
  }

  loader.classList.remove('hidden');
  try {
    page = 1;
    toggleLoadBtn(false);

    const { data } = await fetchImages(query, page, API_KEY);

    if (data.hits.length === 0) {
      iziToast.info({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 3000,
      });
      form.reset();
      return;
    }

    if (data.totalHits > 15) {
      toggleLoadBtn(true);
    }

    const galleryMarkup = renderGallery(data.hits);
    galleryContainer.innerHTML = galleryMarkup;
    lightbox.refresh();
  } catch (err) {
    iziToast.error({
      message: `An error occurred: ${err.message}`,
      position: 'topRight',
      timeout: 3000,
    });
  } finally {
    loader.classList.add('hidden');
  }
});

const loadBtnClick = async () => {
  try {
    page++;
    const { data } = await fetchImages(query, page, API_KEY);

    const galleryMarkup = renderGallery(data.hits);
    galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
    lightbox.refresh();

    if (data.hits.length < 15 || page * 15 >= data.totalHits) {
      toggleLoadBtn(false);
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        timeout: 3000,
      });
    } else {
      window.scrollBy({
        top:
          document
            .querySelector('.gallery')
            .firstElementChild.getBoundingClientRect().height * 2,
        behavior: 'smooth',
      });
    }
  } catch (err) {
    iziToast.error({
      message: `An error occurred while loading images: ${err.message}`,
      position: 'topRight',
      timeout: 3000,
    });
  }
};

loadBtn.addEventListener('click', loadBtnClick);
