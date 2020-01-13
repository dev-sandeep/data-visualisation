import React from 'react'
import Header from './Header'
import MapForm from '../Component/MapForm'

import JumbotronMessage from '../Component/JumbotronMessage'

function Home() {

    /* all of the main content goes here  */
    return (
        <section className="home-page">
            <Header />
            <div className="row1 ov-y-hide">
                <div className="container">
                    <div className="col-lg-12">
                        {/* place to put the the map */}
                        {/* <JumbotronMessage title="Wiki Stats"
                            sub="This is an awesom app to demonstrate 'How do published news of a person or event of interest impacts the people’s behavior on web searches?'" /> */}
                        <MapForm />

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;