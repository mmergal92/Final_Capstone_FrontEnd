import React from 'react'
import Carousel from "../components/HomeCarousel/carousel"
import { Link } from 'react-router-dom';

// Components

function Home() {

    console.log(localStorage.getItem('sessionEmail'))
    let x;
    console.log(localStorage.getItem('symbol'));
    console.log(x)

    return (
        <div className = "home">
            <div className = "home-heading">
                {localStorage.getItem('sessionEmail') ? `Hello, ${localStorage.getItem('userfRealName')}` : <Link to={`/login/`}>Login here</Link>}
            </div>
            <div className = "home-content">
                <h2>THIS IS PROOF</h2>
                <p>We believe that when women win, we all win. <br/>
                In that spirit, we partner with WOC  entrepreneurs and allied brands to create dope shit that furthers the culture. Instead of a finite list of services, we have three disciplines we work with: <br/> User Experience <br/> Brand <br/> Content <br/><br/>
                Have an idea, question, or just wanna chat? 
                <Link to={`/form/`}>
                        <h4>Hit us up!</h4>
                </Link>
                Check out <a href= "https://www.nanankweti.com/" target="_blank" rel="noopener noreferrer">our most recent work</a></p>
                {/* <Carousel /> */}
            </div>
        </div>
    )
}

export default Home