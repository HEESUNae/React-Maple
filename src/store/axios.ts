import axios from 'axios';

export const axiosApi = axios.create({
  baseURL: 'https://open.api.nexon.com',
  headers: {
    Accept: 'application/json',
    'x-nxopen-api-key':
      'test_0a97c39e2e0ffe1f2110755d5d52b1aaa1cd9351d2ab49fbb0eb6732492c338c8a1b305e0e478feaa5810cb8904ec962',
  },
});
