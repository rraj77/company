import axios from 'axios';

export async function getAllDocument() {
  return await axios.get('http://localhost:4000/document').then((data) => data.data);
}
