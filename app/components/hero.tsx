"use client";

import React from "react";
import Image from "next/image";
import Button from "./SignUpButton";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center mt-[100px] px-4">
      {/* Hero SVG */}
      <div className="relative w-full max-w-5xl flex justify-center">
        <Image
          src="/hero.svg" // Replace with your exported SVG file path
          alt="Hero Section"
          width={930} // Adjust width as needed
          height={341} // Adjust height as needed
          className="object-contain"
          priority
        />
      </div>

      {/* Call-to-Action Button */}
      <div className="mt-6 flex justify-center">
        <Button>
          Start studying for free
        </Button>
      </div> 
    </section>
  );
};

export default Hero;
