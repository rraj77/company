export interface Links {
  name: string;
  to: string;
}

export interface CompanyTypes {
  id: number | string;
  name: string;
  email: string;
  phone: number | string;
  pan: number | string;
  gst: number | string;
  cin: number | string;
}

export interface AddCompanyFormProps {
  ref: any;
  onSubmitCompanyForm: (dataCompany: CompanyTypes) => void;
  editCompany: CompanyTypes;
  setEditCompany: React.Dispatch<React.SetStateAction<CompanyTypes>>;
}
export interface VatProp {
  id: number | string;
  name: string;
  description: string;
  tax: string;
}

export interface TableDataProp {
  id: number | string;
  category: string;
  subCategory: Category[];
}

export interface Category {
  id: number | string;
  name: string;
  children: Category[];
}

export interface CategoryProp {
  tableData: TableDataProp[];
  setTableData: React.Dispatch<React.SetStateAction<TableDataProp[]>>;
  edit: TableDataProp;
  setEdit: React.Dispatch<React.SetStateAction<TableDataProp>>;
  onAdd: (editData: TableDataProp) => void;
  setEditSubCategory: React.Dispatch<React.SetStateAction<boolean>>;
  editSubCategory: boolean;
}

// export interface Props {
//     window?: () => Window;
//   }
