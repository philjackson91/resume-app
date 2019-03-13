import React from 'react';

const post = ( props ) => (
    <article>
        <h1>{props.username}</h1>
        <img scr={props.image} alt=''></img>
        <p>{props.title}</p>
        <p>{props.comments}</p>
    </article>
)
export default post;