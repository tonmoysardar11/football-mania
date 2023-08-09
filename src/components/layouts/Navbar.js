import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../../media/footballmania.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setmenu] = useState(false);
    const toggle = () => {
        setmenu(!menu)
    }
    const [location, setlocation] = useState('');
    const path = (name) => {
        setlocation(name);
    }

    

    
    return (
        <header className="z-50 text-gray-400 bg-black shadow-2xl w-full body-font fixed px-5 md:px-0">
            <div className="w-full mx-auto flex flex-wrap px-1 md:px-0 justify-between items-center">
                <Link className="mx-3 flex lg:mx-20 title-font font-medium items-center text-white md:mb-0" to='/' onClick={()=>setmenu(false)}>
                    <img src={logo} alt="" id='logo' width={80} height={80}/>
                    <span className="ml-6 text-3xl text-red-500 font-bold">FOOTBALL</span><span className="ml-2 text-3xl font-bold">MANIA</span>
                </Link>
                {menu ? <FontAwesomeIcon icon={faBars} onClick={toggle} className=' mx-2 lg:hidden block rotate-90 text-xl duration-200' /> : <FontAwesomeIcon icon={faBars} onClick={toggle} className=' mx-2 lg:hidden block text-xl duration-200' />}

                <div className={` ${menu ? `flex` : `hidden`} flex-col lg:flex-row justify-between items-center lg:flex py-4 lg:py-0 w-full lg:w-1/2`}>

                <nav className="mx-auto lg:mr-14 flex flex-wrap items-center text-base justify-center">
                    
                    <div>
                        <Link className={location === 'league' ? "mx-5 text-white" : "mx-5 hover:text-red-500"} to='/league' onClick={() => {path('league');setmenu(false)}}>Leagues</Link>
                        <div className={location === 'league' ? "h-1 w-100 mx-5 mt-1 bg-red-500 rounded" : ''}></div>
                    </div>
                    <div> <Link className={location === 'country' ? "mx-5 text-white" : "mx-5 hover:text-red-500"} to='/country' onClick={() => {path('country');setmenu(false)}}>Country</Link>
                        <div className={location === 'country' ? "h-1 w-100 mx-5 mt-1 bg-red-500 rounded" : ''}></div>
                    </div>

                    <div> <Link className={location === 'team' ? "mx-5 text-white" : "mx-5 hover:text-red-500"} to='/teams' onClick={() => {path('team');setmenu(false)}}>Teams</Link>
                        <div className={location === 'team' ? "h-1 w-100 mx-5 mt-1 bg-red-500 rounded" : ''}></div>
                    </div>

                    <div> <Link className={location === 'transfer' ? "ml-5 text-white" : "ml-5 hover:text-red-500"} to='/transfers' onClick={() => {path('transfer');setmenu(false)}}>Transfers</Link>
                        <div className={location === 'transfer' ? "h-1 w-100 ml-5 mt-1 bg-red-500 rounded" : ''}></div>
                    </div>

                </nav>
                </div>



            </div>
        </header>
    )
}

export default Navbar
