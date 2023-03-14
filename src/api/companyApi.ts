import { ICompanyType } from '../interfaces/company';
import { Api } from './api';

const api = new Api();
export async function getAllCompany(): Promise<ICompanyType[]> {
  return await api.company
    .companyList()
    .then((response) => response.data)
    .catch((err) => err);
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
  const header = {
    headers: {
      userId: 6
    }
  };
  return await api.company.companyCreate(companyData, header);
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
  return await api.company.companyUpdate(id, companyData);
}

export async function deleteCompany(id: number) {
  return await api.company.companyDelete(id);
}
