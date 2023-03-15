import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useState, useEffect } from 'react';
import { getAllInvoiceType } from '../api/invoiceType';
import { IInvoiceType } from '../interfaces/invoice';
interface invouceTypeProp {
  setInvoiceTypeId: React.Dispatch<React.SetStateAction<number>>;
}

export default function invoiceType({ setInvoiceTypeId }: invouceTypeProp) {
  const [invoiceType, setInvoiceType] = useState<IInvoiceType[]>([]);

  const getInvoiceTypes = async () => {
    try {
      const result = await getAllInvoiceType();
      setInvoiceType(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  const onSelectType = (e: { target: { value: string } }) => {
    const invoicetype = invoiceType.find((item) => item.type === e.target.value);
    if (invoicetype !== undefined) {
      setInvoiceTypeId(invoicetype.id);
    }
  };

  useEffect(() => {
    getInvoiceTypes();
  }, []);

  return (
    <FormControl sx={{ marginBottom: '1rem', width: '50%' }} size="small">
      <InputLabel>Invoice Type </InputLabel>
      <Select label="Invoice Type" onChange={onSelectType}>
        {invoiceType.map((row) => (
          <MenuItem key={row.id} value={row.type}>
            {row.type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
