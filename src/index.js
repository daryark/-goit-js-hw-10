import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetch-countries';
import { renderCardMarkup } from './js/country-card';

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');

inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  const name = e.target.value.trim();

  fetchCountries(name)
    .then(renderCardMarkup)
    // .then(r => console.log(r))
    .catch(err => console.log(err));
}
