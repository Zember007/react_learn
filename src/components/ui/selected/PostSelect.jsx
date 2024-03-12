import React from 'react';

const PostSelect = ({onChange}) => {
    return (
        <div>
            <select
             defaultValue="Sorted"
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="Sorted" defaultValue disabled hidden>Sorted</option>
                <option value="title">By title</option>
                <option value="body">By body</option>
            </select>
        </div>
    );
};

export default PostSelect;