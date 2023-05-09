/**
 * Calculate the distance between two
 * locations on Google Maps.
 *
 * =GOOGLEMAPS_DISTANCE("NY 10005", "Hoboken NJ", "walking")
 *
 * @param {String} origin The address of starting point
 * @param {String} destination The address of destination
 * @param {String} mode The mode of travel (driving, walking, bicycling or transit)
 * @return {String} The distance in miles
 * @customFunction
 */

const GOOGLEMAPS_DISTANCE = (origin, destination, mode) => {

    const key = ['distance', origin, destination, mode].join(',');

    // Is result in the internal cache?
    const value = getCache(key);

    // If yes, serve the cached result
    if (value !== null) return value;
    
    const { routes: [data] = [] } = Maps.newDirectionFinder()
      .setOrigin(origin)
      .setDestination(destination)
      .setMode(mode)
      .getDirections();
  
    if (!data) {
      throw new Error('No route found!');
    }
  
    const { legs: [{ distance: { text: distance } } = {}] = [] } = data;
    return distance;
  };