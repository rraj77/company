import React, { useContext, useState } from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import styles from './../styles/styles.module.scss';

import { contextProvider } from '../context/Context';

export default function ImageUploadModel() {
	const { openModal, setOpenModal } = useContext(contextProvider);
	const [file, setFile] = useState('');
	const handleClose = () => setOpenModal(false);
	const cancel = () => {
		setOpenModal(false);
		setFile('');
	};
	const image = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) {
			return;
		}
		setFile(URL.createObjectURL(e.target.files[0]));
	};

	return (
		<Box>
			<Modal keepMounted open={openModal} onClose={handleClose}>
				<Box className={styles.popup_style}>
					<Box component="form">
						<Typography variant="h5">Upload file</Typography>
						{file !== '' ? <Box component="img" src={file} className={styles.img} /> : null}

						<Box className={styles.input_field}>
							<TextField type="file" fullWidth size="small" onChange={image} />
						</Box>
						<Box>
							<Button type="reset" onClick={cancel}>
								Cancel
							</Button>
							<Button className={styles.save_button} variant="contained" type="submit">
								save
							</Button>
						</Box>
					</Box>
				</Box>
			</Modal>
		</Box>
	);
}
