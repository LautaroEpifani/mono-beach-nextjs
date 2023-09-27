"use client"
import Image from "next/image";
import { useState } from "react";

const CardShowCase = () => {

  const [cards, setCards] = useState([
    // Tarjetas existentes
    { image: '/assets/home/chia.jpg', title: 'Tarjeta 1' },
    { image: '/assets/home/fruit.jpg', title: 'Tarjeta 2' },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="flex items-center justify-center relative">
      <button
        className="bg-gray-700 text-white border-none px-4 py-2 text-2xl cursor-pointer transition duration-300 rounded-l-md hover:bg-gray-900"
        onClick={handlePrev}
      >
        &#8249;
      </button>
      <div className="overflow-hidden relative w-full">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-md shadow-md p-4 m-2 w-full"
            >
              <Image width={500} height={500} src={card.image} alt={card.title} className="w-full h-96 object-cover" />
              <h2 className="text-xl mt-2">{card.title}</h2>
            </div>
          ))}
        </div>
      </div>
      <button
        className="bg-gray-700 text-white border-none px-4 py-2 text-2xl cursor-pointer transition duration-300 rounded-r-md hover:bg-gray-900"
        onClick={handleNext}
      >
        &#8250;
      </button>
    </div>
  )
}

export default CardShowCase