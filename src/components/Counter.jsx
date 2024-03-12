import React, { useState } from 'react';

const Counter = function () {
    const [likes, SetLikes] = useState(0);

    return (
        <div>
            <h1>{likes}</h1>
            <button onClick={() => SetLikes(likes + 1)}>TRUE</button>
            <button onClick={() => SetLikes(likes - 1)}>FALSE</button>
        </div>
    )
}

export default Counter;