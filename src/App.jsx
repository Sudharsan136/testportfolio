import { useState } from 'react'
import Box from './components/Box'
import Project from './components/Project'
import Footer from './components/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faEnvelope  } from "@fortawesome/free-solid-svg-icons";
import About from './components/About';


function App() {


  return (
    <div>
      <div className='flex justify-center w-full'>
        <div className='' >
          <h1 className='text-red-800 text-xl font-bold animate-slideDown '><span className='text-blue-400 font-extrabold text-5xl relative'>H</span>ello Welcome To My Page</h1>
          <div className='absolute right-5 top-3'>
            <h2 className='text-xl font-bold animate-slideDown'><FontAwesomeIcon icon={faEnvelope} className="text-black text-xl hover:text-gray-500 cursor-pointer mr-2" />sudharsanfs13@gmail.com</h2>
            <h3 className='text-xl font-semibold animate-slideDown'><FontAwesomeIcon icon={faPhone} className="text-black text-xl hover:text-gray-500 cursor-pointer mr-2" />+91 8248373770</h3>
          </div>
           
        </div>

      </div>

      <Box />
      <About/>
      <Project />
      <Footer />
    </div>
  )
}

export default App
