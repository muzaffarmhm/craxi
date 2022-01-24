import React from 'react';

export default function Hero() {
    return <div>
        <div className="container px-4 py-3">
            <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src="https://i.ibb.co/swsWQY0/flame-1853.png" className="img-relative d-block mx-lg-auto img-fluid" width={400} height={500} loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-3 fw-bold lh-2 mb-3">Book your Ride for low-price!</h1>
                    <p className="lead">Book and bargain for a tour or ride for a cheap package or drive as pilot for part time.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Get Started</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">More Info</button>
                    </div>
                </div>
            </div>
        </div>

    </div>;
}
