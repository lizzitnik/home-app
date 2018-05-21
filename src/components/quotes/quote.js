import React from 'react';
import axios from 'axios'

import '../../styles/quotes/quote.css'

export default class Quote extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: 'Blah Blah Blah',
      author: 'Lawrence Whiteside'
    }
  }

  getQuotes() {
    const url = 'https://random-quote-generator.herokuapp.com/api/quotes/random'
    axios
      .get(url)
      .then(data =>
        this.setState({quote: data.data.quote, author: data.data.author}))
  }

  render() {
    return (
      <div className='quote-container'>
        <p className='quote-text'>{this.state.quote}</p>
        <p className='quote-author'>&mdash;{this.state.author}</p>
        <button className='quote-button' onClick={this.getQuotes}>
          New quote
        </button>
      </div>
    )
  }
}
