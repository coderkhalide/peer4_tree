import './styles/InfoSection.css'
// TODO: Work with video and popup
function InfoSection({subTitle, title, content, image, video = false}) {
    return (
        <div className="infoSection">
            <div className="infoSection__wrapper">
                <div className="infoSection__text_conten">
                    <span>{subTitle && subTitle}</span>
                    <h1>{title && title}</h1>
                    {content?.map(text => (
                        <p key={Math.random()}>{text}</p>
                    ))}
                </div>
                <div className="infoSection__image_conten">
                    <img src={image && image} alt="Image" className="infoSection__image"/>
                    {video && (
                        <img src="https://i.ibb.co/WzcyR7J/Group-3.png" alt="" className="infoSection__icon"/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default InfoSection