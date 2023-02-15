import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, IconButton, Table } from '@mui/material';
import { TableBody, TableCell, Typography } from '@mui/material';
import { TableHead, TableRow, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import { vatTableSchema } from './vatTableSchema';
import styles from '../../styles/styles.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { VatProp } from '../../interfaces/interfaces';

export default function Vat() {
	const [data, setData] = useState<VatProp[]>([]);
	const [editData, setEditdata] = useState<VatProp>({
		id: '',
		name: '',
		description: '',
		tax: ''
	});

	const initialValues: VatProp = {
		id: editData.id,
		name: editData.name,
		tax: editData.tax,
		description: editData.description
	};

	const formik = useFormik({
		initialValues,
		validationSchema: vatTableSchema,
		onSubmit: (values, action) => {
			if (values.id === '') {
				const list = data;
				values.id = Math.random();
				list.push(values);
				setData(list);
			} else {
				data.map((datas) => {
					if (datas.id === values.id) {
						datas.name = values.name;
						datas.tax = values.tax;
						datas.description = values.description;
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
			id: '',
			name: '',
			description: '',
			tax: ''
		});
		formik.resetForm();
	};

	return (
		<Grid container spacing={2}>
			<Grid xs={12} lg={6} md={6}>
				<Box className={styles.title}>
					<Typography variant="h5">Vat</Typography>
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
						{data?.map((d: any, index: number) => (
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
												const deleteData = data.filter((datas) => datas.id !== d.id);
												setData(deleteData);
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
						{editData.id ? 'Edit' + ' ' + editData.name : 'Add Vat'}
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
							{errors.name && touched.name ? (
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
								value={editData.tax}
								onBlur={handleBlur}
								onChange={onValueChange}
							/>
							{errors.tax && touched.tax ? (
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
						{errors.description && touched.description ? (
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
