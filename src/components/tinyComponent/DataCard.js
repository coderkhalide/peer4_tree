import './styles/DataCard.css'

function DataCard({image, title, subTitle}) {
    return (
        <div className="dataCard">
            <img src={image} alt="Image"className="dataCard__image" />
            <h3>{title}</h3>
            <h4>{subTitle}</h4>
        </div>
    )
}

export default DataCard