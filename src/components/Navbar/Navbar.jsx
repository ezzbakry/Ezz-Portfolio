import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DarkTheme from '../../Darktheme.js';
import { ThemeProvider } from '@mui/material/styles';
import { Link as ScrollLink } from 'react-scroll';
const drawerWidth = 250;
const navItems = ["Home",'About', 'Projects', 'Contact'];
function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const handleLinkClick = () => {
        setMobileOpen(false);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h4" sx={{ my: 2, color: "#fff" }}>
                Portfolio
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center', justifyContent: "center" }}>
                            <ScrollLink
                                to={item}
                                smooth={true}
                                duration={1000}
                                onClick={handleLinkClick}
                            >
                                <ListItemText sx={{ color: "#fff", textAlign: "center" }} primary={item} />
                            </ScrollLink>

                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{ display: 'flex', marginBottom: "40px" }}>
                <CssBaseline />
                <ThemeProvider theme={DarkTheme}>
                    <AppBar component="nav">
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                variant="h4"
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                            >
                                Portfolio
                            </Typography>
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                {navItems.map((item) => (
                                    <Button key={item} sx={{ color: '#fff', margin: "20px" }}>
                                        <ScrollLink
                                            to={item}
                                            smooth={true}
                                            duration={1000}
                                            offset={-40}
                                        >
                                            <Typography variant='h6'>
                                                {item}

                                            </Typography>
                                        </ScrollLink>


                                    </Button>
                                ))}
                            </Box>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>

                <nav>
                    <ThemeProvider theme={DarkTheme}>
                        <Drawer
                            container={container}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: { xs: 'block', sm: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >
                            {drawer}
                        </Drawer>


                    </ThemeProvider>

                </nav>
            </Box>



        </>


    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;