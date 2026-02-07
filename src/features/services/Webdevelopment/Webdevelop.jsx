import React from "react";
import { motion } from "framer-motion";
import FeatureGrid from "./components/FeatureGrid";
import CTA from "../../contact/components/CTA";
import HeaderSection from "../headerSection/HeaderSection";
import { useEffect } from "react";
import ProcessWeb from "./components/ProcessWeb";
import ServiceCard from "../common/ServiceCard";
import { SiReact, SiAngular, SiTailwindcss, SiPhp, SiDjango, SiDotnet } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
const Webdevelop = () => {

  const webTechs = [
    {
      name: "React.js",
      icon: <SiReact />,
      description: "Modern UI library for building responsive and fast web interfaces"
    },
    {
      name: "Angular",
      icon: <SiAngular />,
      description: "Robust frontend framework for building dynamic, scalable web applications"
    },
    {
      name: "ASP.NET",
      icon: <SiDotnet />,
      description: "Microsoft framework for building scalable web applications and APIs"
    },
    {
      name: "PHP",
      icon: <SiPhp />,
      description: "Server-side scripting language for dynamic and robust web applications"
    },
    {
      name: "Django",
      icon: <SiDjango />,
      description: "Python-based web framework for secure and scalable applications"
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      description: "Backend runtime for building fast, scalable, and event-driven web services"
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      description: "Utility-first CSS framework for responsive and maintainable web designs"
    }
  ];


  useEffect(() => {
    document.title = 'Web Development | Techzmatrix Software Technologies'
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
        title="Web Development"
        subtitle="Creating High-Performance, Responsive Web Solutions"
        description="Designing and building modern web applications with intuitive UI/UX, scalable architecture, and seamless user experiences."
        heroImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9huvd-IGjFhmvNOVS13tldGCSNOgdsSLvoQ&s"
      />
      <FeatureGrid />
      <ProcessWeb />
      <div className="px-5">
        <ServiceCard
          title="Web Experiences That Perform."
          description="From concept to deployment: scalable, responsive web applications built with modern technologies."
          technologies={webTechs}
        />
      </div>
      <CTA />
    </section>
  );
};

export default Webdevelop;
