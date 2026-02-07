import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import CTA from "../../contact/components/CTA"
import HeaderSection from "../headerSection/HeaderSection";
import ProcessCloud from "./components/ProcessCloud ";
import FeatureCloud from "./components/FeatureCloud";


const Clouddevelop = () => {

  useEffect(() => {
    document.title = 'Cloud & Back-End Development | Techzmatrix Software Technologies'
  }, [])
  return (
    <section className="relative overflow-hidden">

      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
         linear-gradient(
    to right,
    rgba(355, 255, 255, 0.035) 1px,
    transparent 1px
  ),
  linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.055) 1px,
    transparent 1px
  ),
  radial-gradient(
    circle 800px at 0% 200px,
    rgba(95, 153, 196, 0.35),
    transparent 0%
  )
      `,
          backgroundSize: "96px 64px, 96px 64px, 100% 100%",
        }}
      />


      <HeaderSection
        title="Powering Scalable & Reliable Digital Systems"
        subtitle="Cloud & Backend Development"
        description="Designing robust backend architectures and cloud solutions that ensure performance, security, and seamless scalability."
        heroImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6jm6Jy-qQKmXEybGwC5wXHYIrMSbZ6Kb3Fg&s"
      />

      <FeatureCloud/>
      <ProcessCloud/>


      <CTA />
    </section>
  );
};

export default Clouddevelop;
