import axios from 'axios';

/* Defaults */
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.VUE_APP_YELP_API_KEY}`;
