import React from 'react';
import './Footer.css'

// function Footer(){
//     return (
//         <footer className="text-center test">
//             <p>Copy right Sunny2020</p>
//         </footer>
//     );
// }

const Footer = () => {
    const myname="Sunny";
    const year=2020;
    return (
        <footer className="text-center">
            <p>Copy right {myname} {year}</p>
        </footer>
    )
}


export default Footer;