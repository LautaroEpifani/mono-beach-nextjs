"use client"
import Image from 'next/image';
import {  useState } from 'react';

const Hero = () => {

  const [isImageVisible, setImageVisible] = useState(false);

  const handleImageLoad = () => {
    setImageVisible(true);
  };

  return (
    <div className="relative w-full h-screen bg-gray-900 mb-16">
      <Image
        width={500}
        height={500}
        unoptimized={true}
        src="/assets/home/mono-hero.jpg"
        alt="bg image"
        className={`w-full h-full object-cover transition-opacity ${
          isImageVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleImageLoad}
      />
      <div
        className={`absolute top-1/3 left-10 z-10 text-white text-4xl uppercase tracking-wide font-fuggles  ${
          isImageVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Vive una experiencia única <br /> en Mono Beach 
      </div>
    </div>
  )
}

export default Hero