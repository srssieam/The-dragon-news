import { getSingleNews } from '@/utils/getsingleNews';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

import React from 'react';

const NewsDetailsPage = async ({ params }) => {
    const { data: news } = await getSingleNews(params.newsId);
    // console.log(news)
    return (
        <Box mt={2}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={6}>
                        <Image src={news.thumbnail_url} alt='news' height={500} width={800}></Image>
                        <Grid container mt={2} spacing={2}>
                            <Grid item lg={6}>
                                <Image src={news.image_url} alt='news' height={500} width={800}></Image>
                            </Grid>
                            <Grid item lg={6}>
                                <Image src={news.image_url} alt='news' height={500} width={800}></Image>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={6}>
                        <Typography variant='h5' component='h2'>{news.title}</Typography>
                        <Box sx={{
                            display: "flex",
                            gap: 3,
                            alignItems: "center"
                        }}>
                            <Avatar alt="author" src={news.author.img} />
                            <Typography>By {news.author.name}</Typography>
                            <Typography>Publish {news.author.published_date}</Typography>
                        </Box>
                        <Typography style={{
                            textAlign: "justify",
                            whiteSpace: "pre-line",
                            margin: "10px 0px",
                            color: "gray"
                        }}>
                            {news.details}
                        </Typography>
                        <Typography variant='h6'>
                            ``Many desktop publishing packages and web page editors now use as their default model text!
                        </Typography>
                        <Typography variant='h6'>-- Jhankar Mahbub</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default NewsDetailsPage;