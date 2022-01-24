import React from 'react';

export default function Navbar() {
    return (
        <div className='border-bottom'>
            <nav className="container navbar navbar-light bg-white">
                <div className="container-fluid justify-content-around ">
                    <a className="navbar-brand" href="#">
                        <img src="https://i.ibb.co/YPmZ6WJ/craxi.jpg" alt width={40} height={30} className="d-inline-block align-text-top" />
                        <span class="navbar-brand mb-0 h1 p-2">Craxi</span>
                    </a>

                    <header className="d-flex align-items-center py-3">
                        <ul className="nav nav-pills">
                            <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">How it works</a></li>
                        </ul>
                    </header>

                    <form class="align-content-end">
                        <button class="btn btn-sm btn-primary m-2" type="button">Book your ride</button>
                        <button className="btn btn-sm m-2" type="button" style={{ backgroundColor: '#F1E4FF', color: 'blue' }}>Drive a ride</button>
                    </form>
                </div>
            </nav>

        </div>


    )
}
