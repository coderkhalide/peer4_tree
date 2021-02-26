import './styles/Footer.css'

function Footer() {
    return (
        <div className="footer" style={{background: "url('https://i.ibb.co/0FhZMSp/Rectangle-24.jpg') center no-repeat ", backgroundSize: "cover"}}>
            <div className="footer__wrapper">
                <div className="footer__left_content">
                    <h1>Stay in touch!</h1>
                    <p>We benefit from the efforts made by those who came before us, and it’s our responsibility to do the same for those who will come after us. (Yes, this tree quote is for you, Fridays for Future fans.)</p>
                    <form>
                        <div className="footer__newslater">
                            <input type="email" placeholder="Your Email"/>
                            <button type="submit"><img src="https://i.ibb.co/Kwx6rXn/Vector.png" alt=""/></button>
                        </div>
                    </form>
                </div>
                <div className="footer__links">
                    <h3>Useful Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer__right_content">
                    <ul className="footer__social">
                        <il><a href="#"><img src="https://i.ibb.co/DYWJxRs/typcn-social-pinterest-circular.png" alt=""/></a></il>
                        <il><a href="#"><img src="https://i.ibb.co/MM6SrpD/ant-design-facebook-outlined.png" alt=""/></a></il>
                        <il><a href="#"><img src="https://i.ibb.co/4KzNMXp/carbon-logo-instagram.png" alt=""/></a></il>
                        <il><a href="#"><img src="https://i.ibb.co/XWKCsTN/feather-twitter.png" alt=""/></a></il>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu libero elit.</p>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__wrapper">
                    <div className="footer__logo_text">
                        <img src="https://i.ibb.co/q56F1df/Group.png" alt=""/>
                        <p>Of all man’s works of art, a cathedral is greatest.</p>
                    </div>
                    <div className="footer__copyright">
                        &copy; 2021 - All rights reserved
                    </div>
                </div>
            </div>
            <div className="footer__backdrop"></div>
        </div>
    )
}

export default Footer