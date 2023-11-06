import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const fetchMoreCards = async (page) => {
  try {
    const response = await axios.get(`/cards?limit=12&page=${page}`);
    if (response.status !== 200)
      throw new Error(
        `Request failed with status code: " + ${response.status}`
      );

    return response;
  } catch (error) {
    throw error.code;
  }
};
