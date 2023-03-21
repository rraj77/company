import { Box, Typography } from '@mui/material';
import { ICustomerDetails } from '../interfaces/invoice';
import styles from '../styles/styles.module.scss';

export default function CustomerDetails({ selectedCustomer }: ICustomerDetails) {
  return (
    <Box className={styles.footer_total + ' ' + styles.input_field} key={Math.random()} >
      <Typography variant="h5"> Customer details </Typography>
      {selectedCustomer.name != '' ? (
        <Typography className={styles.padding_right}>Name : {selectedCustomer.name}</Typography>
      ) : null}
      {selectedCustomer.email !== '' ? (
        <Typography className={styles.padding_right}>Eamil : {selectedCustomer.email}</Typography>
      ) : null}
      {selectedCustomer.phone !== '' ? (
        <Typography className={styles.padding_right}>Phone : {selectedCustomer.phone}</Typography>
      ) : null}
      {selectedCustomer.pan !== '' ? (
        <Typography className={styles.padding_right}>Pan : {selectedCustomer.pan}</Typography>
      ) : null}
      {selectedCustomer.gst !== '' ? (
        <Typography className={styles.padding_right}>Gst : {selectedCustomer.gst}</Typography>
      ) : null}
      {selectedCustomer.cin !== '' ? (
        <Typography className={styles.padding_right}>Cin : {selectedCustomer.cin}</Typography>
      ) : null}
      {selectedCustomer.address !== '' ? (
        <Typography className={styles.padding_right}>
          Address : {selectedCustomer.address}
        </Typography>
      ) : null}
      {selectedCustomer.type !== '' ? (
        <Typography className={styles.padding_right}>Type : {selectedCustomer.type}</Typography>
      ) : null}
    </Box>
  );
}
