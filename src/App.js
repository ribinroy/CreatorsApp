import React, {useEffect} from "react"
import NavigationBar from './Components/NavigationBar/NavigationBar.js';
import MainPage from './Components/MainPage/MainPage.js';
import Features from './Components/Features/Features.js';
import Footer from './Components/Footer/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';

function loadCompleted(delay){
    setTimeout(function(){
        const loader = document.getElementById("initialLoader");
        if(loader === null)
            return false;
            
        loader.remove();
        document.getElementById("root").style.display = "block"
        AOS.init({
            duration : 2000
        })
    }, delay)
}

export default function App() {
    loadCompleted(5100);
    useEffect(() => {
        // componentdidmount
        window.addEventListener('load', loadCompleted(1100));
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