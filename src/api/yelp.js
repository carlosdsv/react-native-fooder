import axios from 'axios';
import { YELP_API_KEY, YELP_API_URL } from '@env';
console.log(YELP_API_URL);
console.log(YELP_API_KEY);

export default axios.create({
  baseURL: `${YELP_API_URL}`,
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`,
  },
});
