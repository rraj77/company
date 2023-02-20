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
import { CustomerList } from './Api';
import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCustomerForm from './AddCustomerForm';
import { ICustomer } from '../interfaces/customer';

export default function Customertable() {
  const [data, setData] = useState<ICustomer[]>([]);
  const [file, setFile] = useState('');
  const [userCustomer, setuserCustomer] = useState<ICustomer>({
    id: 0,
    avatar: '',
    first_name: '',
    last_name: '',
    email: '',
    phone_no: 0,
    gst: ''
  });
  useEffect(() => {
    return setData(CustomerList);
  }, []);

  function onSubmitCustomerForm(inputs: ICustomer, file: string) {
    if (!Number.isNaN(inputs.id)) {
      inputs.avatar = file;
      inputs.id = Math.random();
      setData([...data, inputs]);
    } else {
      data.map((Data) => {
        if (Data.id === inputs.id) {
          Data.avatar = file;
          Data.first_name = inputs.first_name;
          Data.last_name = inputs.last_name;
          Data.email = inputs.email;
          Data.phone_no = inputs.phone_no;
          Data.gst = inputs.gst;
        }
      });
    }
  }

  const editCustomer = (id: number | string) => {
    const edit = data.find((customer) => customer.id === id);
    if (edit !== undefined) {
      setFile(edit.avatar);
      setuserCustomer(edit);
    }
  };

  const handleReset = () => {
    setuserCustomer({
      id: 0,
      avatar: '',
      first_name: '',
      last_name: '',
      email: '',
      phone_no: 0,
      gst: ''
    });
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={8}>
        <Box className={style.title}>
          <Typography variant="h5">customers</Typography>
          <Button variant="contained" className={style.margin_left} onClick={handleReset}>
            New
          </Button>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={style.tableCellHead}>Avatar</TableCell>
              <TableCell className={style.tableCellHead}>First_name</TableCell>
              <TableCell className={style.tableCellHead}>Last_name</TableCell>
              <TableCell className={style.tableCellHead}>Email</TableCell>
              <TableCell className={style.tableCellHead}>Phone_no</TableCell>
              <TableCell className={style.tableCellHead}>Gst</TableCell>
              <TableCell className={style.tableCellHead} align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data?.map((customers: ICustomer) => {
              return (
                <TableRow key={customers.id}>
                  <TableCell className={style.tableCellBody}>
                    <img
                      src={process.env.PUBLIC_URL + customers.avatar}
                      style={{
                        height: '30px',
                        width: '40px',
                        borderRadius: '100%'
                      }}
                    />
                  </TableCell>
                  <TableCell className={style.tableCellBody}>{customers.first_name}</TableCell>
                  <TableCell className={style.tableCellBody}>{customers.last_name}</TableCell>
                  <TableCell className={style.tableCellBody}>{customers.email}</TableCell>
                  <TableCell className={style.tableCellBody}>{customers.phone_no}</TableCell>
                  <TableCell className={style.tableCellBody}>{customers.gst}</TableCell>
                  <TableCell sx={{ display: 'flex' }}>
                    <IconButton
                      color="primary"
                      onClick={() => {
                        editCustomer(customers.id);
                      }}
                    >
                      <EditIcon />
                    </IconButton>

                    <IconButton
                      color="error"
                      onClick={() => {
                        const customerCompany = data.filter(
                          (Customer) => Customer.id !== customers.id
                        );

                        setData(customerCompany);
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
        <AddCustomerForm
          onSubmitCustomerForm={onSubmitCustomerForm}
          userCustomer={userCustomer}
          setuserCustomer={setuserCustomer}
          file={file}
          setFile={setFile}
        />
      </Grid>
    </Grid>
  );
}
