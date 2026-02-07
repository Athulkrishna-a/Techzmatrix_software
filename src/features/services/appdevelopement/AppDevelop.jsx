import { motion } from "framer-motion";
import CTA from "../../contact/components/CTA"
import FeatureMobile from "./components/FeatureMobile";
import { useEffect } from "react";
import ProcessSection from "./components/ProcessSection";
import HeaderSection from "../headerSection/HeaderSection";
import ServiceCard from "../common/ServiceCard";
import { FaFlutter } from "react-icons/fa6";
import { SiReact } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { SiKotlin } from "react-icons/si";
import { SiSwift } from "react-icons/si"

const AppDevelop = () => {

  const appTechs = [
    {
      name: "Flutter",
      icon: <FaFlutter />,
      description: "Cross-platform framework for building iOS & Android apps"
    },
    {
      name: "React Native",
      icon: <SiReact />,
      description: "Build native apps using React.js concepts"
    },
    {
      name: ".NET Core",
      icon: <SiDotnet />,
      description: "Microsoft framework for cross-platform mobile & desktop apps"
    },
    {
      name: "Kotlin",
      icon: <SiKotlin />,
      description: "Native Android development language"
    },
    {
      name: "Swift",
      icon: <SiSwift />,
      description: "Native iOS development language"
    },
  ];
  useEffect(() => {
    document.title = 'App Development | Techzmatrix Software Technologies'
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
        title="Building Scalable Digital Products for the Future"
        subtitle="App Development"
        description="Crafting innovative mobile and web applications that redefine user experiences and drive business success."
        heroImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2RBm5Zl7FblvbHN2rszelCbh0PdKRVeu13g&s"
      />

      <FeatureMobile />
      <ProcessSection />
      <div
        className="px-5">
        <ServiceCard

          title="Apps That Move. Fast."
          description="From concept to launch: scalable, cross-platform apps using cutting-edge technologies."
          technologies={appTechs}
        />
      </div>
      <CTA />
    </section>
  );
};

export default AppDevelop;
