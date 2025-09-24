import AOS from 'aos';
import 'aos/dist/aos.css';


import 'remixicon/fonts/remixicon.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Navbar from './components/Navbar'
import LandingPageV2 from './pages/LandingPageV2'
import About from './pages/About'
import MotivasiV2 from './pages/MotivasiV2';
import Footer from './components/Footer';

AOS.init()

function App() {

  return (
      <div className='w-full min-h-screen flex flex-col bg-blue-50'>
        <Navbar/>
        <LandingPageV2/>
        <About/>
        <MotivasiV2/>
        <Footer/>
      </div>
  )
}

export default App
