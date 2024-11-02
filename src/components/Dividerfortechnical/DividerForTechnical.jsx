import * as React from 'react';
import { Box, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import DarkTheme from '../../Darktheme';


export default function DividerForTechnical() {
    return (
        <>
            <ThemeProvider theme={DarkTheme}>
                <Grid item sx={{ display: { xs: "grid", md: "block" },marginLeft:{xs:"auto"},marginRight:{xs:"auto"} }} xs={8} md={12}>
                    <Box sx={{ justifyContent: 'center' }}>
                        <Box
                            sx={{
                                borderTop: '2px solid #cccccc',
                                marginTop: '10px',
                                marginBottom: '10px',
                                width: "70%",
                                marginLeft: "auto",
                                marginRight: "auto",


                            }}
                        />
                    </Box>

                </Grid>
            </ThemeProvider>

        </>
    )
}