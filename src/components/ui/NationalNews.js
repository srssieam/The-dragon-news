import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import national1 from "@/assets/National1.png"
import Image from 'next/image';
import img1 from "@/assets/Rectangle 9.png";
import img2 from "@/assets/Rectangle 10.png";
import img3 from "@/assets/Rectangle 11.png";
import img4 from "@/assets/Rectangle 12.png";
import { getAllNews } from '@/utils/getAllNews';

const NationalNews = async () => {
    const { data } = await getAllNews();
    return (
        <>
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={data[0].thumbnail_url} width={800} height={500} alt='national news'></Image>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom className='max-w-min' sx={{ color: "white", padding: "6px", borderRadius: "6px", backgroundColor: "#FF0000" }}>{data[0].category}</Typography>
                        <Typography gutterBottom variant="h4">
                            {data[0].title}
                        </Typography>
                        <Typography gutterBottom variant="body1" color="text.secondary">
                            By {data[0].author.name} - {data[0].author.published_date}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {data[0].details.length > 200 ? data[0].details.slice(0, 200) + "..." : data[0].details}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Grid className='my-11' container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    data.slice(0, 4).map(news => (
                        <Grid key={news.id} item xs={6}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia sx={{ "& img": { width: "100%", height: "250px" } }}>
                                        <Image src={news.thumbnail_url} width={800} height={300} alt='national news'></Image>
                                    </CardMedia>
                                    <CardContent>
                                        <Typography className='text-xs md:text-2xl' gutterBottom variant="h5">
                                            {news.title}
                                        </Typography>
                                        <Typography className='text-xs md:text-xl' gutterBottom variant="body1" color="text.secondary">
                                            By Srs Sieam - Mar 18 2023
                                        </Typography>
                                        <Typography className='text-xs md:text-xl' color="text.secondary">
                                            It is a long established fact that a reader will be distracted by the readable.....
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </>
    );
};

export default NationalNews;