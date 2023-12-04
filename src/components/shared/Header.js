import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import HeaderLogo from "@/assets/The Dragon News.png"
import { getCurrentDateTime } from "../../utils/getCurrentDate";


const Header = () => {
    const currentDate = getCurrentDateTime();
    return (
        <Box sx={{paddingY:"30px"}}>
            <Container sx={{display:"flex", justifyContent:"center", gap:"15px", flexDirection:"column", alignItems:"center"}}>
                <Image src={HeaderLogo}  alt="header"></Image>
                <Typography variant="body1">Journalism Without Fear or Favour</Typography>
                <Typography>{currentDate}</Typography>
            </Container>
        </Box>
    );
};

export default Header;