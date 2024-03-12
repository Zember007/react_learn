import React from 'react';
import classes from './PostButton.module.css'

const PostButton = ({children, ...props}) => {
    
    return (
        <div  className={classes.post_btns}>
            <button {...props}>{children}</button>
        </div>
    );
};

export default PostButton;