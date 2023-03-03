import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, IconButton, Table } from '@mui/material';
import { TableBody, TableCell, Typography } from '@mui/material';
import { TableHead, TableRow, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import { gstTableSchema } from './gstTableSchema';
import styles from '../styles/styles.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IGst } from '../interfaces/gst';
import { addGst, deleteGst, getGstAll, updateGst } from '../api-calls/gstApi';

export default function Gst() {
  const [data, setData] = useState<IGst[]>([]);
  const [editData, setEditdata] = useState<IGst>({
    id: 0,
    name: '',
    description: '',
    tax: 0
  });

  const initialValues: IGst = {
    id: editData.id,
    name: editData.name,
    tax: editData.tax,
    description: editData.description
  };

  const formik = useFormik({
    initialValues,
    validationSchema: gstTableSchema,
    onSubmit: async (values, action) => {
      if (values.id === 0) {
        const gst = await addGst(values);
        if (gst.status === 200) {
          setData([...data, gst.data]);
        }
      } else {
        const gst = await updateGst(values.id, values);
        data.map((datas) => {
          if (datas.id === values.id && gst.status === 200) {
            (datas.name = values.name),
              (datas.description = values.description),
              (datas.tax = values.tax);
          }
        });
      }
      action.resetForm();
      onNewForm();
    }
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

  const onFormSubmit = (e: React.FormEvent) => {
    values.id = editData.id;
    values.name = editData.name;
    values.tax = editData.tax;
    values.description = editData.description;
    handleSubmit();
    e.preventDefault();
  };

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    setEditdata({ ...editData, [e.target.name]: e.target.value });
  };

  const onNewForm = () => {
    setEditdata({
      id: 0,
      name: '',
      description: '',
      tax: 0
    });
    formik.resetForm();
  };

  const getAllGst = async () => {
    const data = await getGstAll();
    setData(data);
  };

  const onDeleteGst = async (id: number) => {
    const gst = await deleteGst(id);
    if (gst.status === 200) {
      const deleteData = data.filter((datas) => datas.id !== id);
      setData(deleteData);
    }
  };

  useEffect(() => {
    getAllGst();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid xs={12} lg={6} md={6}>
        <Box className={styles.title}>
          <Typography variant="h5">Gst</Typography>
          <Button
            variant="contained"
            size="small"
            className={styles.margin_left + ' ' + styles.margin_left}
            onClick={onNewForm}>
            new
          </Button>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={styles.tableCellHead}>Name</TableCell>
              <TableCell className={styles.tableCellHead}>Description</TableCell>
              <TableCell className={styles.tableCellHead}>Tax</TableCell>
              <TableCell className={styles.tableCellHead} align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((d, index) => (
              <TableRow key={index}>
                <TableCell className={styles.tableCellBody}>{d.name}</TableCell>
                <TableCell className={styles.tableCellBody}>{d.description}</TableCell>
                <TableCell className={styles.tableCellBody}>{d.tax}</TableCell>
                <TableCell className={styles.tableCellBody}>
                  <Box className={styles.action}>
                    <IconButton
                      color="primary"
                      onClick={() => {
                        setEditdata(d);
                        formik.resetForm();
                      }}>
                      <EditIcon />
                    </IconButton>

                    <IconButton color="error" onClick={() => onDeleteGst(d.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
      <Grid xs={6} lg={6} md={6}>
        <Box className={styles.title}>
          <Typography variant="h5">
            {editData.id !== 0 ? 'Edit' + ' ' + editData.name : 'Add Gst'}
          </Typography>
        </Box>
        <Box component="form" onSubmit={onFormSubmit}>
          <Box className={styles.display_flex + ' ' + styles.input_field}>
            <Box className={styles.padding_right + ' ' + styles.width_100}>
              <TextField
                type="text"
                variant="outlined"
                label="Enter name"
                name="name"
                fullWidth
                size="small"
                value={editData.name}
                onChange={onValueChange}
                onBlur={handleBlur}
              />
              {errors.name != null && (touched.name ?? false) ? (
                <div className={styles.form_error}>{errors.name}</div>
              ) : null}
            </Box>
            <Box className={styles.width_100}>
              <TextField
                type="text"
                variant="outlined"
                name="tax"
                label="Enter tax"
                size="small"
                fullWidth
                value={editData.tax === 0 ? '' : editData.tax}
                onBlur={handleBlur}
                onChange={onValueChange}
              />
              {errors.tax != null && (touched.tax ?? false) ? (
                <div className={styles.form_error}>{errors.tax}</div>
              ) : null}
            </Box>
          </Box>
          <Box className={styles.input_field}>
            <TextField
              type="text"
              name="description"
              variant="outlined"
              size="small"
              label="Enter description"
              value={editData.description}
              onChange={onValueChange}
              onBlur={handleBlur}
              fullWidth
            />
            {errors.description != null && (touched.description ?? false) ? (
              <div className={styles.form_error}>{errors.description}</div>
            ) : null}
          </Box>

          <Button type="submit" variant="contained" fullWidth>
            submit
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
