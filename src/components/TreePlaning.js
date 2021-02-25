import './styles/TreePlaning.css'

function TreePlaning() {
    return (
        <div className="treePlaning" style={{background: "url('https://i.ibb.co/DfxXTmM/Group-4.jpg') center no-repeat ", backgroundSize: "cover"}}>
            <h1>Protect our forests in the fight against climate change</h1>
            <p>The funds from this campain will help us plant 3 million tree in 3 year. Act now! Choose how many trees you wish to plant.</p>
            <div className="treePlaning__container">
                <div className="treePlaning__plan">
                    <h2>2</h2>
                    <h3>Tree</h3>
                    <h4>Donate 6 EUR</h4>
                </div>
                <div className="treePlaning__plan">
                    <h2>4</h2>
                    <h3>Trees</h3>
                    <h4>Donate 10 EUR</h4>
                </div>
                <div className="treePlaning__plan">
                    <h2>20</h2>
                    <h3>Tree</h3>
                    <h4>Donate 30 EUR</h4>
                </div>
                <div className="treePlaning__plan treePlaning__plan_own_choose">
                    <input type="number" autofocus/>
                    <h4>You choose</h4>
                </div>
            </div>
            <a href="#" className="treePlaning__btn">Donate Now <span>40$</span></a>
            <div className="treePlaning__backdrop"></div>
        </div>
    )
}

export default TreePlaning