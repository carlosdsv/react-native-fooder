import axios from 'axios';
import { YELP_API_KEY, YELP_API_URL } from '@env';

export default axios.create({
  baseURL: `${YELP_API_URL}`,
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`,
  },
});
