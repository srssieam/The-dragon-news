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

const NationalNews = () => {
    return (
        <>
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={national1} alt='national news'></Image>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom className='max-w-min' sx={{ color: "white", padding: "6px", borderRadius: "6px", backgroundColor: "#FF0000" }}>Technology</Typography>
                        <Typography gutterBottom variant="h4">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography gutterBottom variant="body1" color="text.secondary">
                            By Srs Sieam - Mar 18 2023
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Grid className='my-11' container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={img1} alt='national news'></Image>
                            </CardMedia>
                            <CardContent>
                                <Typography className='text-xs md:text-2xl' gutterBottom variant="h5">
                                    EU’s New Sanctions Aim to Cut Russia Off From World Bank
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
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={img2} alt='national news'></Image>
                            </CardMedia>
                            <CardContent>
                                <Typography className='text-xs md:text-2xl' gutterBottom variant="h5">
                                    Battle Analysis: Russian Tank Armada vs Ukraine
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
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={img3} alt='national news'></Image>
                            </CardMedia>
                            <CardContent>
                                <Typography className='text-xs md:text-2xl' gutterBottom variant="h5">
                                    France’s Largest Business Summit to Conclude on Mar 22
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
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={img4} alt='national news'></Image>
                            </CardMedia>
                            <CardContent>
                                <Typography className='text-xs md:text-2xl' gutterBottom variant="h5">
                                    Marquez Explains Lack of Confidence During Qatar GP
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
            </Grid>
        </>
    );
};

export default NationalNews;