import { getAllCategories } from "@/utils/getAllCategories";
import Button from '@mui/material/Button';
import { Box, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";


const CategoryList = async () => {
    const {data: allCategories} = await getAllCategories();
    console.log(allCategories)
    return (
        <Box sx={{bgcolor:"#F3F3F3", borderRadius:"10px"}} p={4}>
            <Typography variant="h6">Category</Typography>
            <Divider></Divider>
            <Stack rowGap={1} mt={2}>
                {
                    allCategories.map(category => (
                    <Button variant="outlined" key={category.id} sx={{color:"#15151599", borderColor:"#15151599", ":hover": { backgroundColor: "blue", color: "white"}}}>
                        {/* <Link href={category.title}>{category.title}</Link> */}
                        <Link href={`/categories/news?category=${category.title.toLowerCase()}`}>{category.title}</Link>
                    </Button>
                    ))
                }
            </Stack>
        </Box>
    );
};

export default CategoryList;