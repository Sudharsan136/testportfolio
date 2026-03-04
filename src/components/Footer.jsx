import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram,} from "@fortawesome/free-brands-svg-icons";
import { faPhone,faEnvelope  } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className='bg-gray-800 h-56 w-full text-white flex justify-between items-center'>
            <div className='p-10'>
                <h1 className='text-5xl'><span className='text-7xl font-bold'>S</span>udharsan</h1>
                <h2 className='text-lg ml-2 mt-4'><FontAwesomeIcon icon={faEnvelope} className="text-white text-lg hover:text-gray-500 cursor-pointer mr-2" />sudharsanfs13@gmail.com</h2>
                <h2 className='text-lg ml-2 mt-1'><FontAwesomeIcon icon={faPhone} className="text-white text-lg hover:text-gray-500 cursor-pointer mr-2" />contact no: 8248373770</h2>
            </div>
            <div className='flex gap-20 mr-12'>
                <a href="https://www.linkedin.com/in/sudharsan-m-760916290" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className="text-white text-5xl hover:text-gray-500 cursor-pointer" />
                </a>
                <a href='https://github.com/Sudharsan136' target="_blank">
                    <FontAwesomeIcon icon={faGithub} className="text-white text-5xl hover:text-gray-500 cursor-pointer" />
                </a>
              
                <a href='https://www.instagram.com/i_am_nishanth_13/?hl=en'  target="_blank">
                    <FontAwesomeIcon icon={faInstagram} className="text-white text-5xl hover:text-gray-500 cursor-pointer" />
                </a>
                
            </div>

        </div>
    )
}

export default Footer