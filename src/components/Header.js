import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    SNS 앱
                </Typography>
                <Button color="inherit">로그인</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
