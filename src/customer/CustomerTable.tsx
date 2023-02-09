
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import style from "../../styles/styles.module.scss";

import {CustomerList } from "./Api";
import { useState, useEffect} from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export interface Customer {
  

        id:number,
        first_name: string,
        last_name: string,
        email: string,
        phone_no: number,
}

export default function Tablemodel() {
  const [data, setData] = useState<Customer[]>([]);


  useEffect(() => {
   
    return setData(CustomerList);
  }, []);

  

  return (
    <Grid container spacing={2}>
      <Grid item xs={7}>
        <Box className={style.title}>
          <Typography variant="h5">customers</Typography>
          <Button
            variant="contained"
            className={style.margin_left}
           
          >
            New
          </Button>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={style.tableCellHead}>
              first_name
              </TableCell>
              <TableCell className={style.tableCellHead}>last_name</TableCell>
              <TableCell className={style.tableCellHead}>
              email
              </TableCell>
              <TableCell className={style.tableCellHead}>phone_no</TableCell>
              
              <TableCell className={style.tableCellHead} align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data?.map((customers: Customer) => {
              return (
                <TableRow key={customers.id}>
                  <TableCell className={style.tableCellBody}>
                    {customers.first_name}
                  </TableCell>

                  <TableCell className={style.tableCellBody}>
                    {customers.last_name}
                  </TableCell>
                  <TableCell className={style.tableCellBody}>
                    {customers.email}
                  </TableCell>
                  <TableCell className={style.tableCellBody}>
                    {customers.phone_no}
                  </TableCell>
                 
                  <TableCell sx={{display:"flex"}}>
                    <IconButton
                      color="primary"
                      
                    >
                      <EditIcon />
                    </IconButton>

                    <IconButton
                      color="error"
                     
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
      
      </Grid>
    </Grid>
  );
}
