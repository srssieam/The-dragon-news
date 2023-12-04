"use client"

import logo from "@/assets/logo.png"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Instagram } from "@mui/icons-material";
import Link from "next/link";

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


const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static" sx={{backgroundColor:'#151515'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                        <Image src={logo} alt='logo' />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' }
                            }}
                        >
                            {navItems.map((item) => (
                                <MenuItem key={item} onClick={handleCloseNavMenu} sx={{backgroundColor:'#151515', color:"white"}} >
                                    <Link  href={item.pathname}>{item.route}</Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                        <Image src={logo} alt="logo" />
                    </Box>

                    <Box sx={{ flexGrow: 1, justifyContent:"center", display: { xs: 'none', md: 'flex' } }}>
                        {navItems.map((item) => (
                            <Link key={item} href={item.pathname}>
                                <Button sx={{color:"#FFF"}}>{item.route}</Button>
                            </Link>
                        ))}
                    </Box>
                    <Box sx={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
                        <IconButton sx={{ color: 'white'}}>
                            <FacebookIcon></FacebookIcon>
                        </IconButton>
                        <IconButton sx={{ color: 'white'}}>
                            <TwitterIcon></TwitterIcon>
                        </IconButton>
                        <IconButton sx={{ color: 'white'}}>
                            <YouTubeIcon></YouTubeIcon>
                        </IconButton>
                        <IconButton sx={{ color: 'white'}}>
                            <LinkedInIcon></LinkedInIcon>
                        </IconButton>
                        <IconButton sx={{ color: 'white'}}>
                            <Instagram></Instagram>
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;