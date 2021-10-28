import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <header className='navbar'>
                <h1>SQUARE ENIX</h1>
                <nav>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Contact</a></li>
                </nav>
            </header>
        </>
    )
}

export default Navbar;