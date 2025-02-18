"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavLink = ({ children, href = '#' }: { children: React.ReactNode, href?: string }) => (
  <Link href={href} className="px-3 py-2 transition-opacity duration-200 hover:opacity-80">
    {children}
  </Link>
);

const Button = ({ 
  children, 
  onClick 
}: { 
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className="px-3 py-1.5 text-base text-white rounded-md border-2 border-purple-600 border-solid transition-all duration-200 hover:bg-purple-600"
  >
    {children}
  </button>
);

export const NavigationBar = () => {
  const handleLogin = () => {
    // Handle login logic
    console.log('Login clicked');
  };

  const handleSignup = () => {
    // Handle signup logic
    console.log('Signup clicked');
  };

  return (
    <nav className="flex justify-between items-center px-8 py-5 w-full bg-stone-950 bg-opacity-40 min-h-[101px] max-md:px-5 max-md:py-5 max-sm:flex-wrap max-sm:justify-between max-sm:p-4">
      <Image
        src="/gradius_logo.svg"
        alt="Gradius Logo"
        width={209}
        height={63}
        className="object-contain"
        priority
      />
      
      <div className="flex gap-5 items-center text-base leading-6 text-white max-md:gap-2.5 max-sm:hidden">
        <NavLink>Home</NavLink>
        <NavLink>Features</NavLink>
        <NavLink>How it works</NavLink>
        <NavLink>Pricing</NavLink>
        <NavLink>FAQ</NavLink>
      </div>

      <div className="flex gap-4 items-center max-sm:ml-auto">
        <Button onClick={handleLogin}>
          Log in
        </Button>
        <Button onClick={handleSignup}>
          Sign up for free
        </Button>
      </div>
    </nav>
  );
};

export default NavigationBar;