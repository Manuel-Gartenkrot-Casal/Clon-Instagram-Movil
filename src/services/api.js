import axios from 'axios';

export const fetchCatImages = async (limit = 15) => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
      params: { limit, has_breeds: 1 },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching cat images:', error);
    return [];
  }
};
