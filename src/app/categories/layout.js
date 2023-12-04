import CategoryList from '@/components/ui/CategoriyList/CategoryList';
import { Box, Container, Grid } from '@mui/material';
import React from 'react';

const CategoriesLayout = ({children}) => {
    return (
        <Box>
            <Container>
                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={3}>
                        <CategoryList></CategoryList>
                    </Grid>
                    <Grid item xs={9}>
                        {children}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
};

export default CategoriesLayout;