import Image from "next/image";
import Card from "./Card";
import styles from './Home.module.css';

const About = () => {
  return (
    <div className="relative mt-16 flex justify-end p-20">
      <Image
        width={500}
        height={500}
        src="/assets/home/palm.png"
        alt="Playa"
        className="absolute bottom-0 left-0 w-32 h-32"
      />
      <Image
        width={500}
        height={500}
        src="/assets/home/beach.png"
        alt="Palmera"
        className="absolute top-0 right-0 w-32 h-32"
      />
      <div className={` ${styles.containerGradientAbout}  p-8 leading-10`}>
        <p className="text-2xl ">
          <span className="text-primary font-bold">Mono Beach</span> es un
          grupo de restaurantes sin franquicia que ha demostrado su solidez y
          crecimiento a lo largo de los años.
        </p>
        <p className="text-lg mt-4 ">
          Nuestra misión y visión se centran en ofrecer un servicio de calidad a
          un precio justo. Ofrecemos menús que cambian día a día y cartas
          innovadoras que satisfacen diferentes gustos.
        </p>
      </div>
      <Card />
    </div>
  );
};

export default About;
