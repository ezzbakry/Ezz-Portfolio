import React,{Suspense} from 'react';
import { Box, Typography, Avatar, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import DarkTheme from '../../Darktheme.js';
import Chip from '@mui/material/Chip';
import Details from '../DetailsinSkills/Details.jsx';
import Divider from '../Divider/Divider.jsx';
export default function Skills() {
    return (
        <>
            <div id='About'>
                <ThemeProvider theme={DarkTheme}>
                    <Divider></Divider>
                    <Box sx={{ display: "flex" }}>
                        <Typography variant='h4' sx={{ margin: "auto", fontWeight: "bold", color: "primary.main" }}>About Me</Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexGrow: 1, marginTop: "30px" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                    <Avatar
                                        alt="Ezz Eldeen Amer"
                                        src="/1721176686779.png"
                                        sx={{
                                            width: { xs: 300, md: 500 },
                                            height: { xs: 300, md: 500 },
                                            borderRadius: '10%',
                                            '&:hover': {
                                                border: '2px ridge #0e4a8a',
                                            },
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box sx={{ marginLeft: { xs: "20px", md: "30px" }, marginTop: { xs: "20px", md: "30px" } }}>
                                    <Typography sx={{ fontWeight: "bold", fontSize: { xs: "18px", md: "24px" }, color: "GrayText", letterSpacing: "3px" }}>
                                        I am a fresh graduated from Faculty of computers and Information,Assiut University.I have a great passion to learn new skills in web development to be able to apply more impactful projects .
                                    </Typography>
                                </Box>
                                <Grid item xs={12} md={12}>
                                    <Box
                                        sx={{
                                            borderTop: '2px solid #cccccc',
                                            marginTop: '20px',
                                            marginBottom: '20px'
                                        }}
                                    />
                                </Grid>
                                <Details />
                            </Grid>
                        </Grid>
                    </Box>

                </ThemeProvider>

            </div>



        </>
    )
}
