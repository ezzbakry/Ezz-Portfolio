import * as React from 'react';
import DarkTheme from '../../Darktheme.js';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Typography, Grid, Link, Button } from '@mui/material';
import { Email, Facebook, FacebookRounded, GitHub, Instagram, LinkedIn, LocationCityOutlined, PhoneAndroidOutlined, WhatsApp, ExitToAppOutlined } from '@mui/icons-material';


export default function Footer() {
    return (
        <>
            <div id="Contact">
                <ThemeProvider theme={DarkTheme}>
                    <Box
                        component="footer"
                        sx={{
                            backgroundColor: 'primary.c',
                            color: '#fff',
                            padding: '2rem',
                            width: '100%',
                            bottom: 0,
                        }}
                    >
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <Box>
                                    <Typography variant="h6" gutterBottom>
                                        Contact Me
                                    </Typography>
                                    <Box sx={{ display: "flex" }}>
                                        <LocationCityOutlined sx={{ marginRight: "10px", fontSize: { xs: "24px", md: "30px" } }} />
                                        <Typography component="span" sx={{
                                            letterSpacing: '1px',
                                            fontSize: { xs: "15px", md: "22px" }
                                        }} variant="h6" gutterBottom>
                                            Address: Assiut , Egypt
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: "flex" }}>
                                        <Email sx={{ marginRight: "10px", fontSize: { xs: "20px", md: "30px" },marginBottom:{xs:"10px"} }} />
                                        <Typography sx={{
                                            letterSpacing: '1px',
                                            fontSize: { xs: "12px", md: "22px" }
                                        }} variant="h6" gutterBottom>
                                            Email <span> : ezzeldenamer@gmail.com
                                            </span>
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex" }}>
                                        <PhoneAndroidOutlined sx={{ marginRight: "10px", fontSize: { xs: "24px", md: "30px" } }} />
                                        <Typography sx={{
                                            letterSpacing: '1px',
                                            fontSize: { xs: "16px", md: "22px" }
                                        }} variant="h6" gutterBottom>
                                            Call Me : +201096238797
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex" }}>
                                        <ExitToAppOutlined sx={{ marginRight: "10px", marginTop: "10px", fontSize: { xs: "24px", md: "30px" } }} />
                                        <Button href='https://www.freelancer.com/u/Ezz58?sb=t' target='_blank' size='small' sx={{
                                            letterSpacing: '1px',
                                            fontSize: { xs: "15px", md: "20px" },
                                            backgroundColor: "inherit"

                                        }} variant='contained'>Go to Freelancer account </Button>
                                    </Box>
                                    <Box sx={{ display: "flex" }}>
                                        <ExitToAppOutlined sx={{ marginRight: "10px", marginTop: "10px", fontSize: { xs: "24px", md: "30px" } }} />
                                        <Button href='https://mostaql.com/u/EzzEldeen77' target='_blank' size='small' sx={{
                                            letterSpacing: '1px',
                                            fontSize: { xs: "15px", md: "20px" },
                                            backgroundColor: "inherit"

                                        }} variant='contained'>Go to Mostaqel account </Button>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item sx={{ justifyContent: { xs: "center" } }} xs={12} md={6}>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    height="100%"
                                    sx={{ marginLeft: { xs: "30px" }, justifyContent: { xs: "center", md: "flex-end" } }}

                                >
                                    <Box mr={4}>
                                        <Link href="https://www.facebook.com/ezzelden.amer?mibextid=LQQJ4d" target='_blank' color="inherit">
                                            <FacebookRounded fontSize='large' />
                                        </Link>
                                    </Box>
                                    <Box mr={4}>
                                        <Link href="http://Wa.me/+2001096238797" target='_blank' color="inherit">
                                            <WhatsApp fontSize='large' />
                                        </Link>
                                    </Box>
                                    <Box mr={4}>
                                        <Link href="https://www.linkedin.com/in/ezz-eldeen-amer-b0ba2727b/" target='_blank' color="inherit">
                                            <LinkedIn fontSize='large'></LinkedIn>
                                        </Link>
                                    </Box>
                                    <Box mr={4}>
                                        <Link href="https://github.com/ezzbakry" target='_blank' color="inherit">
                                            <GitHub fontSize='large' />

                                        </Link>
                                    </Box>

                                </Box>
                            </Grid>
                        </Grid>
                        <Box
                            mt={4}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            fontSize="0.8rem"
                        >
                            <Typography variant="body2">
                                &copy; 2024, MADE  BY EZZ ELDEEN AMER.
                            </Typography>
                        </Box>
                    </Box>
                </ThemeProvider>

            </div>


        </>
    )
}
