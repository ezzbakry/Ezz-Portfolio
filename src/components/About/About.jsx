import * as React from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import { Facebook, LinkedIn, GitHub, WhatsApp } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import DarkTheme from '../../Darktheme';
import { ReactTyped } from "react-typed";
export default function About() {

    return (
        <>
            <ThemeProvider theme={DarkTheme}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, row on larger screens
                        alignItems: 'center',
                        justifyContent: { xs: 'center', md: 'space-between' },
                        padding: 4,
                        height: '100vh',
                        textAlign: { xs: 'center', md: 'left' }, // Center text on small screens
                    }}
                >
                    {/* Left Section with Text */}
                    <Box sx={{ mb: { xs: 4, md: 0 }, marginLeft: "40px" }}> {/* Adds margin on bottom on smaller screens */}
                        <Typography variant="h5" color="primary">
                            Hola
                        </Typography>
                        <Typography variant="h3" fontWeight="bold" color="primary">
                            I'm  <span style={{ color: 'primary' }}>Ezz Eldeen Amer</span>
                        </Typography>
                        <Typography sx={{ color: 'primary.main' }}  variant="h4" fontWeight="bold">
                            <span style={{color:"black"}}>I'm a</span> <ReactTyped strings={["Full-Stack Developer","Web Developer"]} typeSpeed={60}
                                backSpeed={60} loop><span></span></ReactTyped>
                        </Typography>

                        {/* Social Media Icons */}
                        <Box sx={{ display: 'flex', gap: 1, mt: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                            <IconButton color="primary" href="https://www.facebook.com/ezzelden.amer?mibextid=LQQJ4d" target="_blank">
                                <Facebook />
                            </IconButton>
                            <IconButton color="primary" href="https://www.linkedin.com/in/ezz-eldeen-amer-b0ba2727b/" target="_blank">
                                <LinkedIn />
                            </IconButton>
                            <IconButton color="primary" href="https://github.com/ezzbakry" target="_blank">
                                <GitHub />
                            </IconButton>
                            <IconButton color="primary" href="http://Wa.me/+2001096238797" target="_blank">
                                <WhatsApp />
                            </IconButton>
                        </Box>
                    </Box>

                    <Box sx={{marginLeft:{xs:"50px"}}}>
                        <Avatar
                            alt="Ezz"
                            src="/WhatsApp Image 2024-07-11 at 13.58.17_a8efe3b9.jpg"
                            sx={{
                                width: { xs: 250, md: 350 }, // Smaller on mobile, larger on desktop
                                height: { xs: 250, md: 350 },
                                marginRight:{xs:"50px",md:"0px"},
                                boxShadow: "0px 6px 40px rgba(0, 0, 0, 0.9)", // Adds shadow to the avatar
                                borderRadius: '50%',
                                justifyContent:"center",
                                alignItems:"center"
                            }}
                        />
                    </Box>
                </Box>

            </ThemeProvider>



        </>
    )
}