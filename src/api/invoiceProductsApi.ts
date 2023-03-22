import { IInvoice, IInvoiceProduct, ISearchCustomer } from '../interfaces/invoice';
import { Api } from './api';

const api = new Api();

export async function addDocument(invoice: IInvoice, selectedCustomer: ISearchCustomer) {
  const invoiceData = {
    status: 'completed',
    discount: invoice.discount,
    total: invoice.total,
    documentProducts: invoice.invoiceProducts,
    documentTypeId: invoice.documentTypeId,
    documentCustomer: selectedCustomer
  };

  const setHeaders = {
    headers: {
      createdBy: 1,
      companyId: 1
    }
  };
  return await api.document.documentCreate(invoiceData, setHeaders);
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
