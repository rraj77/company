import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, IconButton, TableBody } from '@mui/material';
import { TableCell, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ICompanyType } from '../interfaces/company';
import { Box } from '@mui/system';
import { useState, useRef } from 'react';
import styles from './../styles/styles.module.scss';
import AddCompanyForm from './add-company-form/AddCompanyForm';
import { addCompany, deleteCompany, getAllCompany, updateCompany } from '../api/companyApi';

export default function CompanyList() {
  const [companyList, setCompanyList] = useState<ICompanyType[]>([]);
  const [editCompany, setEditCompany] = useState<ICompanyType>({
    id: 0,
    name: '',
    email: '',
    phone: 0,
    pan: '',
    gst: '',
    cin: ''
  });

  const getCompanies = async () => {
    const data: ICompanyType[] = await getAllCompany();
    setCompanyList(data);
  };
  useEffect(() => {
    getCompanies();
  }, []);

  const newFormRef = useRef<any>();

  const onSubmitCompanyForm = async (dataCompany: ICompanyType) => {
    const list = [...companyList];

    if (dataCompany.id === 0) {
      const company = await addCompany(dataCompany);
      if (company.status === 200) {
        setCompanyList([...companyList, dataCompany]);
      }
    } else {
      const company = await updateCompany(dataCompany.id, dataCompany);
      if (company.status === 200) {
        list.map((item) => {
          if (item.id === dataCompany.id) {
            item.name = dataCompany.name;
            item.email = dataCompany.email;
            item.phone = dataCompany.phone;
            item.pan = dataCompany.pan;
            item.gst = dataCompany.gst;
            item.cin = dataCompany.cin;
          }
        });
        setCompanyList(list);
      }
    }
  };

  const onDeleteCompany = async (id: number) => {
    const company = await deleteCompany(id);
    if (company.status === 200) {
      const companies = companyList.filter((company) => company.id !== id);
      setCompanyList(companies);
    }
  };

  return (
    <Box>
      <Grid container columnSpacing={2}>
        <Grid lg={7} md={12} xs={12}>
          <Box className={styles.title}>
            <Typography variant="h5">Companies</Typography>
            <Button
              variant="contained"
              size="small"
              className={styles.margin_left}
              onClick={() => newFormRef.current?.onNewForm()}
            >
              New
            </Button>
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={styles.tableCellHead}>Company</TableCell>
                <TableCell className={styles.tableCellHead}>Email</TableCell>
                <TableCell className={styles.tableCellHead}>Phone</TableCell>
                <TableCell className={styles.tableCellHead}>Pan</TableCell>
                <TableCell className={styles.tableCellHead}>Gst</TableCell>
                <TableCell className={styles.tableCellHead}>Cin</TableCell>
                <TableCell className={styles.tableCellHead} align="center">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {companyList?.map((company) => (
                <TableRow key={company.id}>
                  <TableCell className={styles.tableCellBody}>{company.name}</TableCell>
                  <TableCell className={styles.tableCellBody}>{company.email}</TableCell>
                  <TableCell className={styles.tableCellBody}>{company.phone}</TableCell>
                  <TableCell className={styles.tableCellBody}>{company.pan}</TableCell>
                  <TableCell className={styles.tableCellBody}>{company.gst}</TableCell>
                  <TableCell className={styles.tableCellBody}>{company.cin}</TableCell>
                  <TableCell className={styles.tableCellBody}>
                    <Box className={styles.action}>
                      <IconButton
                        color="primary"
                        onClick={() => {
                          setEditCompany(company);
                        }}
                      >
                        <EditIcon />
                      </IconButton>

                      <IconButton color="error" onClick={() => onDeleteCompany(company.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
        <Grid lg={5} xs={6}>
          <AddCompanyForm
            onSubmitCompanyForm={onSubmitCompanyForm}
            editCompany={editCompany}
            setEditCompany={setEditCompany}
            ref={newFormRef}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
