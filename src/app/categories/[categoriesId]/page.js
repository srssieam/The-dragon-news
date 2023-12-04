import { getCategoryNews } from '@/utils/getCategoryNews';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DynamicNewsPage = async ({ params, searchParams }) => {
    // console.log(searchParams)
    const { data } = await getCategoryNews(searchParams.category);
    console.log(data)
    return (
        <div className='my-7'>
            {/* <h1>Dynamic news page {params.categoriesId}</h1> */}
            <h1>Total <strong>{searchParams.category}</strong> news: {data.length}</h1>
            <Grid className='' container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} xs={12}>
                {
                    data.map(news => (
                        <Grid item key={news.id} xs={12} md={6} >
                            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
                                <Card >
                                    <CardActionArea>
                                        <CardMedia sx={{ "& img": { width: "100%", height: "250px" } }}>
                                            <Image src={news.thumbnail_url} height={100} width={800} alt='national news'></Image>
                                        </CardMedia>
                                        <CardContent>
                                            <Typography className='text-xs md:text-2xl' gutterBottom variant="h5">
                                                {news.title.length > 30 ? news.title.slice(0, 30) + "..." : news.title}
                                            </Typography>
                                            <Typography className='text-xs md:text-xl' gutterBottom variant="body1" color="text.secondary">
                                                By {news.author.name} - {news.author.published_date}
                                            </Typography>
                                            <Typography className='text-xs md:text-xl' color="text.secondary">
                                                {news.details.length > 200 ? news.details.slice(0, 200) + "..." : news.details}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
};

export default DynamicNewsPage;