import React from 'react';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm bg-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link test" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Employee</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contractor</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;