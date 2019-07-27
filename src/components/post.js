import React from 'react';

const Post = ({_id, text, timestamp, onDelete}) => (
    <div className="post">
        <p>{text}</p>

        <p className="timestamp">{timestamp}</p>
        <button className="section-btn add-btn">Edit</button>
        <button className="section-btn del_btn" onClick={() => onDelete(_id)}>Delete</button>
    </div>
);

export default Post;

/*const Post = ({text, timestamp}) => (
    <div className="post">
        <p>{text}</p>

        <p className="timestamp">{timestamp}</p>
        <button className="section-btn add-btn">Edit</button>
        <button className="section-btn del_btn">Delete</button>
    </div>
);

export default Post;*/