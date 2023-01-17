const BASE_URL = 'https://restcountries.com/v3.1';
const params = 'fields=name,capital,population,languages,flags';

export const fetchCountries = name =>
  fetch(`${BASE_URL}/name/${name}?${params}`).then(r => r.json());
