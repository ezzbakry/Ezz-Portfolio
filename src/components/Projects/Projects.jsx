import * as React from 'react';
import { Box, Typography, Avatar, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import DarkTheme from '../../Darktheme.js';
import Divider from '../Divider/Divider.jsx';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

export default function Projects() {
    const projectdetails = [
        {
            image: "/Screenshot 2024-10-31 162144.jpg",
            title: "University Mangament System",
            techniques: "React.js & Node.js & MongoDB & MaterialUI",
            codelink: "https://github.com/MoaidHashem3/UMS-University-Management-System-Frontend",
            viewlink: "https://ums-university-management-system-frontend.vercel.app/"

        },
        {
            image: "/products.jpg",
            title: "Products Dashboard",
            techniques: "React.js & Node.js & MongoDB & React Bootstrap & Restful API",
            codelink: "https://github.com/ezzbakry/Products-dashboard",
            viewlink: "https://products-dashboard-alpha.vercel.app/"
        },
        {
            image: "/coffee.jpg",
            title: "Coffee Shop Landing Page",
            techniques: "HTML & CSS & JavaScript & Bootstrap",
            codelink: "https://github.com/ezzbakry/coffee-shop-website",
            viewlink: "https://coffeeshop22.netlify.app/"
        },
        {
            image: "/band.jpg",
            title: "Band Bootstrap theme",
            techniques: "HTML & CSS & JavaScript & Bootstrap",
            codelink: "https://github.com/ezzbakry/bootstrap-band",
            viewlink: "https://clever-rolypoly-0a88cc.netlify.app/boot.html"
        },
        {
            image: "/crud.jpg",
            title: " Simple CRUD Interface ",
            techniques: "HTML & CSS & JavaScript & Bootstrap",
            codelink: "https://github.com/ezzbakry/CRUD-project",
            viewlink: "https://simplecrud22.netlify.app/crud%20project/crud"
        },

    ]
    return (
        <>
            <div id='Projects'>
                <ThemeProvider theme={DarkTheme}>
                    <Divider></Divider>
                    <Box sx={{ display: "flex" }}>
                        <Typography variant='h4' sx={{ margin: "auto", fontWeight: "bold", color: "#1976d2" }}>Projects</Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "30px" }}>
                        <Grid container spacing={3} justifyContent="center">
                            {projectdetails.map((prj, index) => (
                                <Grid key={index} item xs={12} sm={6} md={4}>
                                    <Card sx={{
                                        maxWidth: 600,
                                        minHeight: {xs:300,md:420},
                                        backgroundColor: "white",
                                        '&:hover': {
                                            border: '1px solid #cccccc ',
                                            boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)"
                                        },
                                    }}>
                                        <CardMedia
                                            component="img"
                                            alt="project image"
                                            height="100%"
                                            image={prj.image}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom sx={{ color: "black" }} variant="h5" component="div">
                                                {prj.title}
                                            </Typography>
                                            <Typography variant="h6" sx={{ color: 'GrayText' }}>
                                                Techniques used : {prj.techniques}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button href={prj.codelink} target='_blank' size="large">Show code</Button>
                                            <Button href={prj.viewlink} target='_blank' size="large">View</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </ThemeProvider>

            </div>


        </>
    )

}