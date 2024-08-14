# myFlix-client

## Overview
myFlix is a frontend application for browsing silent movies, managing profiles, and maintaining a favorites list, built with React and React Bootstrap.

## Features
- User Authentication
- Movie Browsing
- Movie Details
- User Profile Management
- Favorite Movies
- Search Functionality

## Usage
- **Signup**: Create a new account.
- **Login**: Access your account.
- **Browse Movies**: View available movies.
- **View Movie Details**: Click on a movie card.
- **Manage Favorites**: Add or remove from favorites.
- **Search**: Filter movies by title.

## Deployment
Build the application for production:  
   ```sh
   npm run build
   ```

Deploy the build directory to your preferred web server or hosting service.


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
