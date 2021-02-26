import './styles/Nav.css'

function Nav() {
    return (
        <div className="nav">
            <div className="nav__container">
                <img src="https://i.ibb.co/XVxrbNr/Group-1.png" alt="Peer4 Tree" className="nav__logo"/>
                <div className="nav__links">
                    <img src="https://i.ibb.co/kBkhD2D/Group.png" alt="" className="nav__close"
                    onClick={() => document.querySelector('.nav__links').classList.remove('nav__active')}/>
                    <ul>
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#blogs">Blogs</a></li>
                        <li><a href="#contact">Contact us</a></li>
                        <li><a href="#donate" className="nav__donate">Donate</a></li>
                    </ul>
                </div>
                <img src="https://i.ibb.co/kBkhD2D/Group.png" alt="" className="nav__open"
                onClick={() => document.querySelector('.nav__links').classList.add('nav__active')}
                />
            </div>
        </div>
    )
}

export default Nav
