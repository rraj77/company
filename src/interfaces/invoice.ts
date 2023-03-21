export interface IInvoiceProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  discount: number;
  gst: number;
  total: number;
}

export interface IInvoiceProductForm {
  editInvoiceProductId: number;
  onSaveInvoiceProduct: () => void;
  invoiceProduct: IInvoiceProduct;
  setInvoiceProduct: React.Dispatch<React.SetStateAction<IInvoiceProduct>>;
  onDeleteInvoiceProduct: (id: number) => void;
  invoiceProducts: IInvoiceProduct[];
  setInvoiceProducts: React.Dispatch<React.SetStateAction<IInvoiceProduct[]>>;
}

export interface IInvoiceProductProp {
  invoiceProduct: IInvoiceProduct;
  onEditInvoiceProduct: (id: number) => void;
  onDeleteInvoiceProduct: (id: number) => void;
}

export interface IInvoice {
  id: number;
  invoiceProducts: IInvoiceProduct[];
  discount: number;
  total: number;
  documentTypeId: number;
}

export interface IInvoices {
  id: number;
  status: 'active' | 'paid' | 'completed' | 'cancel';
  number: number;
  documentDate: number;
  discount: number;
  total: number;
}

export interface IInvoiceType {
  id: number;
  type: 'invoice-out' | 'invoice-in' | 'waybill-in' | 'waybill-out';
  quantity: number;
  amount: number;
}

export interface ISearchCustomer {
  id: number;
  name: string;
  email: string;
  phone: string;
  pan: string;
  gst: string;
  cin: string;
  address: string;
  type: string;
}

export interface IAutoComplete {
  setSelectedCustomer: React.Dispatch<React.SetStateAction<ISearchCustomer>>;
}

export interface IInvoiceTypeSelected {
  id: number;
  type: string;
  quantity: number;
  amount: number;
}
export interface invouceTypeProp {
  invoiceTypeSelected:IInvoiceTypeSelected;
  setInvoiceTypeSelected:React.Dispatch<React.SetStateAction<IInvoiceTypeSelected>>}
export interface ICustomerDetails {
  selectedCustomer: ISearchCustomer;
}
