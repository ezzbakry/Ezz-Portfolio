import * as React from 'react';
import { Box, Typography, Avatar, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import DividerForTechnical from '../Dividerfortechnical/DividerForTechnical.jsx';

export default function TechniquesGrid() {
    return (
        <>
            <Grid container spacing={1}>

                <Grid item xs={12} md={6}>HTML</Grid>
                <Grid item xs={12} md={6}>CSS</Grid>
                <DividerForTechnical></DividerForTechnical>
                <Grid item xs={12} md={6}>JavaScript</Grid>
                <Grid item xs={12} md={6}>Bootstrap</Grid>
                <DividerForTechnical></DividerForTechnical>
                <Grid item xs={12} md={6}>React.js</Grid>
                <Grid item xs={12} md={6}>MongoDB</Grid>
                <DividerForTechnical></DividerForTechnical>
                <Grid item xs={12} md={6}>jQuery</Grid>
                <Grid item xs={12} md={6}>Node.js</Grid>
            </Grid>
        </>
    )
}