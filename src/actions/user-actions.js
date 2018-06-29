import {SubmissionError} from 'redux-form';
import {login} from './auth-actions'

const {API_BASE_URL} = require('../config');

export const registerUser = user => dispatch => {
    fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(u => {
          dispatch(login(user.username, user.password))
        })
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};
