import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import sidebar1 from "@/assets/side1.png"


const Sidebar = () => {
    return (
        <Box>
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={sidebar1} alt='national news'></Image>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom className='max-w-min' sx={{ color: "white", padding: "6px", borderRadius: "6px", backgroundColor: "#FF0000" }}>Technology</Typography>
                        <Typography gutterBottom variant="h6">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography gutterBottom variant="body1" color="text.secondary">
                            By Srs Sieam - Mar 18 2023
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <hr />
            <Grid container marginTop={5} spacing={2}>
                <Grid item xs={4}>
                    <Image src={sidebar1} alt='national news' className="h-full w-full object-cover rounded-md"></Image>
                </Grid>
                <Grid item xs={8}>
                    <Typography >
                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                    </Typography>
                    <Typography color="text.secondary">
                        By Srs Sieam - Mar 18 2023
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Image src={sidebar1} alt='national news' className="h-full w-full object-cover rounded-md"></Image>
                </Grid>
                <Grid item xs={8}>
                    <Typography >
                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                    </Typography>
                    <Typography color="text.secondary">
                        By Srs Sieam - Mar 18 2023
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Image src={sidebar1} alt='national news' className="h-full w-full object-cover rounded-md"></Image>
                </Grid>
                <Grid item xs={8}>
                    <Typography >
                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                    </Typography>
                    <Typography color="text.secondary">
                        By Srs Sieam - Mar 18 2023
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Image src={sidebar1} alt='national news' className="h-full w-full object-cover rounded-md"></Image>
                </Grid>
                <Grid item xs={8}>
                    <Typography >
                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                    </Typography>
                    <Typography color="text.secondary">
                        By Srs Sieam - Mar 18 2023
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Sidebar;