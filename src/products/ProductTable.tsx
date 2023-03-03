import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import style from '../styles/styles.module.scss';
import AddProductForm from './AddProductForm';
import { ProductList } from './Api';
import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IProduct } from '../interfaces/product';

export default function ProductTable() {
  const [productData, setProductData] = useState<IProduct[]>([]);

  const [userProducts, setuserProducts] = useState<IProduct>({
    id: '',
    name: '',
    category: '',
    subCategory: '',
    description: '',
    tax: 0,
    discount: 0,
    price: 0
  });

  useEffect(() => {
    return setProductData(ProductList);
  }, []);

  function onSubmitProductForm(inputs: IProduct) {
    if (!Number.isNaN(inputs.id)) {
      inputs.id = Math.random().toString();
      const list = productData;
      list.push(inputs);
      setProductData(list);
    } else {
      productData.map((data) => {
        if (data.id === inputs.id) {
          data.name = inputs.name;
          data.category = inputs.category;
          data.subCategory = inputs.subCategory;
          data.description = inputs.description;
          data.tax = inputs.tax;
          data.discount = inputs.discount;
        }
      });
    }
  }
  const editProduct = (id: number | string) => {
    const edit = productData.find((products) => products.id === id);
    if (edit !== undefined) {
      setuserProducts(edit);
    }
  };

  const handleReset = () => {
    setuserProducts({
      name: '',
      category: '',
      subCategory: '',
      description: '',
      tax: 0,
      discount: 0,
      id: '',
      price: 0
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8}>
              <Box className={style.title}>
                <Typography variant="h5">products</Typography>
                <Button variant="contained" className={style.margin_left} onClick={handleReset}>
                  New
                </Button>
              </Box>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className={style.tableCellHead}>product_name</TableCell>
                    <TableCell className={style.tableCellHead}>category</TableCell>
                    <TableCell className={style.tableCellHead}>sub_category</TableCell>
                    <TableCell className={style.tableCellHead}>description</TableCell>
                    <TableCell className={style.tableCellHead}>tax</TableCell>
                    <TableCell className={style.tableCellHead}>discount</TableCell>
                    <TableCell className={style.tableCellHead} align="center">
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {productData?.map((products: IProduct) => {
                    return (
                      <TableRow key={products.id}>
                        <TableCell className={style.tableCellBody}>{products.name}</TableCell>

                        <TableCell className={style.tableCellBody}>{products.category}</TableCell>
                        <TableCell className={style.tableCellBody}>
                          {products.subCategory}
                        </TableCell>
                        <TableCell className={style.tableCellBody}>
                          {products.description}
                        </TableCell>
                        <TableCell className={style.tableCellBody}>{products.tax}</TableCell>
                        <TableCell className={style.tableCellBody}>{products.discount}</TableCell>
                        <TableCell sx={{ display: 'flex' }}>
                          <IconButton
                            color="primary"
                            onClick={() => {
                             if(products.id!==undefined){
                              editProduct(products.id);
                             }
                            }}
                          >
                            <EditIcon />
                          </IconButton>

                          <IconButton
                            color="error"
                            onClick={() => {
                              const productCompany = productData.filter(
                                (Product) => Product.id !== products.id
                              );

                              setProductData(productCompany);
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
          <Grid item xs={12} sm={12} md={4}>

              <AddProductForm
                onSubmitProductForm={onSubmitProductForm}
                userProducts={userProducts}
                setuserProducts={setuserProducts}
              />
              
            </Grid>
        </Grid>
    </Box>
  );
}
