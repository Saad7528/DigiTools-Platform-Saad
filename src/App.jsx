import { useState } from 'react'
import './App.css'
import ActiveUser from './component/ActiveUser/ActiveUser'
import Banner from './component/Banner/Banner'
import DigitalTools from './component/DigitalTools/DigitalTools'
import Footer from './component/Footer/Footer'
import GetSteps from './component/GetSteps/GetSteps'
import NavBar from './component/Navbar/Navbar'
import PricingSection from './component/PricingSection/PricingSection'
import WorkFlow from './component/WorkFlow/WorkFlow'

function App() {
  const [cardItems,setCardItems]= useState([])

  return (
    <>    
    <NavBar cardItems={cardItems} />

    <Banner/>

    <ActiveUser/>

    <DigitalTools setCardItems={setCardItems} cardItems={cardItems}/>

    <GetSteps/>

    <PricingSection/>

    <WorkFlow/>

    <Footer/>
    </>
  )
}

export default App
