export function debounce(funk, duration) {
  let timeoutId = null;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      funk(...args);
    }, duration);
  };
}
