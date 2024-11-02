import * as React from 'react';
import { Box, Typography, Avatar, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import DividerForTechnical from '../Dividerfortechnical/DividerForTechnical.jsx';

export default function LanguageGrid() {
    return (
        <>
            <Grid container spacing={1}  >
                <Grid item xs={12} md={6}>Python</Grid>
                <Grid item xs={12} md={6}>Java</Grid>
                <DividerForTechnical/>
                <Grid item xs={12} md={6}>C++</Grid>
                <Grid item xs={12} md={6}>C#</Grid>
                <DividerForTechnical/>
                <Grid item xs={12} md={6}>R Language</Grid>
            </Grid>
        </>
    )
}