import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
function Home() {

    /* all of the main content goes here  */
    return (
        <section className="home-page m-top-3">
            <div className="row1 ov-y-hide">
                <div className="container">
                    <div className="col-lg-12">
                        <div className="desktop-message">
                            <Jumbotron>
                                <h1>Alas!</h1>
                                <h4>
                                    Open this website in a mobile
                            </h4>
                                <h6>
                                    Bitte öffnen Sie diese Website auf einem Mobiltelefon
                            </h6>
                            </Jumbotron>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;