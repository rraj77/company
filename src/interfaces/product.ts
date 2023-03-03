export interface IProduct {
  id?: string;
  name: string;
  category: string;
  subCategory: string;
  description: string;
  tax: number;
  discount: number;
  price: number;
}
export interface IInvoiceItem extends IProduct {
  quantity: number;
}

export interface AddProductFormPro {
  onSubmitProductForm: (inputs: IProduct) => void;
  userProducts: IProduct;
  setuserProducts: React.Dispatch<React.SetStateAction<IProduct>>;
}

export interface  IQuantity  {
  id?:string,
  product: IProduct;
  quantity: number;
  totalData: number | undefined;
}