import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';

import { fetchCountries } from './js/fetch-countries';

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
const countryCard = document.querySelector('.country-info');
const countriesList = document.querySelector('.country-list');

inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  clearContent();
  const name = e.target.value.trim();

  fetchCountries(name).then(checkResults).catch(errMessage);
}

//
//
function checkResults(res) {
  if (res.length > 10) {
    clearContent();
    infoMessage();
  } else if (res.length <= 10 && res.length > 1) {
    renderCountriesMarkup(res);
  } else if (res.length === 1) {
    renderCardMarkup(res);
  }
}

function createCardMarkup(country) {
  const {
    name: { official },
    capital,
    population,
    flags: { svg },
    languages,
  } = country[0];
  return `<img src="${svg}" alt="${official} flag">
  <h1>${official}</h1>
  <p><span>Capital : </span>${capital}</p>
  <p><span>Population : </span>${population}</p>
  <p><span>Languages : </span>${Object.values(languages).join(', ')}</p>`;
}

function renderCardMarkup(markup) {
  countryCard.innerHTML = createCardMarkup(markup);
}

function createCountriesMarkup(countries) {
  return countries
    .map(
      ({ name: { official }, flags: { svg } }) =>
        `<li><img src = "${svg}" alt = "${official} flag">${official}</li>`
    )
    .join('');
}

function renderCountriesMarkup(markup) {
  countriesList.innerHTML = createCountriesMarkup(markup);
}

function infoMessage() {
  Notify.info('Too many matches found. Please enter a more specific name.');
}

function errMessage(err) {
  Notify.failure('Oops, there is no country with that name');
}

function clearContent() {
  countriesList.innerHTML = '';
  countryCard.innerHTML = '';
}
