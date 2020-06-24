import React, {useEffect} from "react"
import NavigationBar from './Components/NavigationBar/NavigationBar.js';
import MainPage from './Components/MainPage/MainPage.js';
import Features from './Components/Features/Features.js';
import Footer from './Components/Footer/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';

function loadCompleted(){
    setTimeout(function(){
        document.getElementById("initialLoader").remove();
        document.getElementById("root").style.display = "block"
        AOS.init({
            duration : 2000
        })
    }, 1100)
}

export default function App() {
    useEffect(() => {
        // componentdidmount

        window.addEventListener('load', loadCompleted);
    })
    
    return (
        <div className="inherit">      
            <NavigationBar /> {/* Only the nav bar at the top */}
            <MainPage />  {/* The first welcome page only*/}
            <Features /> {/* Health/Finance Benefits and its features*/}
            <Footer /> {/* Final Footer*/}
        </div>
    ); 
}