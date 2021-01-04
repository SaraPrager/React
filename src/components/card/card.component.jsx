import React from 'react';
import './card.styles.css'

export const Card = (props) => (
    <div className='card-container'>
    <img alt="post" src={`https://robohash.org/${props.post.id}?set=set2&size=180x180`}></img>
        <h2> { props.post.name } </h2>
        <p> { props.post.email } </p>
    </div>
)