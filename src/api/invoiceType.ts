import axios from 'axios';

export const getAllInvoiceType = async () => {
  return await axios.get('http://localhost:4000/document-type');
};
