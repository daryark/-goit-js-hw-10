const countryCard = document.querySelector('.country-info');

export function createCardMarkup(country) {
  const {
    name: { official },
    capital,
    population,
    flags: { svg },
    languages,
  } = country[0];
  return `<img src="${svg} alt="${official} flag">
  <h1>${official}</h1>
  <p><span>Capital : </span>${capital}</p>
  <p><span>Population : </span>${population}</p>
  <p><span>Languages : </span>${Object.values(languages)}</p>`;
}

export function renderCardMarkup(result) {
  countryCard.innerHTML = createCardMarkup(result);
}
