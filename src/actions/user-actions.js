import { SubmissionError } from "redux-form"
import { normalizeResponseErrors } from "./utils"
import { login } from "./auth-actions"

const { API_BASE_URL } = require("../config")

export const registerUser = user => dispatch => {
  debugger
  fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(user => {
      dispatch(login(user.username, user.password))
    })
    .catch(err => {
      const { reason, message, location } = err
      if (reason === "ValidationError") {
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        )
      }
    })
}
