import React from "react"
import CurrentDate from '../date/date'
import { connect } from 'react-redux'
import { getQuote } from '../../actions/quote-actions'

import "../../styles/quotes/quote.css"

class Quote extends React.Component {
  componentDidMount() {
    this.props.dispatch(getQuote())
  }

  render() {
    if (this.props.error) {
      return <div>Error! {this.props.error.message}</div>
    }

    if (this.props.quote.loading) {
      return <div>Loading...</div>
    }
    const quote = this.props.quote.quote
    return (
        <div className="quote-container">
          <div className="quote">
            <p className="quote-text">{quote.quoteText}</p>
            <p className="quote-author">&mdash;{quote.quoteAuthor ? quote.quoteAuthor : 'Anonymous'}</p>
          </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  quote: state.quote,
  loading: state.loading,
  error: state.error
})

export default connect(mapStateToProps)(Quote)
