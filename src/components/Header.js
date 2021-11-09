import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <AppBar position="static" sx={{ backgroundColor: "white", py: 1, maxWidth: 1000 }}>
                <Toolbar>
                    <Typography variant="h3" component="div" sx={{ flexGrow: 1, color: '#C00205', fontFamily: 'fantasy' }}>
                        Meme Generator
                    </Typography>

                    <img src="https://www.pngall.com/wp-content/uploads/2016/05/Trollface-PNG-Image.png" alt="logo" />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;