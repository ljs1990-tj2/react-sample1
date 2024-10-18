import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    SNS 앱
                </Typography>
                <Button color="inherit">홈</Button>
                <Button color="inherit">프로필</Button>
                <Button color="inherit">알림</Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
