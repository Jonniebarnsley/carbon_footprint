const md6 = (key = '') => {

    // The cache key for "New York" and "new york  " should be same
    const code = key.toLowerCase().replace(/\s/g, '');

    return Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, key)
      .map((char) => (char + 256).toString(16).slice(-2))
      .join('');
};
  
const getCache = (key) => {
    return CacheService.getDocumentCache().get(md6(key));
};
  
// Store the results for 6 hours
const setCache = (key, value) => {
    const expirationInSeconds = 6 * 60 * 60;
    CacheService.getDocumentCache().put(md6(key), value, expirationInSeconds);
};