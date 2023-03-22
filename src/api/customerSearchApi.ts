import axios from 'axios';

export async function getCustomers(search: string | number) {
  return await axios.get(`http://localhost:4000/search-client?search=${search}`);
}
