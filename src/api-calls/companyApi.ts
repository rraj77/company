import axios from 'axios';
import { ICompanyType } from '../interfaces/company';

export async function getAllCompany() {
  return await axios.get('http://localhost:4000/company').then((data) => data.data);
}

export async function addCompany(company: ICompanyType) {
  const companyData = {
    name: company.name,
    email: company.email,
    phone: company.phone,
    pan: company.pan,
    gst: company.gst,
    cin: company.cin
  };
  return await axios.post('http://localhost:4000/company', companyData, {
    headers: {
      userId: 1
    }
  });
}

export async function updateCompany(id: number, company: ICompanyType) {
  const companyData = {
    name: company.name,
    email: company.email,
    phone: company.phone,
    pan: company.pan,
    gst: company.gst,
    cin: company.cin
  };
  return await axios.put(`http://localhost:4000/company/${id}`, companyData, {
    headers: {
      userId: 1
    }
  });
}

export async function deleteCompany(id: number) {
  return await axios.delete(`http://localhost:4000/company/${id}`);
}
