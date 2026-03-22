"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "Vexter nos permitió responder a una alerta crítica de ransomware en minutos. La llamada automática llegó a nuestro cliente antes de que el ataque pudiera propagarse.",
    imageSrc: avatar1.src,
    name: "Carlos Mendoza",
    username: "CISO · Banco Regional",
  },
  {
    text: "Antes perdíamos horas enriqueciendo alertas manualmente. Vexter lo hace en segundos y el contexto que entrega es sorprendentemente preciso.",
    imageSrc: avatar2.src,
    name: "Laura Jiménez",
    username: "Analista SOC · Fintech",
  },
  {
    text: "Nuestros clientes quedaron impresionados con la proactividad. Recibir una llamada explicando el incidente antes de darse cuenta ellos mismos es un diferenciador enorme.",
    imageSrc: avatar3.src,
    name: "Felipe Torres",
    username: "Director de Operaciones · MSSP",
  },
  {
    text: "La integración con Jira fue cuestión de minutos. Vexter detectó y agrupó alertas que antes se perdían en el ruido del SIEM.",
    imageSrc: avatar4.src,
    name: "Ana Restrepo",
    username: "Ingeniería de Seguridad · Retail",
  },
  {
    text: "La voz IA es tan natural que nuestros clientes pensaban que era un especialista real llamando. La calidad de las recomendaciones de mitigación es excelente.",
    imageSrc: avatar5.src,
    name: "Sergio Vargas",
    username: "VP Tecnología · Aseguradora",
  },
  {
    text: "Redujimos el tiempo de respuesta a incidentes en un 80%. Vexter trabaja 24/7 y nunca deja una alerta crítica sin atender.",
    imageSrc: avatar6.src,
    name: "María González",
    username: "Head of SecOps · Gobierno",
  },
  {
    text: "La detección de patrones de intrusión es lo que nos vendió. Identificó una cadena de reconocimiento-compromiso que ninguna de nuestras herramientas anteriores detectó.",
    imageSrc: avatar7.src,
    name: "Andrés Castillo",
    username: "Threat Analyst · Telecomunicaciones",
  },
  {
    text: "El modelo de precios es muy razonable para el valor que entrega. Recuperamos la inversión con el primer incidente que Vexter nos ayudó a contener.",
    imageSrc: avatar8.src,
    name: "Diana Ramos",
    username: "CFO · Startup de Ciberseguridad",
  },
  {
    text: "El onboarding fue increíblemente rápido. En un día ya teníamos alertas enriquecidas y llamadas automatizadas activas en producción.",
    imageSrc: avatar9.src,
    name: "Julián Mora",
    username: "CTO · Empresa de Manufactura",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%"
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <div className="card" key={text}>
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Lo que dicen nuestros clientes</div>
          </div>
          <h2 className="section-title mt-5">Seguridad que habla por sí sola</h2>
          <p className="section-description">
            Equipos de seguridad en toda Latinoamérica confían en Vexter para automatizar su respuesta a incidentes y mantener a sus clientes informados en tiempo real.
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
