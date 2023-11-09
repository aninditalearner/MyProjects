const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=6fe52c30cf74b467d9919bbf3220e7cb&query=37.8267,-122.4233&units=s";

// request({ url: url }, (error, response) => {
//   const data = JSON.parse(response.body);
//   console.log(data.current);
// });

//No need to parse when we use the json: true attribute in request
// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Weather service not available");
//   } else if (response.body.error) {
//     console.log(response.body.error.info);
//   } else {
//     const data = response.body.current;
//     console.log(
//       `${response.body.current.weather_descriptions[0]}. It is currently ${data.temperature}, but it feels like ${data.feelslike}`
//     );
//   }
// });

// const geoCodeURL =
//   "http://api.positionstack.com/v1/forward?access_key=507fe4fee0be2ed4461dd0486f312c61&query=Kolkata";

// request({ url: geoCodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log("Geo Coding service not avaialable");
//   } else if (response.body.error) {
//     console.log(response.body.error.message);
//   } else {
//     const lat = response.body.data[0].latitude;
//     const longitude = response.body.data[0].longitude;
//     console.log(`Latitude: ${lat} and Longitude: ${longitude}`);
//     console.log(response.body.data);
//   }
// });

const geoCode = (address, callback) => {
  const geoURL = `http://api.positionstack.com/v1/forward?access_key=507fe4fee0be2ed4461dd0486f312c61&query=${encodeURIComponent(
    address
  )}`;
  request({ url: geoURL, json: true }, (error, response) => {
    if (error) {
      callback("Geo Coding service not avaialable");
    } else if (response.body.error) {
      callback(response.body.error.message);
    } else {
      //console.log(response.body.data[0]);
      callback(undefined, {
        latitude: response.body.data[0].latitude,
        longitude: response.body.data[0].longitude,
        locality: response.body.data[0].locality,
      });
    }
  });
};

const getWeatherData = (coOrdinates, callback) => {
  const locality = coOrdinates.locality;
  const weatherURL = `http://api.weatherstack.com/current?access_key=6fe52c30cf74b467d9919bbf3220e7cb&query=${coOrdinates.latitude},${coOrdinates.longitude}`;
  request({ url: weatherURL, json: true }, (error, response) => {
    if (error) {
      callback("Weather service not available");
    } else if (response.body.error) {
      callback(response.body.error.info);
    } else {
      const data = {
        description: response.body.current.weather_descriptions[0],
        actualTemp: response.body.current.temperature,
        feelslike: response.body.current.feelslike,
        locality: locality,
      };
      callback(undefined, data);
    }
  });
};

geoCode("Kolkata", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    getWeatherData(data, (error, weatherInfo) => {
      if (error) {
        console.log(error);
      } else {
        console.log(
          `${weatherInfo.description}. It is currently ${weatherInfo.actualTemp}, but it feels like ${weatherInfo.feelslike} in ${weatherInfo.locality}.`
        );
      }
    });
  }
});
