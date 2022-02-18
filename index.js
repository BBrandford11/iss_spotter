// index.js
const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);

  
});

fetchCoordsByIP('70.65.105.126', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);
});

const myCoords = { latitude: 50.8833, longitude: -114.0334 }


fetchISSFlyOverTimes(myCoords, (error, passTime) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyovertimes:' , passTime);
});
