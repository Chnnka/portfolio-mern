import React from 'react'
import { images } from '../constants';


const Header = () => {
  return (
    <section>
      <header className="flex justify-between container mx-auto px-5 py-4 bg-white items-center">
        <div className="">
          <a href="/" className="">
            <img src={images.Logo} alt="logo" className="h-12 w-auto" />
          </a>
        </div>
        <div className="flex gap-x-9 items-center">
          <ul className="items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-5 font-semibold">
            <li className='relative group'><a href="/" className='px-4 py-2'>Home</a></li>
            <li><a href="/" className='px-4 py-2'>Showcase</a></li>
            <li><a href="/" className='px-4 py-2'>Contact</a></li>
          </ul>
        </div>
      </header>
    </section>
  );
}

export default Header