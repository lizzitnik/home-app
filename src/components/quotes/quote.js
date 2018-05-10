import React from 'react';

export default function Quote(props) {
  return (
    <div className='quote-container'>
      <p className='quote-text'>{props.quote}</p>
      <p className='quote-author'>&mdash;{props.author}</p>
    </div>
  )
}
