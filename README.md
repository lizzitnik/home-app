# Home

To demo the app:

username: mockuser

password: password1234


Live app: https://home-app1.herokuapp.com/

## Screenshots

## Summary

This is a simple productivity app that allows users to plan their day. After logging in, the user is welcomed and given a motivating quote of the day. Scrolling down, the user sees a 5-day forecast. Finally under the weather is a simple todo list where the user can add and delete items as they are completed.

## Features

### Quote of the day

Every time a user logs in they will see a random motivational quote appear under the time clock. This quote was generated from the forismatic quote api.

### 5 Day Forecast

The weather app gives a comprehensive 5-day-forecast that includes the current temperature, average temperatures for each following day of the week, highs and lows for each day, and a the daily weather condition. Each weather card has its icon in the background and its border color changes depending on the temperature in the middle of the circle. This weather app was made from the aeris forecast api.

### Todo List

Users can make a list of items they want to complete for the week ahead. They can add a todo item, check a todo item off which puts a slash through the value, and finally delete an item once they no longer want to see it in their list. This was created using a REST api.

## Technology

### Front-End
- HTML5
- CSS3
- React
- Redux
- Redux Thunk
- Momentjs

### Back-End
- Node
- Express
- MongoDB
- Mongoose
- Passport
- Bcrypt

### Testing and Deployment
- Mocha
- Chai
- Chai-HTTP
- Travis CI
- Heroku
- mLab
