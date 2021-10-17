import React from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';

const Work = () => {
    return (
        <div>
            <Nav />
            <h1>This is the ABOUT me page</h1>
            <Link href='/'>Back to Home</Link>
        </div>
    )
}

export default Work;
