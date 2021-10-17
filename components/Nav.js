import Link from 'next/link';

const Nav = () => {
    return (
        <nav className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <Link href='/'>HOME</Link>
            <Link href='/work'>WORK</Link>
            <Link href='/contact'>CONTACT</Link>
        </nav>
    )
}

export default Nav;
