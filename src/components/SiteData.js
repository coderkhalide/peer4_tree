import DataCard from "./tinyComponent/DataCard"
import './styles/SiteData.css'

function SiteData({siteData}) {
    return (
        <div className="siteData">
            <div className="siteData__datacard_wrapper">
                {siteData?.map(data => (
                    <DataCard image={data.image} title={data.title} subTitle={data.subTitle} key={Math.random()}/>
                ))}
            </div>
        </div>
    )
}

export default SiteData
