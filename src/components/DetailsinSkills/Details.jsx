import React,{Suspense} from 'react';
import { Box, Typography, Avatar, Grid, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import DarkTheme from '../../Darktheme.js';
import Button from '@mui/material/Button';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
export default function Details() {
    const details = {
        FullName: "Ezz Eldeen Amer Ali Bakry",
        JobTitle: "Full-Stack Developer",
        Age: 22,
        Location: "Assiut,Egypt",
        Freelance: "Available",
        Email: "ezzeldenamer@gmail.com"
    };
    return (
        <>
            <ThemeProvider theme={DarkTheme}>
                <Box sx={{ marginLeft: { xs: "20px", md: "40px" }, marginTop: { xs: "20px", md: "40px" } }}>
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
                        {Object.entries(details).map(([key, value]) => (
                            <Grid item xs={12} sm={6} key={key}>
                                <Box sx={{ display: "flex" }}>
                                    <Typography
                                        component="span"
                                        variant="h6"
                                        sx={{
                                            fontWeight: 'bold',
                                            letterSpacing: '1px',
                                            fontSize: { xs: "12px", md: "15px" }
                                        }}
                                    >
                                        {key}: <span>{value}</span>
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                    <Box sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-start" }, flexWrap: "wrap", gap: 2, marginTop: { xs: "20px", md: "40px" } }}>
                        <Button
                            sx={{
                                marginRight: { xs: "0", md: "50px" },
                                fontSize: { xs: "0.75rem", md: "1rem" },
                                padding: { xs: '6px 12px', md: '8px 16px' },fontWeight:"bold",
                                
                            }}
                            size="large"
                            href="https://drive.google.com/file/d/1TITxJAUEBd6LDgWp9281b2RyaGsNFi07/view?usp=drivesdk"
                            target="_blank"
                            endIcon={<DocumentScannerIcon />}
                            variant="contained"
                        >
                            View CV
                        </Button>

                        <Button
                            sx={{
                                fontSize: { xs: "0.75rem", md: "1rem" },
                                padding: { xs: '6px 12px', md: '8px 16px' }
                            }}
                            size="large"
                            endIcon={<AccessibilityIcon />}
                            variant="contained"
                        >
                            <Link sx={{ color: '#fff', textDecoration: "none" }} href="#Contact">
                                <Typography sx={{ fontWeight:"bold",color: '#fff',fontSize: { xs: "0.75rem", md: "1rem" } }}>
                                    Hire Me
                                </Typography>

                            </Link>
                        </Button>
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    )
}