import React from 'react';
import Contact from './employee/contact';
import contactData from '../data/contactData';
import Needtodo from './employee/needtodo';
import needtodoData from '../data/needtodoData';

function Main() {
    const contactComponents = contactData.filter(c => c.name).map(c => <Contact key={c.id} contact={c}></Contact>);
    const needtodoComponents = needtodoData.map(item => <Needtodo key={item.id} item={item} />);

    return (
        <main className="container">
            <div className="card">
                <div className='card-header'>Employee Contact</div>
                <div className='card-body'>
                    {/* {contactComponents} */}
                    {needtodoComponents}
                </div>
            </div>
        </main>
    )
}

export default Main