import React from 'react';

function Header() {
    const username = 'Sunny';
    const date = new Date();
    const hour = date.getHours();
    const redTextColor={color:'red'};
    let welcomeText;
    if (hour < 12) { welcomeText = 'morning' } else if (hour >= 12 && hour < 6) { welcomeText = 'afternoon' } else { welcomeText = 'night' }


    return (
        <header >
            <nav className="navbar navbar-expand-sm bg-light">
                <a className="navbar-brand" href="./">React Demo</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" style={redTextColor} href="./Home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./Employee">Employee</a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li><span className="fa fa-user text-primary" ></span ><span style={{color:'#888888'}}> Good {welcomeText} {username}</span ></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;