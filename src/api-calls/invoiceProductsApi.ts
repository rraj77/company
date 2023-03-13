import axios from 'axios';
import { IInvoice, IInvoiceProduct } from '../interfaces/invoice';

export async function getAllDocument() {
  return await axios.get('http://localhost:4000/document/28').then((data) => data.data);
}

export async function addDocument(invoice: IInvoice) {
  const invoiceData = {
    status: 'completed',
    number: Math.floor(Math.random() * 10000000000000),
    discount: invoice.discount,
    total: invoice.total,
    documentProducts: invoice.invoiceProducts
  };

  const setHeaders = {
    headers: {
      createdBy: 1,
      companyId: 1,
      documentTypeId: 1
    }
  };
  return await axios.post('http://localhost:4000/document', invoiceData, setHeaders);
}


export const invoiceProductList: IInvoiceProduct[] = [
  {
    id: 1,
    name: 'frogen',
    description: 'dfg',
    price: 23,
    quantity: 1,
    discount: 5,
    gst: 4,
    total: 0
  },
  {
    id: 2,
    name: 'Ice ',
    description: 'dfg',
    price: 21,
    quantity: 1,
    discount: 3,
    gst: 3,
    total: 0
  },
  {
    id: 3,
    name: 'Eclair',
    description: 'dfg',
    price: 27,
    quantity: 1,
    discount: 6,
    gst: 3,
    total: 0
  },
  {
    id: 4,
    name: 'abc',
    description: 'dfg',
    price: 22,
    quantity: 1,
    discount: 4,
    gst: 5,
    total: 0
  },
  {
    id: 5,
    name: 'Gingerbread',
    description: 'dfg',
    price: 25,
    quantity: 1,
    discount: 4,
    gst: 5,
    total: 0
  }
];

// export async function addCompany(company: ICompanyType) {
//   const companyData = {
//     name: company.name,
//     email: company.email,
//     phone: company.phone,
//     pan: company.pan,
//     gst: company.gst,
//     cin: company.cin
//   };
//   return await axios.post('http://localhost:4000/company', companyData, {
//     headers: {
//       userId: 1
//     }
//   });
// }

// export async function updateCompany(id: number, company: ICompanyType) {
//   const companyData = {
//     name: company.name,
//     email: company.email,
//     phone: company.phone,
//     pan: company.pan,
//     gst: company.gst,
//     cin: company.cin
//   };
//   return await axios.put(`http://localhost:4000/company/${id}`, companyData, {
//     headers: {
//       userId: 1
//     }
//   });
// }

// export async function deleteCompany(id: number) {
//   return await axios.delete(`http://localhost:4000/company/${id}`);
// }
