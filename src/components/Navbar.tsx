import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
        <div className="container">
            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blaskish">
                <Link className='navbar__link relative' href='#'>HOME</Link>
                <Link className='navbar__link relative' href='#'>CATEGORY</Link>
                <Link className='navbar__link relative' href='#'>MEN'S</Link>
                <Link className='navbar__link relative' href='#'>WOMEN'S</Link>
                <Link className='navbar__link relative' href='#'>JEWELRY</Link>
                <Link className='navbar__link relative' href='#'>PERFUME</Link>
                <Link className='navbar__link relative' href='#'>BLOG</Link>
                <Link className='navbar__link relative' href='#'>HOT OFFER</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar;