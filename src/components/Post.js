import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const Post = ({ username, title, content, timestamp }) => {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <Card variant="outlined" style={{ marginBottom: '20px' }}>
            <CardContent>
                <Typography variant="h6" color="text.secondary">
                    {username} - {timestamp}
                </Typography>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
                <Typography variant="body2" color="text.primary">
                    좋아요: {likes}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleLike}>Like</Button>
                <Button size="small">Comment</Button>
            </CardActions>
        </Card>
    );
};

export default Post;
