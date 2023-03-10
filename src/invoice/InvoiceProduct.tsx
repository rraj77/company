import React from 'react';
import styles from '../styles/styles.module.scss';
import { TableRow, TableCell, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IInvoiceProductProp } from '../interfaces/invoice';

export default function invoiceProductTable({
  invoiceProduct,
  onEditInvoiceProduct,
  onDeleteInvoiceProduct
}: IInvoiceProductProp) {
  return (
    <TableRow>
      <TableCell className={styles.tableCellBody}>{invoiceProduct.name}</TableCell>
      <TableCell className={styles.tableCellBody}>{invoiceProduct.price}</TableCell>
      <TableCell className={styles.tableCellBody}>{invoiceProduct.quantity}</TableCell>
      <TableCell className={styles.tableCellBody}>{invoiceProduct.gst}</TableCell>
      <TableCell className={styles.tableCellBody}>{invoiceProduct.discount}</TableCell>
      <TableCell className={styles.tableCellBody}>{invoiceProduct.total.toFixed(2)}</TableCell>
      <TableCell className={styles.tableCellBody} align="center">
        <Box className={styles.action}>
          <IconButton onClick={() => onEditInvoiceProduct(invoiceProduct.id)}>
            <EditIcon color="primary" />
          </IconButton>
          <IconButton onClick={() => onDeleteInvoiceProduct(invoiceProduct.id)}>
            <DeleteIcon color="error" />
          </IconButton>
        </Box>
      </TableCell>
    </TableRow>
  );
}
