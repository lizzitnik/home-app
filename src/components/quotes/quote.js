import React from "react"
import { connect } from 'react-redux'
import { getQuote } from '../../actions/quote-actions'

import "../../styles/quotes/quote.css"

class Quote extends React.Component {
  componentDidMount() {
    console.log(this.props)
    this.props.dispatch(getQuote())
  }

  render() {
    if (this.props.error) {
      return <div>Error! {this.props.error.message}</div>
    }

    if (this.props.loading) {
      return <div>Loading...</div>
    }

    return (
      <div className="quote-container">
        <div className="quote">
          <p className="quote-text">{this.props.quote.quote.quote}</p>
          <p className="quote-author">&mdash;{this.props.quote.quote.author}</p>
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
