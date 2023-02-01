import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Grid, inputClasses } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import style from "../../styles/styles.module.scss";
import AddProductForm from "./AddProductForm";
import { ProductList } from "./Api";
import { useState, useEffect, useRef } from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export interface Product {
  product_name: string;
  category: string;
  sub_category: string;
  description: string;
  company_id: number | string;
}

export default function Tablemodel() {
  const [state, setState] = useState<Product[]>([]);
  const [productForm, setProductForm] = useState(false);
  const [id, setId] = useState("");

  //   const [reload, setReload] = useState(false)
  // useEffect(() => {
  //      // Add your code here
  //      setReload(true);
  //     // console.log("reload")
  // }, [productForm]);

  // return (
  //  <button onClick={() => setReload(!reload)} >Reload</button>
  // );
  const [userProducts, setuserProducts] = useState<Product>({
    product_name: "",
    category: "",
    sub_category: "",
    description: "",
    company_id: "",
  });

  const form = () => {
    setProductForm(true);
    setId(id);
  };

  useEffect(() => {
    console.log("product list", ProductList);
    return setState(ProductList);
  }, []);

  function onSubmitProductForm(inputs: Product) {
    if (inputs.company_id === "") {
      inputs.company_id = Math.random();
      const list = state;
      list.push(inputs);
      setState(list);
    } else {
      state.map((data) => {
        if (data.company_id === inputs.company_id) {
          data.product_name = inputs.product_name;
          data.category = inputs.category;
          data.sub_category = inputs.sub_category;
          data.description = inputs.description;
        }
      });
    }
  }
  const editProduct = (id: number | string) => {
    let edit = state.find((products) => products.company_id === id);
    if (edit !== undefined) {
      setuserProducts(edit);
      console.log(edit);
    }
  };

  const handleReset = () => {
    setuserProducts({
      product_name: "",
      category: "",
      sub_category: "",
      description: "",
      company_id: "",
    });
    console.log("handle");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={7}>
        <Box className={style.title}>
          <Typography variant="h5">products</Typography>
          <Button
            variant="contained"
            className={style.margin_left}
            onClick={handleReset}
          >
            New
          </Button>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={style.tableCellHead}>
                product_name
              </TableCell>
              <TableCell className={style.tableCellHead}>category</TableCell>
              <TableCell className={style.tableCellHead}>
                sub_category
              </TableCell>
              <TableCell className={style.tableCellHead}>description</TableCell>
              <TableCell className={style.tableCellHead}>company_id</TableCell>
              <TableCell className={style.tableCellHead} align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {state?.map((products: Product) => {
              return (
                <TableRow key={products.company_id}>
                  <TableCell className={style.tableCellBody}>
                    {products.product_name}
                  </TableCell>

                  <TableCell className={style.tableCellBody}>
                    {products.category}
                  </TableCell>
                  <TableCell className={style.tableCellBody}>
                    {products.sub_category}
                  </TableCell>
                  <TableCell className={style.tableCellBody}>
                    {products.description}
                  </TableCell>
                  <TableCell className={style.tableCellBody}>
                    {products.company_id}
                  </TableCell>
                  <TableCell sx={{display:"flex"}}>
                    <IconButton
                      //setToggleSubmit='false'
                      color="primary"
                      onClick={() => {
                        editProduct(products.company_id);
                      }}
                    >
                      <EditIcon />
                    </IconButton>

                    <IconButton
                      color="error"
                      onClick={() => {
                        const productCompany = state.filter(
                          (Product: any) =>
                            Product.company_id !== products.company_id
                        );

                        setState(productCompany);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Grid>
      <Grid item xs={5}>
        <AddProductForm
          onSubmitProductForm={onSubmitProductForm}
          userProducts={userProducts}
          setuserProducts={setuserProducts}
        />
      </Grid>
    </Grid>
  );
}
