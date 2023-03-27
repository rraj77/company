import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { IDriveBreadCrumb } from '../interfaces/drive';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Typography } from '@mui/material';
import styles from '../styles/styles.module.scss';

export default function DriveBreadcrumb({ breadPath, handleClick }: IDriveBreadCrumb) {
  const breadcrumbs = breadPath.map((breadcrumb) => (
    <Typography
      className={styles.cursor_pointer}
      key={breadcrumb.id}
      onClick={() => handleClick(breadcrumb.id)}
    >
      {breadcrumb.name}
    </Typography>
  ));

  return (
    <Breadcrumbs className={styles.padding_0_5} separator={<NavigateNextIcon fontSize="small" />}>
      {breadcrumbs}
    </Breadcrumbs>
  );
}
