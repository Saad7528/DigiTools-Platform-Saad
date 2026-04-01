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

  return (
    <>    
    <NavBar/>

    <Banner/>

    <ActiveUser/>

    <DigitalTools/>

    <GetSteps/>

    <PricingSection/>

    <WorkFlow/>

    <Footer/>
    </>
  )
}

export default App
