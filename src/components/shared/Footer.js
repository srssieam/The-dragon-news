"use client"

import { Box, Button, Container, IconButton, Typography } from "@mui/material";

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Instagram } from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {

    const navItems = [
        {
            route: "Home",
            pathname: "/",
        },
        {
            route: "Pages",
            pathname: "/pages"
        },
        {
            route: "Category",
            pathname: "/category"
        },
        {
            route: "News",
            pathname: "/news "
        },
        {
            route: "Post",
            pathname: "/Contact"
        },
    ];

    return (
        <Box sx={{ backgroundColor: "#011321", padding: "40px",}}>
            <Container sx={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                <Box>
                    <IconButton sx={{ color: 'white' }}>
                        <FacebookIcon></FacebookIcon>
                    </IconButton>
                    <IconButton sx={{ color: 'white' }}>
                        <TwitterIcon></TwitterIcon>
                    </IconButton>
                    <IconButton sx={{ color: 'white' }}>
                        <YouTubeIcon></YouTubeIcon>
                    </IconButton>
                    <IconButton sx={{ color: 'white' }}>
                        <LinkedInIcon></LinkedInIcon>
                    </IconButton>
                    <IconButton sx={{ color: 'white' }}>
                        <Instagram></Instagram>
                    </IconButton>
                </Box>
                <Box sx={{  justifyContent:"center", display:"flex", flexWrap:"wrap" }}>
                        {navItems.map((item) => (
                            <Link key={item} href={item.pathname}>
                                <Button sx={{color:"#FFF", fontSize:"12px"}}>{item.route}</Button>
                            </Link>
                        ))}
                </Box>
                <Typography variant="body2" sx={{color:"#FFFFFF66", textAlign:"center"}}>@2023 Dragon News. Design by Programming Hero</Typography>
            </Container>
        </Box>
    );
};

export default Footer;