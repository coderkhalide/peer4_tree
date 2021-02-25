import './styles/Header.css'
function Header() {
    return (
        <div className="header" style={{background: "url('https://i.ibb.co/GPZmJk4/Frame-2.jpg') center no-repeat ", backgroundSize: "cover"}}>
            <div className="header__container">
                <div className="header__content">
                    <h1>Trees give peace to the souls of men</h1>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who</p>
                    <a href="#">Plant a Tree</a>
                </div>
            </div>
            <div className="header__backdrop"></div>
        </div>
    )
}

export default Header
