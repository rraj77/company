import React, { useEffect, useState } from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import styles from '../styles/styles.module.scss';
import { IInvoices } from '../interfaces/invoice';
import { getAllDocument } from '../api-calls/invoiceApi';
export default function InvoiceList() {
  const [invoices, setInvoices] = useState<IInvoices[]>([]);

  const getAllInvoice = async () => {
    try {
      const data = await getAllDocument();
      setInvoices(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllInvoice();
  }, []);

  return (
    <Box>
      <Box className={styles.title}>
        <Typography variant="h5">Invoices</Typography>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={styles.tableCellHead}>Id</TableCell>
            <TableCell className={styles.tableCellHead}>Number</TableCell>
            <TableCell className={styles.tableCellHead}>Invoice Date</TableCell>
            <TableCell className={styles.tableCellHead}>Discount</TableCell>
            <TableCell className={styles.tableCellHead}>Total</TableCell>
            <TableCell className={styles.tableCellHead}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className={styles.tableCellBody}>invoice - {invoice.id}</TableCell>
              <TableCell className={styles.tableCellBody}>{invoice.number}</TableCell>
              <TableCell className={styles.tableCellBody}>{invoice.documentDate}</TableCell>
              <TableCell className={styles.tableCellBody}>{invoice.discount}</TableCell>
              <TableCell className={styles.tableCellBody}>{invoice.total.toFixed(2)}</TableCell>
              <TableCell className={styles.tableCellBody}>{invoice.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
