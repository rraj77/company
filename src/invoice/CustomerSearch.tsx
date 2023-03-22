import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { IAutoComplete, ISearchCustomer } from '../interfaces/invoice';
import { getCustomers } from '../api/customerSearchApi';
import { Box, Typography } from '@mui/material';

export default function CustomerSearch({ setSelectedCustomer }: IAutoComplete) {
  const [customers, setCustomers] = useState<ISearchCustomer[]>([]);
  const [search, setSearch] = useState<string | number>('');
  const onValueChange = async (e: { target: { value: string | number } }) => {
    setSearch(e.target.value);
  };

  const getAllCustomers = async () => {
    try {
      const data = await getCustomers(search);
      setCustomers(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCustomers();
  }, []);

  const getOptionLabel = (customer: ISearchCustomer) => {
    return `${customer.name} ${customer.email} ${customer.phone} ${customer.pan} ${customer.gst} ${customer.cin} ${customer.address}`;
  };

  const handleAutocompleteChange = (customer: ISearchCustomer | null) => {
    if (customer != null) {
      setSelectedCustomer(customer);
    }
  };

  return (
    <Autocomplete
      fullWidth
      options={customers}
      size="small"
      autoHighlight
      onChange={(_e, customer) => handleAutocompleteChange(customer)}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(customer) => getOptionLabel(customer)}
      renderOption={(props, customer) => (
        <Box component="li" sx={{ paddingLeft: '1rem' }} key={Math.random()} {...props}>
          <Typography>Name :- {customer.name}</Typography>
          <Box sx={{ paddingLeft: '1rem' }} key={customer.id}>
            <Typography>{customer.email !== '' ? 'Email :- ' + customer.email : ''}</Typography>
            <Typography>{customer.phone !== '' ? 'Phone :- ' + customer.phone : ''}</Typography>
            <Typography>{customer.pan !== '' ? 'Pan :- ' + customer.pan : ''}</Typography>
            <Typography>{customer.gst !== '' ? 'Gst :- ' + customer.gst : ''}</Typography>
            <Typography>{customer.cin !== '' ? 'Cin :- ' + customer.cin : ''}</Typography>
            <Typography>
              {customer.address !== '' ? 'Address :- ' + customer.address : ''}
            </Typography>
            <Typography>{customer.type !== '' ? 'Type :- ' + customer.type : ''}</Typography>
          </Box>
        </Box>
      )}
      renderInput={(params) => (
        <TextField {...params} onChange={onValueChange} label="Choose a customer" {...params} />
      )}
    />
  );
}
