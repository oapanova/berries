import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    colorSchemes: {
        dark: true,
    },
    palette: {
        mode: 'light',
        primary: {
            main: 'rgba(0, 0, 0, 0.57)',
        },
        secondary: {
            main: 'rgba(0,0,0,0.37)',
        },
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0,0,0,0.37)',
            disabled: 'rgba(0,0,0,0.19)'
        },
        background: {
            default: '#ffffff',
        }
    },
    typography: {
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontSize: 14,
    },
    shape: {
        borderRadius: 10,
    },
});

export default theme;
