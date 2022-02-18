/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require("request");

const fetchMyIP = function (callback) {
  // use request to fetch IP address from JSON API
  request(`https://api.ipify.org/?format=json`, (error, response, body) => {
    const jsonBody = JSON.parse(body).ip;

    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      callback(
        Error(`Status Code ${response.statusCode} when fetching IP: ${body}`),
        null
      );
      return;
    }

    callback(null, jsonBody);
  });
};
const fetchCoordsByIP = function (ip, callback) {
  // use request to fetch IP address from JSON API
  request(
    `https://freegeoip.app/json/${ip}`,
    (error, response, body) => {
      const {latitude, longitude} = JSON.parse(body);

      if (error) {
        callback(error, null);
        return;
      }
      if (response.statusCode !== 200) {
        callback(
          Error(`Status Code ${response.statusCode} when fetching IP: ${body}`),
          null
        );
        return;
      }

      callback(null, {latitude, longitude});
    }
  );
};

//fetchMyIP()

module.exports = { 
  fetchMyIP,
  fetchCoordsByIP
}


