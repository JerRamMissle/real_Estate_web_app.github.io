const axios = require("axios");

const testApi = async () => {
  try {
    const response = await axios.get(
      "https://bayut.p.rapidapi.com/properties/list",
      {
        params: {
          locationExternalIDs: "5002", // Example ID, replace with actual value based on your requirements
          purpose: "for-sale", // Example purpose, adjust as needed
          hitsPerPage: "10", // Optional parameter, adjust as needed
        },
        headers: {
          "x-rapidapi-host": "bayut.p.rapidapi.com",
          "x-rapidapi-key":
            "25ebede638msh9bf1b5f3559968cp1045b4jsna545f15b5746",
        },
      }
    );
    console.log("API Response:", response.data);
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
  }
};

testApi();
