# myFlix-client

## Overview
myFlix is a frontend application for browsing silent movies, managing profiles, and maintaining a favorites list, built with React and React Bootstrap.

## Tech Stack
- React: JavaScript library for building user interfaces.
- React Bootstrap: Bootstrap components for React.
- Redux Toolkit: For state management.
- React Router: For routing and navigation.

## Features
- User Authentication: Signup and login functionality.
- Movie Browsing: View available silent movies.
- Movie Details: Access detailed information about each movie.
- User Profile Management: Manage user profiles.
- Favorite Movies: Add or remove movies from favorites.
- Search Functionality: Filter movies by title.

## Dependencies
The project relies on several npm packages. Below is a list of key dependencies:
- @reduxjs/toolkit: State management library.
- bootstrap: CSS framework for responsive design.
- prop-types: Runtime type checking for React props.
- react: Frontend framework.
- react-bootstrap: Bootstrap components for React.
- react-dom: For DOM rendering.
- react-redux: React bindings for Redux.
- react-router-dom: Routing for React applications.

### Installation

## How to Clone
To clone the repository, run: `git clone https://github.com/alexuflexu/myflix-client.git`

## Install dependencies:

   ```sh
   npm install
   ```

## How to Launch the Project
To start the development server, use:

   ```sh
   npm start
   ```
This will open the app in your default browser at http://localhost:3000.

## Deployment
Build the application for production:  
   ```sh
   npm run build
   ```

Deploy the build directory to your preferred web server or hosting service. 

## Usage
- **Signup**: Create a new account.
- **Login**: Access your account.
- **Browse Movies**: View available movies.
- **View Movie Details**: Click on a movie card.
- **Manage Favorites**: Add or remove from favorites.
- **Search**: Filter movies by title.


## File Structure
src/  
│  
├── components/  
│   ├── login-view/  
│   │   └── login-view.jsx  
│   ├── main-view/  
│   │   └── main-view.jsx  
│   ├── movie-card/  
│   │   ├── movie-card.jsx  
│   │   └── movie-card.scss  
│   ├── movie-view/  
│   │   ├── movie-view.jsx  
│   │   └── movie-view.scss  
│   ├── movies-filter/  
│   │   └── movies-filter.jsx  
│   ├── movies-list/  
│   │   └── movies-list.jsx  
│   ├── navigation-bar/  
│   │   └── navigation-bar.jsx  
│   ├── profile-view/  
│   │   ├── profile-view.jsx  
│   │   └── profile-view.scss  
│   └── signup-view/  
│       └── signup-view.jsx  
│  
├── redux/  
│   ├── reducers/  
│   │   ├── movies.js  
│   │   └── user.js  
│   └── store.js  
│  
├── index.html  
├── index.jsx  
└── index.scss  


## Hosting
This project is hosted on Netlify: https://silent-movies.netlify.app/

## License
This project is licensed under the MIT License.
