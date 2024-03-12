import React from 'react';
import PostButton from "./button/PostButton";

const PostPagination = ({pagination, setPage, page}) => {
    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            {pagination.map(p =>
                <PostButton
                    onClick={() => setPage(p)}
                >{<span className={page === p ? 'page_active' : ''}>{p}</span>}</PostButton>
            )}
        </div>
    );
};

export default PostPagination;