import React from 'react'
import { images } from '../constants';

const navItemInfo=[
  { name: "Home" },
  { name: "Showcase" },
  { name: "Contact" },
]

const NavItem=({name})=>{
  return (
    <li className='relative group hover:scale-110 hover:text-orange-900'>
      <a href="/" className='px-4 py-2'>{name}</a>
      <span className='text-orange-700 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>\</span>
    </li>
  );
}

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
            {navItemInfo.map((item)=>(
              <NavItem key={item.name} name={item.name}/>
            ))}
          </ul>
        </div>
        <button className="mt-5 lg:mt-0 border-2 border-amber-700 px-6 py-2 rounded-full text-amber-700 font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110">
          Downloads
        </button>
      </header>
    </section>
  );
}

export default Header