import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

import { getImagesByQuery } from './js/pixabay-api';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchFormEl = document.querySelector('.form');
const loadMorebtnEl = document.querySelector('.load-more');

const showErrorToast = message => {
  iziToast.error({
    backgroundColor: '#ef4040',
    message,
    position: 'topRight',
    close: true,
    timeout: 2000,
  });
};

let page = 1;
let searchedQuery = '';
const PER_PAGE = 15;

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    searchedQuery = event.currentTarget.elements['search-text'].value.trim();

    if (!searchedQuery) {
      showErrorToast('Field is empty, input again');
      return;
    }

    clearGallery();
    page = 1;
    hideLoadMoreButton();

    showLoader();
    const { data } = await getImagesByQuery(searchedQuery, page);

    if (data.hits.length === 0) {
      showErrorToast(
        'Sorry, there are no images matching <br>your search query. Please try again!'
      );
      clearGallery();
      searchFormEl.reset();
      return;
    }

    createGallery(data.hits);
    if (data.totalHits > PER_PAGE) {
      showLoadMoreButton();
    }

    searchFormEl.reset();
  } catch (err) {
    console.log(err);
  } finally {
    hideLoader();
  }
};

const onClickLoadMoreBtn = async () => {
  try {
    page += 1;
    hideLoadMoreButton();
    showLoader();

    const { data } = await getImagesByQuery(searchedQuery, page);

    createGallery(data.hits);

    if (page * PER_PAGE >= data.totalHits) {
      hideLoadMoreButton();
      showErrorToast(
        "We're sorry, but you've reached the end of search results."
      );
    } else {
      showLoadMoreButton(); // ✅ возвращаем только если есть ещё страницы
    }

    const gallery = document.querySelector('.gallery');
    const { height } = gallery.firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: height * 2,
      behavior: 'smooth',
    });
  } catch (err) {
    console.log(err);
  } finally {
    hideLoader();
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMorebtnEl.addEventListener('click', onClickLoadMoreBtn);
