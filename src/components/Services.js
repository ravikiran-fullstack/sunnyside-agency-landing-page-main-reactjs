import React from 'react'

const Services = () => {
    return (
        <section id="services" className="servicesGrid">
            <div className="card1">
                <div className="cardHeading"><h1>Transform your brand</h1></div>
                <p className="cardInfo">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <a href="/" className="learnMoreLink yellow--underline">Learn more</a>
            </div>
            <div className="card2">Card 2</div>
            <div className="card3">Card 3</div>
            <div className="card4">
                <div className="cardHeading"><h1>Stand out to the right audience</h1></div>
                <p className="cardInfo">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                <p className="learnMoreLink">LEARN MORE</p></div>
            <div className="card5">
                <div className="cardHeadingGraphic"><h1>Graphic design</h1></div>
                <p className="cardInfoGraphic">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
            </div>
            <div className="card6">
                <div className="cardHeadingPhotography"><h1>Photography</h1></div>
                <p className="cardInfoPhotography">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </div>
        </section>
    )
}

export default Services
