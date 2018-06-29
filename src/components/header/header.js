import React from 'react';
import CurrentDate from '../date/date'
import {connect} from 'react-redux';
import {clearAuth} from '../../actions/auth-actions'
import {clearAuthToken} from '../../local-storage'
import {Redirect} from 'react-router-dom'

import '../../styles/header/header.css'

export class Header extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }
  render() {
    if (!this.props.currentUser) {
      return <Redirect to='/' />
    }

    let logOutButton;

    if (this.props.loggedIn) {
      logOutButton = (
        <button onClick={() => this.logOut()}>Log Out</button>
      );
    }
    return (
    <div className='top'>
      <div className='header'>
        <h1 className='logo'>Home</h1>
        {logOutButton}
      </div>
      <div className='intro'>
        <h2 className='title'>Hello {this.props.currentUser && this.props.currentUser.firstName}</h2>
      </div>
      <CurrentDate />
    </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  currentUser: state.auth.currentUser
})

export default connect(mapStateToProps)(Header)
