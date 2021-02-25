import './styles/WorldDataSection.css'
import DataCard from './tinyComponent/DataCard'

function WorldDataSection({worldData}) {
    return (
        <div className="worldDataSection">
            <h1>IF we keep cutting down trees what will happen in near future</h1>
            <p>In life, people of the current generation reap the fruits of the efforts exerted by those who preceded them. Without their ingenuity and passion.</p>
            <div className="worldDataSection__datacard_wrapper">
                {worldData?.map(data => (
                    <DataCard image={data.image} title={data.title} subTitle={data.subTitle} key={Math.random()}/>
                ))}
            </div>            
        </div>
    )
}

export default WorldDataSection