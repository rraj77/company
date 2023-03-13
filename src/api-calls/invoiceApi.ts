import axios from 'axios';

export async function getAllDocument() {
  const url = process.env.REACT_APP_API_URL;
  const path = process.env.REACT_APP_DOCUMENT_API_BASE_PATH;

  return await axios.get(`${url}${path}`).then((data) => data.data);
}
