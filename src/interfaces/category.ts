export interface ICategory {
    id: number ;
    name: string;
    children: ICategory[];
  }

  export interface TableDataProp {
    id: number;
    category: string;
    subCategory: ICategory[];
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