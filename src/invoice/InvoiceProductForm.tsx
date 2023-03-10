import React from 'react';
import styles from '../styles/styles.module.scss';
import { TableRow, TableCell, FormControl, InputLabel } from '@mui/material';
import { Select, MenuItem, TextField, Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { IInvoiceProduct, IInvoiceProductForm } from '../interfaces/invoice';
import { invoiceProductsList } from '../api-calls/invoiceProductsApi';

export default function InvoiceProductForm({
  invoiceProduct,
  setInvoiceProduct,
  editInvoiceProductId,
  onSaveInvoiceProduct,
  onDeleteInvoiceProduct,
  invoiceProducts,
  setInvoiceProducts
}: IInvoiceProductForm) {
  const onSelectProduct = (event: { target: { value: string } }) => {
    const invoiceProduct = invoiceProductsList.find(
      (invoiceProduct) => invoiceProduct.name === event.target.value
    );
    if (invoiceProduct !== undefined) {
      onTotal(invoiceProduct);
    }
  };

  const onAddInvoiceProduct = () => {
    invoiceProduct.id = Math.random();
    setInvoiceProducts([...invoiceProducts, invoiceProduct]);
    onSaveInvoiceProduct();
  };

  const editInvoiceProduct = (invoiceProduct: IInvoiceProduct) => {
    const index = invoiceProducts.findIndex((item) => item.id === invoiceProduct.id);
    const list = [...invoiceProducts];
    if (index !== -1) {
      list[index] = { ...invoiceProduct };
      setInvoiceProducts(list);
    }
  };

  const onTotal = (invoiceProduct: IInvoiceProduct) => {
    const amount = invoiceProduct.quantity * invoiceProduct.price;
    const discountAmount = amount * (invoiceProduct.discount / 100);
    const gstAmount = (amount - discountAmount) * (invoiceProduct.gst / 100);
    const Total = amount + gstAmount - discountAmount;
    invoiceProduct.total = Total;
    setInvoiceProduct({ ...invoiceProduct });
    editInvoiceProduct(invoiceProduct);
  };

  const onValueChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = Number(e.target.value);
    if (name === 'discount' && value <= 100) {
      invoiceProduct.discount = value;
      onTotal(invoiceProduct);
    } else if (name === 'quantity') {
      invoiceProduct.quantity = value;
      onTotal(invoiceProduct);
    }
  };

  return (
    <TableRow key={invoiceProduct.id}>
      <TableCell className={styles.tableCellBody}>
        {editInvoiceProductId === 0 ? (
          <FormControl fullWidth>
            <InputLabel>Product</InputLabel>
            <Select label="Product" value={invoiceProduct.name} onChange={onSelectProduct}>
              {invoiceProductsList.map((row) => (
                <MenuItem key={row.id} value={row.name}>
                  {row.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : (
          invoiceProduct.name
        )}
      </TableCell>
      <TableCell className={styles.tableCellBody}>{invoiceProduct.description}</TableCell>
      <TableCell className={styles.tableCellBody}>{invoiceProduct.price}</TableCell>
      <TableCell className={styles.tableCellBody}>
        <TextField
          type="number"
          name="quantity"
          value={invoiceProduct.quantity === 0 ? '' : invoiceProduct.quantity}
          onChange={onValueChange}
        />
      </TableCell>
      <TableCell className={styles.tableCellBody}>{invoiceProduct.gst}</TableCell>
      <TableCell className={styles.tableCellBody}>
        <TextField
          type="number"
          name="discount"
          value={invoiceProduct.discount === 0 ? '' : invoiceProduct.discount}
          onChange={onValueChange}
        />
      </TableCell>
      <TableCell className={styles.tableCellBody}>{invoiceProduct.total.toFixed(2)}</TableCell>
      <TableCell className={styles.tableCellBody}>
        <Box className={styles.action}>
          {editInvoiceProductId === 0 ? (
            <IconButton
              color="primary"
              onClick={() => {
                invoiceProduct.id !== 0 ? onAddInvoiceProduct() : null;
              }}>
              <AddIcon />
            </IconButton>
          ) : (
            <>
              <IconButton color="primary" onClick={onSaveInvoiceProduct}>
                <SaveIcon />
              </IconButton>
              <IconButton color="error" onClick={() => onDeleteInvoiceProduct(invoiceProduct.id)}>
                <DeleteIcon />
              </IconButton>
            </>
          )}
        </Box>
      </TableCell>
    </TableRow>
  );
}
