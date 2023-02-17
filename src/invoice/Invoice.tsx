import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Grid, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import styles from "../styles/styles.module.scss";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useContext, useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { BioContext } from "./ContextInvoice";
import { ProductList } from "../products/Api";
import { IInvoiceItem } from "../interfaces/product";

export default function Invoice() {
  const user: any = useContext(BioContext);
  console.log("check", user);
  const [product, setProduct] = useState<any>();
  const [invoiceProductName, setInvoiceProductName] = React.useState("");
  const [quantity, setQuantity] = useState<number>(1);
  const [totalData, setTotalData] = useState<any>();

  const editData = (event: any) => {
     event.target.value &&
    setQuantity(parseInt(event.target.value));
    const newItem: any = user.find(
      (value: any) => value.name == event.target.value
    );
    const totalItem: any =
      newItem.price * quantity - (newItem.discount + newItem.tax);
    console.warn("if run", totalItem);
    setTotalData(totalItem);
  };

  const handleSelectProduct = (event: SelectChangeEvent) => {
    const newItem = user.find((value: any) => value.name == event.target.value);
    setProduct(newItem);
    setInvoiceProductName(event.target.value);

    const totalItem: any =
      newItem.price * quantity - (newItem.discount + newItem.tax);
    setTotalData(totalItem);
  };

  const [addRow, setAddRow] = useState<any>([
    {
      id: Math.random(),
  
    },
  ]);
  const onAddRow = () => {
    setAddRow([...addRow, { id: Math.random() }]);
  };
  const onDeleteProduct = (id: number) => {
    const deleteProduct = addRow.filter((row: { id: number }) => row.id !== id);
    setAddRow(deleteProduct);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12}>
        <Box className={styles.title}>
          <Typography variant="h5">Invoice</Typography>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={styles.tableCellHead}>
                product_name
              </TableCell>
              <TableCell className={styles.tableCellHead}>price</TableCell>
              <TableCell className={styles.tableCellHead}>quantity</TableCell>
              <TableCell className={styles.tableCellHead}>discount</TableCell>
              <TableCell className={styles.tableCellHead}>tax</TableCell>
              <TableCell className={styles.tableCellHead}>total</TableCell>
              <TableCell className={styles.tableCellHead}>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {addRow?.map((row: any) => {
              return (
                <TableRow key={row.id}>
                  <TableCell className={styles.tableCellBody}>
                    {true ? (
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Product
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={invoiceProductName}
                            label="Product"
                            onChange={handleSelectProduct}
                          >
                            {ProductList.map((user) => (
                              <MenuItem value={user.name}>{user.name}</MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    ) : (
                      invoiceProductName
                    )}
                  </TableCell>
                  <TableCell className={styles.tableCellBody}>
                    {product?.price}
                  </TableCell>
                  <TableCell className={styles.tableCellBody}>
                    <TextField
                      value={product ? quantity : ""}
                      type="number"
                      onChange={editData}
                      InputProps={{ inputProps: { min: 0, max: 100 } }}
                    >
                      {product?.setEdit}
                    </TextField>
                  </TableCell>
                  <TableCell className={styles.tableCellBody}>
                    {product?.discount}
                  </TableCell>
                  <TableCell className={styles.tableCellBody}>
                    {product?.tax}
                  </TableCell>
                  <TableCell className={styles.tableCellBody}>
                    {totalData}
                  </TableCell>
                  <TableCell>
                    <Box className={styles.display_flex}>
                      <IconButton color="primary" onClick={onAddRow}>
                        <AddIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => onDeleteProduct(row.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
}
