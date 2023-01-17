const BASE_URL = 'https://restcountries.com/v3.1';
const params = 'fields=name,capital,population,languages,flags';

export const fetchCountries = name =>
  fetch(`${BASE_URL}/name/${name}?${params}`).then(r => {
    if (!r.ok) {
      throw new Error(r.status);
    }
    return r.json();
  });
