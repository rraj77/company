import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, IconButton, Modal, Table } from '@mui/material';
import { TableBody, TableCell, Typography } from '@mui/material';
import { TableHead, TableRow, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import { vatTableSchema } from './vatTableSchema';
import styles from '../../styles/styles.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IGst } from '../../interfaces/gst';
import { addGst, deleteGst, getGstAll, updateGst } from '../../api/gstApi';

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
    validationSchema: vatTableSchema,
    onSubmit: async (values, action) => {
      const list = [...data];
      if (values.id === 0) {
        const gstData = await addGst(values);
        if (gstData.status === 200) {
          setData([...data, values]);
        }
      } else {
        const gstData = await updateGst(values.id, values);
        if (gstData.status === 200) {
          list.map((item) => {
            if (item.id === values.id) {
              item.name = values.name;
              item.tax = values.tax;
              item.description = values.description;
            }
          });
          setData(list);
        }
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
    const name = e.target.name;
    if (name === 'tax' && Number(e.target.value) <= 100) {
      handleChange(e);
      setEditdata({ ...editData, [e.target.name]: Number(e.target.value) });
    } else if (name !== 'tax') {
      handleChange(e);
      setEditdata({ ...editData, [e.target.name]: e.target.value });
    }
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

  const [open, setOpen] = React.useState(false);
  const [onDelete, setOnDelete] = useState<number>(0);
  const handleOpen = (id: number) => {
    setOpen(true);
    setOnDelete(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getAllGst = async () => {
    const data = await getGstAll();
    setData(data);
  };

  useEffect(() => {
    getAllGst();
  }, []);

  const onDeleteVat = async () => {
    const gstData = await deleteGst(onDelete);
    if (gstData.status === 200) {
      const deleteData = data.filter((item) => item.id !== onDelete);
      setData(deleteData);
    }
    setOpen(false);
  };

  return (
    <Grid container spacing={2}>
      <Grid xs={12} lg={6} md={6}>
        <Modal open={open}>
          <Box className={styles.popup_style}>
            <Typography variant="h6">Are u sure you want to delete?</Typography>
            <Button onClick={handleClose} size="small">
              Cancel
            </Button>
            <Button size="small" color="error" onClick={onDeleteVat}>
              Delete
            </Button>
          </Box>
        </Modal>
        <Box className={styles.title}>
          <Typography variant="h5">Gst</Typography>
          <Button
            variant="contained"
            size="small"
            className={styles.margin_left + ' ' + styles.margin_left}
            onClick={onNewForm}
          >
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
            {data.map((d, index: number) => (
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
                      }}
                    >
                      <EditIcon />
                    </IconButton>

                    <IconButton
                      color="error"
                      onClick={() => {
                        handleOpen(d.id);
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
                type="number"
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
