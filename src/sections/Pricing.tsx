"use client"

import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import {motion} from "framer-motion";

const pricingTiers = [
  {
    title: "Starter",
    monthlyPrice: 0,
    buttonText: "Comenzar gratis",
    popular: false,
    inverse: false,
    features: [
      "Hasta 50 alertas / mes",
      "1 integración (Jira o ServiceNow)",
      "Llamadas de voz IA básicas",
      "Soporte por email",
      "Dashboard de alertas",
    ],
  },
  {
    title: "Professional",
    monthlyPrice: 149,
    buttonText: "Solicitar demo",
    popular: true,
    inverse: true,
    features: [
      "Hasta 1,000 alertas / mes",
      "Integraciones ilimitadas",
      "Llamadas IA con voz personalizada",
      "Enriquecimiento de alertas con IOCs",
      "Agrupación inteligente de alertas",
      "Soporte prioritario 24/7",
      "Reportes automáticos",
    ],
  },
  {
    title: "Enterprise",
    monthlyPrice: 499,
    buttonText: "Contactar ventas",
    popular: false,
    inverse: false,
    features: [
      "Alertas ilimitadas",
      "Integraciones personalizadas (SIEM, SOAR)",
      "Detección de patrones de intrusión",
      "Análisis de activos críticos",
      "SLA garantizado",
      "Gerente de cuenta dedicado",
      "Seguridad avanzada y auditoría",
      "API completa",
      "Onboarding personalizado",
      "White-label disponible",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Precios</h2>
          <p className="section-description mt-5">
            Empieza gratis. Escala conforme tu operación de seguridad crece.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                className={twMerge(
                  "card",
                  inverse === true && "border-black bg-black text-white"
                )}
                key={title}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      inverse === true && "text-white/60"
                    )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                      animate={{
                        backgroundPositionX: "100%",
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                      className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium">
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span className="tracking-tight font-bold text-black/50">
                    /mes
                  </span>
                </div>
                <button
                  className={twMerge(
                    "btn btn-primary w-full mt-[30px]",
                    inverse === true && "bg-white text-black"
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm flex items-center gap-4"
                    >
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
