import React from 'react'
import me from "../assets/me.png";

const Box = () => {
  return (
    <div className='bg-gray-400 h-[500px] w-full mt-12 p-24 flex justify-around pb-28'>
      <div>
         <img src={me} alt="profile" className='h-52 object-contain border border-black rounded-full transition-all duration-200 hover:translate-y-2' />
            <h1 className='text-black font-semibold text-xl '><span className='text-red-600 font-bold text-5xl'>S</span>udharsan.<span className='text-red-600 font-bold text-5xl'>M</span></h1>
                <h2 className='text-black font-semibold text-2xl mt-2'>Web Developer</h2>
                <h3>(MERN stack)</h3>
      </div>
           
            <div className="w-[2px] h-[300px] bg-gray-600"></div>
            <div className=''>
                
                <span className='text-black font-medium pt-4 mr-28 '>Tech skills:</span>
                <ol className="list-disc pl-5 mt-2">
                    <li className='text-rose-700 hover:underline hover:text-black cursor-pointer '><a href='https://en.wikipedia.org/wiki/HTML'>HTML</a></li>
                    <li  className='text-rose-700 hover:underline hover:text-black cursor-pointer '><a href='https://en.wikipedia.org/wiki/CSS'>CSS</a></li>
                    <li  className='text-rose-700 hover:underline hover:text-black cursor-pointer '><a href='https://en.wikipedia.org/wiki/JavaScript'>JavaScript</a></li>
                    <li  className='text-rose-700 hover:underline hover:text-black cursor-pointer '><a href='https://en.wikipedia.org/wiki/React_(software)'>ReactJS</a></li>
                    <li  className='text-rose-700 hover:underline hover:text-black cursor-pointer '><a href='https://en.wikipedia.org/wiki/MongoDB'>MongoDB</a></li>
                    <li  className='text-rose-700 hover:underline hover:text-black cursor-pointer '><a href='https://en.wikipedia.org/wiki/Node.js'>NodeJS</a></li>
                    <li  className='text-rose-700 hover:underline hover:text-black cursor-pointer '><a href='https://en.wikipedia.org/wiki/Express.js'>ExpressJS</a></li>
                    <li  className='text-rose-700 hover:underline hover:text-black cursor-pointer '><a href='https://en.wikipedia.org/wiki/Firebase'>Firebase</a></li>
                    <li  className='text-rose-700 hover:underline hover:text-black cursor-pointer '><a href='https://en.wikipedia.org/wiki/API'>Axios api</a></li>
                </ol>
            </div>
    </div>
  )
}

export default Box