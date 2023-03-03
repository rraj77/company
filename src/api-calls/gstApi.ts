import axios from 'axios';
import { IGst } from '../interfaces/gst';

export async function getGstAll() {
  return await axios.get('http://localhost:4000/gst').then((data) => data.data);
}

export async function addGst(gst: IGst) {
  const gstData = {
    name: gst.name,
    description: gst.description,
    tax: gst.tax
  };
  return await axios.post('http://localhost:4000/gst', gstData, {
    headers: {
      companyId: 1
    }
  });
}

export async function updateGst(id: number, gst: IGst) {
  const gstData = {
    name: gst.name,
    description: gst.description,
    tax: gst.tax
  };
  return await axios.put(`http://localhost:4000/gst/${id}`, gstData, {
    headers: {
      companyId: 1
    }
  });
}

export async function deleteGst(id: number) {
  return await axios.delete(`http://localhost:4000/gst/${id}`);
}
