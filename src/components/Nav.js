import './styles/Nav.css'

function Nav() {
    return (
        <div className="nav">
            <div className="nav__container">
                <img src="https://i.ibb.co/XVxrbNr/Group-1.png" alt="Peer4 Tree" className="nav__logo"/>
                <div className="nav__links">
                    <ul>
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#blogs">Blogs</a></li>
                        <li><a href="#contact">Contact us</a></li>
                        <li><a href="#donate" className="nav__donate">Donate</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav
