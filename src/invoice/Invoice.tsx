import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Grid, TableFooter, TextField } from '@mui/material';
import { Typography } from '@mui/material';
import styles from '../styles/styles.module.scss';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import RemoveIcon from '@mui/icons-material/Remove';
import EditIcon from '@mui/icons-material/Edit';
import { ProductList } from '../products/Api';
import { IProduct } from '../interfaces/product';
import { IQuantity } from '../interfaces/product';
import SaveIcon from '@mui/icons-material/Save';

export default function Invoice() {
  const [invoiceProductName, setInvoiceProductName] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [totalData, setTotalData] = useState<number>();
  const [selectedProductId, setSelectedProductID] = useState<string>();
  const [invoiceProducts, setinvoiceProducts] = useState<IQuantity[]>([]);
  const [isEditQuantity, setEditQuantity] = useState<number>(1);
  const [isDiscount, setDiscount] = useState<number>(1);
  const [subTotal, setSubTotal] = useState<number>(0);
  const [newDiscount, setNewDiscount] = useState<number>(0);
  const [newTotal, setNewTotal] = useState<number>(0);
  const [product, setProduct] = useState<IProduct>({
    id: 0,
    name: '',
    category: '',
    subCategory: '',
    description: '',
    tax: 0,
    discount: 0,
    price: 0
  });

  const onSubmit = () => {
    const data = invoiceProducts.map((element: IQuantity) => {
      if (element.id === selectedProductId) {
        element.quantity = isEditQuantity;
        element.product.discount = isDiscount;
        if (product !== undefined) {
          const newItem = ProductList.find((value: IProduct) => value.name === product.name);
          if (newItem !== undefined) {
            const totalItem = newItem.price * isEditQuantity - isDiscount + newItem.tax;

            const editProductIndex = invoiceProducts.findIndex((value) => value.id === element.id);
            invoiceProducts[editProductIndex].totalData = totalItem;
          }
        }
      }

      return element;
    });

    setinvoiceProducts([...data]);
    setSelectedProductID('');
  };

  const selectNewDiscountAndQuantity = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    textFieldName: string
  ) => {
    if (textFieldName === 'quantity') {
      setEditQuantity(parseInt(e.target.value));
    } else if (textFieldName === 'discount') {
      setDiscount(parseInt(e.target.value));
    }
  };

  const editQuantity = (textFieldName: string) => {
    return (
      <TextField
        value={textFieldName === 'quantity' ? isEditQuantity : isDiscount}
        type="number"
        onChange={(e) => selectNewDiscountAndQuantity(e, textFieldName)}
        InputProps={{ inputProps: { min: 0, max: 100 } }}
      />
    );
  };

  const onEditProduct = (indexOfProduct: string) => {
    setSelectedProductID(indexOfProduct);
  };

  const increament = () => {
    setQuantity(quantity + 1);

    if (product !== undefined) {
      const newItem = ProductList.find((value: IProduct) => value.name === product.name);
      if (newItem !== undefined) {
        const totalItem = newItem.price * (quantity + 1) - newItem.discount + newItem.tax;

        setTotalData(totalItem);
      }
    }
  };
  const decreament = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
    if (product !== undefined) {
      const newItem = ProductList.find((value: IProduct) => value.name === product.name);
      if (newItem !== undefined) {
        const totalItem = newItem.price * (quantity - 1) - newItem.discount + newItem.tax;

        setTotalData(totalItem);
      }
    }
  };
  const editData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(event.target.value));
    if (product !== undefined) {
      const newItem = ProductList.find((value: IProduct) => value.name === product.name);
      if (newItem !== undefined) {
        const totalItem =
          newItem.price * Number(event.target.value) - newItem.discount + newItem.tax;

        setTotalData(totalItem);
      }
    }
  };

  const handleSelectProduct = (event: SelectChangeEvent) => {
    const newItem = ProductList.find((value) => value.name === event.target.value);
    if (newItem !== undefined) {
      setProduct(newItem);
    }
    setInvoiceProductName(event.target.value);
    if (newItem !== undefined) {
      const totalItem = newItem.price * quantity - newItem.discount + newItem.tax;
      setTotalData(totalItem);
    }
  };

  const onAddinvoiceProducts = () => {
    const allInvoiceProduct: IQuantity = {
      id: new Date().getTime().toString(),
      product: product,
      quantity: quantity,
      totalData: totalData
    };

    setProduct({
      id: 0,
      name: '',
      category: '',
      subCategory: '',
      description: '',
      tax: 0,
      discount: 0,
      price: 0
    });
    setInvoiceProductName('');
    setQuantity(1);
    setTotalData(0);
    setinvoiceProducts([...invoiceProducts, allInvoiceProduct]);
  };

  const onDeleteProduct = (id: string) => {
    const deleteProduct = invoiceProducts.filter((item: IQuantity) => {
      if (id !== item.id) {
        return item;
      }
    });
    setinvoiceProducts(deleteProduct);
  };

  React.useEffect(() => {
    let totalSubTotal = 0;
    invoiceProducts.map((value) => {
      totalSubTotal += value.totalData ?? 0;
      setSubTotal(totalSubTotal);
      const discount = totalSubTotal * 0.1;
      setNewDiscount(discount);
      const total = totalSubTotal - discount;
      setNewTotal(total);
    });
  }, [invoiceProducts]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12}>
        <Box className={styles.title}>
          <Typography variant="h5">Invoice</Typography>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={styles.tableCellHead}>product_name</TableCell>
              <TableCell className={styles.tableCellHead}>price</TableCell>
              <TableCell className={styles.tableCellHead}>quantity</TableCell>
              <TableCell className={styles.tableCellHead}>discount</TableCell>
              <TableCell className={styles.tableCellHead}>tax</TableCell>
              <TableCell className={styles.tableCellHead}>total</TableCell>
              <TableCell className={styles.tableCellHead}>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {invoiceProducts?.map((eachProduct) => (
              <TableRow key={eachProduct.id}>
                <TableCell className={styles.tableCellBody}>{eachProduct.product.name}</TableCell>
                <TableCell className={styles.tableCellBody}>{eachProduct.product.price}</TableCell>
                {eachProduct.id === selectedProductId ? (
                  <TableCell className={styles.tableCellBody}>{editQuantity('quantity')}</TableCell>
                ) : (
                  <TableCell className={styles.tableCellBody}>{eachProduct.quantity}</TableCell>
                )}
                {eachProduct.id === selectedProductId ? (
                  <TableCell className={styles.tableCellBody}>{editQuantity('discount')}</TableCell>
                ) : (
                  <TableCell className={styles.tableCellBody}>
                    {eachProduct.product.discount}
                  </TableCell>
                )}

                <TableCell className={styles.tableCellBody}>{eachProduct.product.tax}</TableCell>
                <TableCell className={styles.tableCellBody}>{eachProduct.totalData}</TableCell>
                <TableCell>
                  <Box className={styles.display_flex}>
                    <IconButton color="error" onClick={() => onDeleteProduct(eachProduct.id ?? '')}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton color="primary" onClick={() => onEditProduct(eachProduct.id ?? '')}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="primary" onClick={() => onSubmit()}>
                      <SaveIcon />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell className={styles.tableCellBody}>
                <Box>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Product</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={invoiceProductName}
                      label="Product"
                      onChange={handleSelectProduct}>
                      {ProductList.map((row) => (
                        <MenuItem key={row.id} value={row.name}>
                          {row.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </TableCell>
              <TableCell className={styles.tableCellBody}>{product?.price}</TableCell>

              <TableCell className={styles.display}>
                <Box>
                  <IconButton color="primary" onClick={decreament}>
                    <RemoveIcon />
                  </IconButton>

                  <TextField
                    value={quantity}
                    type="number"
                    onChange={editData}
                    InputProps={{ inputProps: { min: 1, max: 100 } }}
                  />

                  <IconButton color="primary" onClick={increament}>
                    <AddIcon />
                  </IconButton>
                </Box>
              </TableCell>

              <TableCell className={styles.tableCellBody}>{product?.discount}</TableCell>
              <TableCell className={styles.tableCellBody}>{product?.tax}</TableCell>
              <TableCell className={styles.tableCellBody}>{totalData}</TableCell>
              <TableCell>
                <Box className={styles.display_flex}>
                  <IconButton color="primary" onClick={onAddinvoiceProducts}>
                    <AddIcon />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Box className={styles.flow}>
          <TableFooter>
            <TableHead>
              <Box className={styles.footer_total}>
                <TableRow>
                  <TableCell>subTotal</TableCell>
                  <TableBody>
                    <TableCell>{subTotal}</TableCell>
                  </TableBody>
                </TableRow>
                <TableRow>
                  <TableCell>discount</TableCell>
                  <TableBody>
                    <TableCell>{newDiscount}</TableCell>
                  </TableBody>
                </TableRow>
                <TableRow>
                  <TableCell>Total</TableCell>
                  <TableBody>
                    <TableCell>{newTotal}</TableCell>
                  </TableBody>
                </TableRow>
              </Box>
            </TableHead>
          </TableFooter>
        </Box>
      </Grid>
    </Grid>
  );
}
