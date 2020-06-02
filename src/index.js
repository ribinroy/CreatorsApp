import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import NavigationBar from './Components/NavigationBar/NavigationBar.js';
import MainPage from './Components/MainPage/MainPage.js';
import Features from './Components/Features/Features.js';
import Footer from './Components/Footer/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <NavigationBar /> {/* Only the nav bar at the top */}
    <MainPage />  {/* The first welcome page only*/}
    <Features /> {/* Health/Finance Benefits and its features*/}
    <Footer /> {/* Final Footer*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
