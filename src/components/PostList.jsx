import React from 'react';
import PostItem from "./PostItem";

const PostList = ({ posts, title, removePost }) => {

    if (!posts.length) {

        return <h1 style={{ textAlign: 'center' }}>Posts not find :(</h1>
        
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            {posts.map((post, index) =>
                <PostItem removePost={removePost} number={post.id} key={post.id} post={{ id: post.id, title: post.title, body: post.body }} />
            )}
        </div>
    );
};

export default PostList;