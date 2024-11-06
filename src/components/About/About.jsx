import * as React from 'react';
import { Box, Typography, Avatar, IconButton, Grid } from '@mui/material';
import { Facebook, LinkedIn, GitHub, WhatsApp } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import DarkTheme from '../../Darktheme';
import { ReactTyped } from "react-typed";
import { styled } from "@mui/material/styles";
const StyledAvatar = styled(Avatar)(({ theme }) => ({

    margin: theme.spacing(3),
}));

const Title = styled(Typography)({
    color: "#fff",
});

const Subtitle = styled(Typography)({
    color: "tan",
    textTransform: "uppercase",
});

const TypedContainer = styled(Box)(({ theme }) => ({

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform:"translate(-50%, -50%)",
    textAlign: "center",
    width: "100%", // Full width to stay within parent boundaries
    height: "100%",
}));
export default function About() {


    return (
        <>
            <div id='about' className='about'>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh", // Full viewport height for this section
                    width: "100vw", // Full viewport width for this section
                    overflow: "hidden",
                }}
                >
                    <ThemeProvider theme={DarkTheme}>
                        <TypedContainer>
                            <Grid container justifyContent="center">
                                <StyledAvatar sx={{
                                    width: { xs: 200, md: 350 }, // Smaller on mobile, larger on desktop
                                    height: { xs: 200, md: 350 },
                                }} src='/WhatsApp Image 2024-07-11 at 13.58.17_a8efe3b9.jpg' alt="Ezz" />
                            </Grid>
                            <Title variant="h4">
                                <ReactTyped strings={["Ezz Eldeen Amer"]} typeSpeed={50} />
                            </Title>
                            <Subtitle variant="h5">
                                <ReactTyped
                                    strings={[
                                        "Full-Stack Developer",
                                        "Web Developer",
                                    ]}
                                    typeSpeed={50}
                                    backSpeed={50}
                                    loop
                                />
                            </Subtitle>
                            <Box sx={{ display: 'flex', gap: 1, mt: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                <IconButton sx={{ color: "tan" }} size='large' href="https://www.facebook.com/ezzelden.amer?mibextid=LQQJ4d" target="_blank">
                                    <Facebook />
                                </IconButton>
                                <IconButton sx={{ color: "tan" }} size='large' href="https://www.linkedin.com/in/ezz-eldeen-amer-b0ba2727b/" target="_blank">
                                    <LinkedIn />
                                </IconButton>
                                <IconButton sx={{ color: "tan" }} size='large' href="https://github.com/ezzbakry" target="_blank">
                                    <GitHub />
                                </IconButton>
                                <IconButton sx={{ color: "tan" }} size='large' href="http://Wa.me/+2001096238797" target="_blank">
                                    <WhatsApp />
                                </IconButton>
                            </Box>
                        </TypedContainer>



                    </ThemeProvider>

                </Box>
            </div>




        </>
    )
}