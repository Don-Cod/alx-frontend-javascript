function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // API call logic 
    // ...
    if (responseFromAPI) {
      resolve(responseFromAPI); // Fix with API response
    } else {
      reject("Error: API call failed"); // reject with error message
    }
  });
}

export default getResponseFromAPI;
