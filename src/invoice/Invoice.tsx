import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from '../styles/styles.module.scss';
import InvoiceProductForm from './InvoiceProductForm';
import InvoiceProduct from './InvoiceProduct';
import { Box, Button, TextField, Typography } from '@mui/material';
import { IInvoice, IInvoiceProduct } from '../interfaces/invoice';
import { addDocument } from '../api-calls/invoiceProductsApi';
import { useNavigate } from 'react-router-dom';

function Invoice() {
  const navigate = useNavigate();
  const newInvoiceProduct: IInvoiceProduct = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    quantity: 1,
    discount: 0,
    gst: 0,
    total: 0
  };
  const [invoiceProducts, setInvoiceProducts] = useState<IInvoiceProduct[]>([]);
  const [editInvoiceProductId, setEditInvoiceProductId] = useState<number>(0);
  const [invoiceProduct, setInvoiceProduct] = useState<IInvoiceProduct>(newInvoiceProduct);

  const onEditInvoiceProduct = (id: number) => {
    setEditInvoiceProductId(id);
  };

  const onSaveInvoiceProduct = () => {
    setInvoiceProduct(newInvoiceProduct);
    setEditInvoiceProductId(0);
  };

  const onDeleteInvoiceProduct = (id: number) => {
    const invoiceProductList = invoiceProducts.filter((item) => item.id !== id);
    setInvoiceProducts(invoiceProductList);
    onSaveInvoiceProduct();
  };

  const [invoice, setInvoice] = useState<IInvoice>({
    id: Math.random(),
    invoiceProducts: invoiceProducts,
    discount: 0,
    total: 0
  });

  const [discount, setDiscount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [discountAmount, setDiscountAmount] = useState<number>(0);

  useEffect(() => {
    onTotalAmount(invoice);
  }, [invoiceProducts, discount]);

  const onTotalAmount = (invoice: IInvoice) => {
    invoice.invoiceProducts = invoiceProducts;
    const Total = invoice.invoiceProducts.reduce((total, currentValue) => {
      return total + currentValue.total;
    }, 0);
    setTotal(Total);
    if (discount > 0) {
      const discountAmount = Total * (discount / 100);
      setDiscountAmount(discountAmount);
      invoice.discount = discount;
      invoice.total = Total - discountAmount;
    } else {
      setDiscountAmount(0);
      invoice.discount = 0;
      invoice.total = Total;
    }
    setInvoice({ ...invoice });
  };

  const onChangeDiscountAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value <= 100) {
      setDiscount(value);
    }
  };
  const onSaveInvoice = async () => {
    const data = await addDocument(invoice);
    if (data.status === 200) {
      setTimeout(() => {
        navigate('/invoice-create');
      }, 100);
    }
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={styles.tableCellHead}>Product name</TableCell>
            <TableCell className={styles.tableCellHead}>Description</TableCell>
            <TableCell className={styles.tableCellHead}>Price</TableCell>
            <TableCell className={styles.tableCellHead}>Quantity</TableCell>
            <TableCell className={styles.tableCellHead}>Gst</TableCell>
            <TableCell className={styles.tableCellHead}>Discount</TableCell>
            <TableCell className={styles.tableCellHead}>Total</TableCell>
            <TableCell className={styles.tableCellHead} align="center">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoiceProducts.map((item, index) => {
            const invoiceProduct = JSON.parse(JSON.stringify(item));
            return (
              <>
                {editInvoiceProductId === invoiceProduct.id ? (
                  <InvoiceProductForm
                    key={index}
                    invoiceProducts={invoiceProducts}
                    setInvoiceProducts={setInvoiceProducts}
                    editInvoiceProductId={editInvoiceProductId}
                    onSaveInvoiceProduct={onSaveInvoiceProduct}
                    invoiceProduct={invoiceProduct}
                    setInvoiceProduct={setInvoiceProduct}
                    onDeleteInvoiceProduct={onDeleteInvoiceProduct}
                  />
                ) : (
                  <InvoiceProduct
                    key={index}
                    onDeleteInvoiceProduct={onDeleteInvoiceProduct}
                    invoiceProduct={invoiceProduct}
                    onEditInvoiceProduct={onEditInvoiceProduct}
                  />
                )}
              </>
            );
          })}
          {editInvoiceProductId === 0 ? (
            <InvoiceProductForm
              key={invoiceProduct.id}
              invoiceProducts={invoiceProducts}
              setInvoiceProducts={setInvoiceProducts}
              onSaveInvoiceProduct={onSaveInvoiceProduct}
              editInvoiceProductId={editInvoiceProductId}
              invoiceProduct={invoiceProduct}
              setInvoiceProduct={setInvoiceProduct}
              onDeleteInvoiceProduct={onDeleteInvoiceProduct}
            />
          ) : null}
        </TableBody>
      </Table>
      <Box className={styles.footer_total + ' ' + styles.save_button}>
        <Box className={styles.display_flex + ' ' + styles.padding_0_5}>
          <Typography className={styles.padding_right}>Discount: </Typography>
          <TextField
            type="number"
            label="Enter Extra discount amount"
            value={discount === 0 ? '' : discount}
            size="small"
            onChange={onChangeDiscountAmount}
          />
        </Box>
        <Box className={styles.display_flex + ' ' + styles.padding_0_5}>
          <Typography>Total :</Typography>
          <Typography className={styles.margin_left}>{total.toFixed(2)}</Typography>
        </Box>
        <Box className={styles.display_flex + ' ' + styles.padding_0_5}>
          <Typography>Discount amount :</Typography>
          <Typography className={styles.margin_left}>- {discountAmount.toFixed(2)}</Typography>
        </Box>
        <Box className={styles.display_flex + ' ' + styles.padding_0_5}>
          <Typography>Net Amount :</Typography>
          <Typography className={styles.margin_left}>{invoice.total.toFixed(2)}</Typography>
        </Box>
        {invoice.invoiceProducts[0] !== undefined ? (
          <Button
            size="small"
            variant="contained"
            className={styles.save_button}
            onClick={onSaveInvoice}>
            Save
          </Button>
        ) : (
          <Button size="small" variant="contained" disabled className={styles.save_button}>
            Save
          </Button>
        )}
      </Box>
    </>
  );
}
export default Invoice;
