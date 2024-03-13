import React from 'react';
import PostButton from './ui/button/PostButton';
import {useHistory} from 'react-router-dom'
const PostItem = (props) => {
    
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}.{props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <PostButton onClick = {() => props.removePost(props.post.id)}>Delete</PostButton>
            <PostButton onClick = {() => props.removePost(props.post.id)}>Open</PostButton>
        </div>
    );
};

export default PostItem;