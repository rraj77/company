import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useState, useEffect } from 'react';
import { getAllInvoiceType } from '../api/invoiceType';
import { IInvoiceType, invouceTypeProp } from '../interfaces/invoice';
import styles from '../styles/styles.module.scss';

export default function invoiceType({
  setInvoiceTypeSelected,
  invoiceTypeSelected
}: invouceTypeProp) {
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
      setInvoiceTypeSelected(invoicetype);
    }
  };

  useEffect(() => {
    getInvoiceTypes();
  }, []);

  return (
    <FormControl fullWidth className={styles.padding_right} size="small">
      <InputLabel>Invoice Type </InputLabel>
      <Select label="Invoice Type" onChange={onSelectType} value={invoiceTypeSelected.type}>
        {invoiceType.map((row) => (
          <MenuItem key={row.id} value={row.type}>
            {row.type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
