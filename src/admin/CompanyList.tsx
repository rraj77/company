import React from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, IconButton, TableBody } from "@mui/material";
import { TableCell, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ICompanyType } from "../interfaces/company";
import { Box } from "@mui/system";
import { useState, useEffect, useRef } from "react";
import { companyDetails } from "../api-calls/Api";
import styles from "./../styles/styles.module.scss";
import AddCompanyForm from "./add-company-form/AddCompanyForm";
export default function CompanyList() {
  const [companyList, setCompanyList] = useState<ICompanyType[]>([]);
  const [editCompany, setEditCompany] = useState<ICompanyType>({
    id: 0,
    name: "",
    email: "",
    phone: 0,
    pan: "",
    gst: "",
    cin: "",
  });
  useEffect(() => {
    return () => {
      setCompanyList(companyDetails);
    };
  }, []);
  const newFormRef: any = useRef();

  const onSubmitCompanyForm = (dataCompany: ICompanyType): void => {
    if (dataCompany.id ) {
      dataCompany.id = Math.random();
      setCompanyList([...companyList,dataCompany]);

    } else {
      companyList.map((data) => {
        if (data.id === dataCompany.id) {
          data.name = dataCompany.name;
          data.email = dataCompany.email;
          data.phone = dataCompany.phone;
          data.pan = dataCompany.pan;
          data.gst = dataCompany.gst;
          data.cin = dataCompany.cin;
        }
      });
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
              onClick={() => newFormRef.current.onNewForm()}
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
              {companyList?.map((companies) => (
                <TableRow key={companies.id}>
                  <TableCell className={styles.tableCellBody}>
                    {companies.name}
                  </TableCell>
                  <TableCell className={styles.tableCellBody}>
                    {companies.email}
                  </TableCell>
                  <TableCell className={styles.tableCellBody}>
                    {companies.phone}
                  </TableCell>
                  <TableCell className={styles.tableCellBody}>
                    {companies.pan}
                  </TableCell>
                  <TableCell className={styles.tableCellBody}>
                    {companies.gst}
                  </TableCell>
                  <TableCell className={styles.tableCellBody}>
                    {companies.cin}
                  </TableCell>
                  <TableCell className={styles.tableCellBody}>
                    <Box className={styles.action}>
                      <IconButton
                        color="primary"
                        onClick={() => {
                          setEditCompany(companies);
                        }}
                      >
                        <EditIcon />
                      </IconButton>

											<IconButton
												color="error"
												onClick={() => {
													const deleteCompany = companyList.filter(
														(company) => company.id !== companies.id
													);
													setCompanyList(deleteCompany);
												}}
											>
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
