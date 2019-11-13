const getIdFromUrl = (url = '') => (url ? url.split('/').filter((e) => e).slice(-1) : '');

export default getIdFromUrl;
