"use client";

import ArrowIcon from "@/assets/icons/arrow-right.svg";
import mainImage from "@/assets/images/main-image-vexter.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Respuesta a incidentes potenciada por IA</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tigher bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
              Tu SOC nunca duerme
            </h1>
            <p className="text-xl text-[#010d3e] tracking-tight mt-6">
              Vexter detecta alertas críticas de seguridad, las enriquece con contexto y llama automáticamente a tus clientes con IA de voz — antes de que el daño escale.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <a
                href="https://wa.me/573124577909?text=Hola%2C%20quiero%20solicitar%20un%20demo%20de%20Vexter"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Solicitar demo
              </a>
              <a
                href="https://wa.me/573124577909?text=Hola%2C%20me%20gustaría%20ver%20cómo%20funciona%20Vexter"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-text gap-1"
              >
                <span>Ver cómo funciona</span>
                <ArrowIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative flex items-center justify-center">
            <motion.div
              animate={{
                translateY: [-15, 15],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            >
              <Image
                src={mainImage}
                alt="Vexter logo"
                width={620}
                height={620}
                className="drop-shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
