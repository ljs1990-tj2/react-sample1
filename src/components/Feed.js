import React from 'react';
import Post from './Post';

const Feed = () => {
    const posts = [
        { id: 1, username: 'user1', title: '첫 번째 포스트', content: '첫 번째 포스트 내용입니다.', timestamp: '2024-10-01' },
        { id: 2, username: 'user2', title: '두 번째 포스트', content: '두 번째 포스트 내용입니다.', timestamp: '2024-10-02' },
        { id: 3, username: 'user3', title: '세 번째 포스트', content: '세 번째 포스트 내용입니다.', timestamp: '2024-10-03' },
    ];

    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} {...post} />
            ))}
        </div>
    );
};

export default Feed;
