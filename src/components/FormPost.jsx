import React, { useState } from 'react';
import PostButton from "./ui/button/PostButton";
import PostInput from "./ui/input/PostInput";

const FormPost = ({create}) => {
    const [post, setPost] = useState({title: '' , body: ''});

    const addPost = (e) => {
      e.preventDefault();

      const newPost = {
        ...post, id: Date.now()
    }

    create(newPost)

      setPost({title: '' , body: ''})
    }
    return (
        <form className="form">
            <PostInput
                type="text"
                onChange={e => setPost({ ...post, title: e.target.value })}
                value={post.title}
                placeholder="Title" />
            <PostInput
                type="text"
                placeholder="Body"
                onChange={e => setPost({ ...post, body: e.target.value })}
                value={post.body}
            />
            <PostButton onClick={addPost}>Add</PostButton>
        </form>
    );
};

export default FormPost;