import { IGst } from '../interfaces/gst';
import { Api } from './api';

const api = new Api();

export async function getGstAll() {
  return await api.gst
    .getGst()
    .then((response) => response.data)
    .catch((err) => err);
}

export async function addGst(gst: IGst) {
  const gstData = {
    name: gst.name,
    description: gst.description,
    tax: gst.tax
  };
  return await api.gst.postGst(gstData, {
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
  return await api.gst.putGst(id, gstData, {
    headers: {
      companyId: 1
    }
  });
}

export async function deleteGst(id: number) {
  return await api.gst.deleteGst(id);
}
