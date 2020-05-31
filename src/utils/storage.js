/**
 * Returns selected country if any
 */
export const getSelectedCountry = () => {
  return localStorage.getItem('selected-country');
};

/**
 * Sets selected country value
 */
export const setSelectedCountry = (value) => {
  return localStorage.setItem('selected-country', value);
};
