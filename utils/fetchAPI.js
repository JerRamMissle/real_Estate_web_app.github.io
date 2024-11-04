import axios from "axios";
import { headers } from "next/headers";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        "x-rapidapi-host": "bayut.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching API data:", error.message);
    return null; // Return null or an empty object if there’s an error
  }
};
