import { createTheme } from '@mui/material/styles';
const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
            c: "#06111c"
        },
    },
    typography:{
        fontFamily: "DM Sans",
    }
});
export default DarkTheme;