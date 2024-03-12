import React from 'react';
import classes from './PostInput.module.css';

const PostInput = React.forwardRef((props, ref) => {
    return (

            <input ref={ref} className={classes.post__input} {...props}/>

    );
});

export default PostInput;