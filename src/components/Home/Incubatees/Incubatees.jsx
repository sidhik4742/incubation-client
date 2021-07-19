import React from 'react'
import "./Incubatees.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import { Container } from 'react-bootstrap';

const options = {
    autoplay: true,
    autoplaytimeout: 100,
    loop: true,
    dots: true,
    padding: 4,
    responsive: {
        0: {
            items: 1,
            dots: true
        },
        400: {
            items: 1,
            dots: true
        },
        728: {
            items: 3,
            dots: true
        },
        960: {
            items: 3,
            dots: true
        },
        1300: {
            items: 3,
            dots: true
        }
    }
}


function Incubatees() {
    return (
        <>
            <Container fluid className="incubation-section">
                <div>
                    <h1>Our Incubatees</h1>
                </div>
                <div className="row">
                    <OwlCarousel
                        id="owl-demo"
                        {...options}
                        className="owl-theme"
                    // items="3"
                    // autoplay

                    >
                        <div className="item">
                            <div className="card">
                                <div className="card-header">
                                    KalSoft
                                </div>
                                <div className="card-body">
                                    <blockquote className="# mb-0">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores vel aliquid necessitatibus.

                                        </p>
                                        <p className="blockquote-footer pl-5 text-end">CEO <cite title="Source Title">Pramod Kalyain</cite></p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <div className="card-header">
                                    Anmeda System Pvt.Ltd
                                </div>
                                <div className="card-body">
                                    <blockquote className="# mb-0">
                                        <p>
                                            Anmeda systems , founded by a group of dreamers and creative thinkers who has passion
                                            in providing industrial automation solutions. Anmeda Core Focus is on Software Products , Services , IoT Based Solutions for Pharma Segment. Anmeda products.
                                        </p>
                                        <p className="blockquote-footer pl-5 text-end">Director <cite title="Source Title">Mrs. Parul Patel</cite></p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <div className="card-header">
                                    Bux Labs
                                </div>
                                <div className="card-body">
                                    <blockquote className="# mb-0">
                                        <p>
                                            BUXLABS is a startup launched under REVA NEST - a REVA University
                                            initiative. BUXLABS is focused on Location based Analytics and Fintech domain.
                                        </p>
                                        <p className="blockquote-footer pl-5 text-end">Director <cite title="Source Title">Mr. Krithika Pradeep</cite></p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <div className="card-header">
                                    Anmeda System Pvt.Ltd
                                </div>
                                <div className="card-body">
                                    <blockquote className="# mb-0">
                                        <p>
                                            Anmeda systems , founded by a group of dreamers and creative thinkers who has passion
                                            in providing industrial automation solutions. Anmeda Core Focus is on Software Products , Services , IoT Based Solutions for Pharma Segment. Anmeda products.
                                        </p>
                                        <p className="blockquote-footer pl-5 text-end">Director <cite title="Source Title">Mrs. Parul Patel</cite></p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>

            </Container>


        </>
    )
}

export default Incubatees
