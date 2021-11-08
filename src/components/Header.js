import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                        Meme Generator
                    </Typography>

                    <img src="https://www.pngall.com/wp-content/uploads/2016/05/Trollface-PNG-Image.png" alt="logo" />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;