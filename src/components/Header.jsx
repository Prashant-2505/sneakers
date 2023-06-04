'use client';
import React, { useState } from 'react';
import Wrapper from './Wrapper';
import Link from 'next/link';
import Menu from './Menu';

const Header = () => {
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState('translate-y-0');
  const [lastScrollY, setLastScrollY] = useState(0);

  return (
    <header className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transfrom duration-300 ${show}`}>
      <Wrapper className='h-[60px] flex justify-between items-center'>
        <Link href='/'>
          <p className='w-[40px] md:w-[60px]'>Sneaker</p>
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />

      </Wrapper>
    </header>
  );
};

export default Header;
