## jijojames.com. 
Portfolio website built using React and Bootstrap React.  
The website is hosted at [jijojames.com](https://jijojames.com). For testing purposes, it is deployed to a [Heroku dyno](https://nameless-garden-94935.herokuapp.com/) for each commit into `master` branch.  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The data is stored in Google Firestore and is fetched using the JavaScript Admin SDK for Firebase. The app uses Redux to store the data, Redux-saga for handling side-effects and React router for navigation.  

### Styling
Styling is done using `styled-components`.  

## Database
The service uses Firestore provide by Google Firebase for storing the necessary data  

`Collection` : `blog`  
Document structure  
Field | Type  | Description |
------|-------|-------------|
date | String | Date on which the blog was posted |
desc | String | Short description of blog post |
id   | Number | Unique id value |
image| String | Title image url |
title| String | Title of the blog post |
url  | String | Blogger url |

`Collection` : `videos`  
Document structure  
Field | Type  | Description |
------|-------|-------------|
id   | Number | Unique id value |
url  | String | Youtube url |


`Collection` : `gallery`  
Document structure  
Field | Type  | Description |
------|-------|-------------|
date | String | Date on which the picture was taken |
id   | Number | Unique id value |
place| String | Place at which the picture was taken |
url  | String | Url of image hosted at a 3rd party website |

At the time of development, firebase didn't have good way to obtain the total number of documents in a collection. So I had to create a new collection which holds the total for each of the collections.  

`Collection` : `total`  
Document structure  
Field | Type  | Description |
------|-------|-------------|
blog | Number | Total number of blog posts |
gallery | Number | Total number of images |
videos | Number | Total number of videos |

## Environment Variables
The service requires a number of config data to be present as environment variables.  

Variable | Description |
------|-------------|
REACT_APP_PERSIST_KEY | Key in local storage where the data is persisted by `redux-persist` |
REACT_APP_RECAPTCHA_SITE_KEY | Google ReCaptcha site key |
REACT_APP_POST_FEEDBACK_ENDPOINT | Rest endpoint to post the contact form data |
REACT_APP_FIREBASE_CONFIG | Firebase SDK config |

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Development flow
1. Clone the repository to your local machine.
2. Copy env.example as .env.
3. Replace the keys inside the .env with the correct values.
4. Run `npm install` and `npm start` to setup the local environment.

### Reference
* [Google Firestore](https://firebase.google.com/docs/firestore)
* [Firebase Admin Console](https://console.firebase.google.com/)
* [React Bootstrap](https://react-bootstrap.github.io/)
* [Google ReCaptcha](https://developers.google.com/recaptcha/intro)
