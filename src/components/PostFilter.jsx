import React from 'react';
import PostSelect from "./ui/selected/PostSelect";
import PostInput from "./ui/input/PostInput";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <PostInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Search"
            />
            <PostSelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            />
        </div>
    );
};

export default PostFilter;