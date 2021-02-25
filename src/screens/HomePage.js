import Nav from "../components/Nav"
import Header from "../components/Header"
import SiteData from "../components/SiteData"
import InfoSection from "../components/InfoSection"
import TreePlaning from "../components/TreePlaning"
import WorldDataSection from "../components/WorldDataSection"
import Footer from "../components/Footer"

function HomePage() {
    const siteData = [
        {image: 'https://i.ibb.co/WBWsWYv/Group.png', title: "23,024,834,838", subTitle: "Trees Planted"},
        {image: 'https://i.ibb.co/vkCXpW3/oxygen.png', title: "6,343,244 Million", subTitle: "Pound O2 Produced"},
        {image: 'https://i.ibb.co/jfPRrVC/co2.png', title: "867,343,244 Trillion", subTitle: "Ton Co2 Reduced"},
    ]

    const worldData = [
        {image: 'https://i.ibb.co/GMhvfLn/dsd.png', title: "430 Million", subTitle: "430 million acres will be lost in 20 years"},
        {image: 'https://i.ibb.co/5vjqjtJ/track.png', title: "80% Extinct", subTitle: "80% of forest species will be extinct in 25 years"},
        {image: 'https://i.ibb.co/X5LjYkH/forest.png', title: "100 Years", subTitle: "No rainforest will be left in 100 years"},
    ]

    return (
        <>
            <Nav />
            <Header />
            <SiteData siteData={siteData}/>
            <InfoSection title="About Us" subTitle="our vision" 
                content={["We benefit from the efforts made by those who came before us, and it’s our responsibility to do the same for those who will come after us. (Yes, this tree quote is for you, Fridays for Future fans.)", "We benefit from the efforts made by those who came before us, and it’s our responsibility to do the same for those who will come after us. (Yes, this tree quote is for you, Fridays for Future fans.)", "We benefit from the efforts made by those who came before us, and it’s our responsibility to do the same for those who will come after us. (Yes, this tree quote is for you, Fridays for Future fans.)"]}
                image="https://i.ibb.co/rkY1nVH/Group-11.jpg"
                video="https://www.youtube.com/watch?v=kWPIJVViZ5I"
            />
            <TreePlaning />
            <InfoSection title="Climate Change" subTitle="The" 
                content={["We benefit from the efforts made by those who came before us, and it’s our responsibility to do the same for those who will come after us. (Yes, this tree quote is for you, Fridays for Future fans.)", "We benefit from the efforts made by those who came before us, and it’s our responsibility to do the same for those who will come after us. (Yes, this tree quote is for you, Fridays for Future fans.)", "We benefit from the efforts made by those who came before us, and it’s our responsibility to do the same for those who will come after us. (Yes, this tree quote is for you, Fridays for Future fans.)"]}
                image="https://i.ibb.co/B4tc3N3/Group-12.jpg"
            />
            <WorldDataSection worldData={worldData}/>
            <Footer />
        </>
    )
}

export default HomePage
