import React from 'react';
import { Typography } from '@mui/material';
import styles from '../styles/styles.module.scss';
import Grid from '@mui/material/Unstable_Grid2';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
export default function Footer() {
  return (
    <Grid container spacing={2} className={styles.footer}>
      <Grid lg={4} xs={12} md={12}>
        <Typography>Company</Typography>
        <Typography color="primary">Follow </Typography>
        <Typography color="primary">linkdin&nbsp;|&nbsp;instagram</Typography>
      </Grid>
      <Grid lg={4} xs={12} md={12}>
        <Typography>Address</Typography>

        <Typography className={styles.font_size}>
          <LocationOnIcon className={styles.icon_size} color="primary" /> &nbsp;58, PU4, 4th floor,
          behind C21 mall, scheme no 54 Bhind C21 Mall Indore, Madhya Pradesh 452010 India
        </Typography>
        <Typography className={styles.font_size}>
          <CallIcon className={styles.icon_size} color="primary" />
          &nbsp; &nbsp;0731 350 0095
        </Typography>
        <Typography className={styles.font_size}>
          <EmailIcon className={styles.icon_size} color="primary" />
          &nbsp; backbenchers@backbencherstechnologies.com
        </Typography>
      </Grid>
      <Grid lg={4} xs={12} md={12}>
        <Typography>About the company</Typography>
        <Typography className={styles.font_size}>
          We offer Web Development services in different countries. · Ruby on rails, reactJS,
          angularJS and many more application support currently we are providing.
        </Typography>
      </Grid>
    </Grid>
  );
}
