import React from 'react'
import DrawerAppBar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Footer from './components/Footer/Footer';

export default function Applayout() {
    return (
        <>
            <DrawerAppBar>
            </DrawerAppBar>
            <Outlet/>
        </>
    );
}