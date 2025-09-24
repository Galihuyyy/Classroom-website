import { useState } from 'react'
import { logo } from '../assets/data/assets'

const Navbar = () => {
    const [show, setShow] = useState(false)
    const handleClickIcon = () => {
        setShow(!!!show)
    }

    let active = show ? "opacity-100 right-14" : "opacity-0 right-0 md:opacity-100"
    
  return (
    <nav data-aos="fade-down" data-aos-duration="800" className="navbar z-10 fixed bg-blue-50/90 md:bg-blue-50/5 md:backdrop-blur-xs top-0 py-4 w-full transition-all font-montserrat">
        <div className="px-6 h-full mx-auto md:px-14">
            <div className="navbar-box w-full flex items-center justify-between">
                <div className="logo">
                    <img src={logo} alt="" width={53} />
                </div>
                <ul className={`fixed flex items-center ${active} transition-all duration-400 ease-in-out top-24 flex-col gap-4 backdrop-blur-xs bg-white/30 w-48 py-5 rounded border border-slate-400 shadow-lg md:shadow-none md:border-none md:py-0 md:w-auto  md:flex-row md:static md:gap-12`}>
                    <li><a href="/" className='font-medium'>Style Kita</a></li>
                    <li><a href="#tentang-kita" className='font-medium opacity-75'>Tentang Kita</a></li>
                    <li><a href="#suara-kita" className='font-medium opacity-75'>Suara Kita</a></li>
                </ul>
                <i onClick={() => handleClickIcon()} className="mebu-icon ri-menu-line text-3xl block md:hidden"></i>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
