import React from 'react'
import Header from './Header';
import arrowDown from '../images/icon-arrow-down.svg';
const Home = () => {
    return (
        <section className="home">
            <Header/>
            <div className="homeTitle">
                <div>
                    <h1> We are creatives</h1>
                    <img src={arrowDown} alt="arrowDown" className="arrowDown"/>
                </div>
            </div>
        </section>
    )
}

export default Home
