"use client";

import megavoipLogo from "@/assets/logos/megavoip-logo-color.jpg";
import arquitecturaLogo from "@/assets/logos/EAU-gray-scale.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-24 flex-none pr-24 items-center"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={megavoipLogo}
              alt="MegaVoip Logo"
              className="logo-ticker-image grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />
            <Image
              src={arquitecturaLogo}
              alt="Estudio de Arquitectura y Urbanismo Logo"
              className="logo-ticker-image grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />

            {/* second set of logos for seamless loop animation */}
            <Image
              src={megavoipLogo}
              alt="MegaVoip Logo"
              className="logo-ticker-image grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />
            <Image
              src={arquitecturaLogo}
              alt="Estudio de Arquitectura y Urbanismo Logo"
              className="logo-ticker-image grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
