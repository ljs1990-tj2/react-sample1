import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Profile = () => {
    return (
        <Card variant="outlined" style={{ marginBottom: '20px' }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    사용자 이름
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    사용자 소개: 안녕하세요! 저는 SNS 애호가입니다.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    팔로워: 120
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    팔로잉: 75
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    최근 활동: 글 5개, 댓글 10개
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Profile;
