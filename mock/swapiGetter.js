const axios = require("axios");

// get a star wars person by id and return their name
async function swapiGetter(id) {
  try {
    const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
    return response.data.name;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error or handle it as needed
  }
}

module.exports = swapiGetter;
