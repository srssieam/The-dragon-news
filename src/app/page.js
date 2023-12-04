import NationalNews from '@/components/ui/NationalNews';
import Sidebar from '@/components/ui/Sidebar';
import { Grid, Typography } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={8}>
          <Typography variant='h4'>National News</Typography>
          <NationalNews></NationalNews>
        </Grid>
        <Grid item xs={4}>
        <Typography variant='h4'>Sylhet</Typography>
        <Sidebar></Sidebar>
        </Grid>

      </Grid>
  );
};

export default HomePage;