This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Demo :** [click here](https://m3fresh-beta.netlify.app/) 

**Note** : The code is in the `dev` branch.

## Introduction to this application

We designed this project for online delivery of daily-essentials in my town. This application was born due to the covid-19 situation and lack of local online delivery platforms. Through this project, we were able to provide a simple and robust solution for onine order system that helps customers and the people who were providing the service. We presented this application for use by our district. 
Initially they started tele-booking service and later extended to online through this app. What all they needed was a simple platform where they can upload their products and update them and customers will just order the products using their address.

## Technical details 
Backend - firebase

For managing products - We gave them a google sheet where they can add/update their products directly to the databse on click on a button within google sheet.

For managing orders - a open route with /orders where they can view all the orders

Frontend - React.js with hooks (no 3rd party library for state management)

Hosting - netlify

CI/CD - netlify (created seperatly for production and development)

Why Web? - I really love the flexibility of the web. If mobile app is needed, we can just add **PWA** which is what we have done here.

Designed Tool - Figma


## Instructions to run the project

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



