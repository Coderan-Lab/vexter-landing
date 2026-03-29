"use client";

import ArrowRight from "@/assets/icons/arrow-right.svg";
import starImage from "@/assets/decorations/star.png";
import springImage from "@/assets/decorations/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {

const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const translateY = useTransform(scrollYProgress, [0,1],[150,-150]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Tu equipo de seguridad merece trabajar menos y responder más rápido</h2>
          <p className="section-description mt-5">
            Empieza gratis hoy. Sin tarjeta de crédito. Conecta tu primera fuente de alertas en minutos y deja que Vexter haga el resto.
          </p>
          <motion.img
            src={starImage.src}
            alt="Star Image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={springImage.src}
            alt="Spring Image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
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
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
