import React from 'react';

import '../../styles/quotes/quote.css'

export default function Quote(props) {
  return (
    <div className='quote-container'>
      <p className='quote-text'>{props.quote}</p>
      <p className='quote-author'>&mdash;{props.author}</p>
    </div>
  )
}
