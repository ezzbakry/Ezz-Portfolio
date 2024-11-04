import * as React from 'react';
import { Box, Typography, Avatar, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import DarkTheme from '../../Darktheme.js';
import Divider from '../Divider/Divider.jsx';
import DividerForTechnical from '../Dividerfortechnical/DividerForTechnical.jsx';
import LanguageGrid from '../LanguageGrid/LanguageGrid.jsx';
import TechniquesGrid from '../TechniquesGrid/TechniquesGrid.jsx';
import { ReactTyped } from "react-typed";
export default function Technical() {
    return (
        <>
            <ThemeProvider theme={DarkTheme}>
                <Divider></Divider>
                <Box sx={{ display: "flex" }}>
                    <Typography variant='h4' sx={{ margin: "auto", fontWeight: "bold", color: "#1976d2" }}>Technical Skills</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: "space-between", marginTop: "20px" }}>
                    <Box sx={{ flex: 1, justifyContent: "center", textAlign: 'center' ,margin:{xs:"20px",md:"0px"}}}>
                        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1976d2", marginBottom: "50px" }}>
                            <ReactTyped strings={["Web Techniques"]} typeSpeed={70}
                                backSpeed={70} loop>
                                <span></span>
                            </ReactTyped>
                        </Typography>
                        <span style={{ fontWeight: 'bold' }}><TechniquesGrid /></span>
                    </Box>
                    <Box sx={{ flex: 1, justifyContent: "center", textAlign: 'center' }}>

                        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1976d2", marginBottom: "50px" }}><ReactTyped strings={["Programming Languages"]} typeSpeed={50}
                            backSpeed={50} loop ><span></span></ReactTyped></Typography>

                        <span style={{ fontWeight: 'bold' }}>
                            <LanguageGrid />
                        </span>
                    </Box>
                </Box>
            </ThemeProvider >
        </>
    )
}