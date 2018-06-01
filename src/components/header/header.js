import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../../actions/auth-actions'
import {clearAuthToken} from '../../local-storage'

import '../../styles/header/header.css'

export class Header extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }
  render() {
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <button onClick={() => this.logOut()}>Log Out</button>
      );
    }
    return (
      <div className='header'>
        <img className='icon' alt='home icon' src='http://www.iconhot.com/icon/png/devine/64/home-13.png' />
        <h1 className='title'>Home</h1>
        {logOutButton}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(Header)
