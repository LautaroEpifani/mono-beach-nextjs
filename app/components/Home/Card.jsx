import Image from "next/image"
import { BiDownArrow } from "react-icons/bi"
import styles from './Home.module.css';

const Card = () => {
  return (
    <div className={` ${styles.bgCustom} p-4 pl-8 pr-8  relative w-1/5 text-center border border-black pb-20 rounded-lg  `}>
      <Image width={500} height={500} src="/assets/nav/logo-mono.png" alt="Logo" className="w-full mb-12" />
      <div className="flex justify-center gap-8 mb-5">
        <button className="px-4 py-2 bg-yellow-300 rounded-full font-semibold text-white w-36">Carta</button>
        <button className="px-4 py-2 bg-gray-900 rounded-full font-semibold text-white w-36">Reservar</button>
      </div>
      <button className="px-4 py-2 bg-white border border-black text-black font-semibold rounded-full w-3/4 mb-8">
        <span className="mr-2"><BiDownArrow /></span> Haz un tour <span className="ml-2"><BiDownArrow /></span>
      </button>
      <h2 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full text-sm text-gray-700">
        Carrer de Eduard Maristany, 85, 1, 08912 Badalona, Barcelona
      </h2>
    </div>
  )
}

export default Card