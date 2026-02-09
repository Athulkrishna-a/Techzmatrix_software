
import { useEffect } from "react";
import CTA from "../../contact/components/CTA"
import HeaderSection from "../headerSection/HeaderSection";
import ProcessCloud from "./components/ProcessCloud ";
import FeatureCloud from "./components/FeatureCloud";
import ServiceCard from "../common/ServiceCard";



import {
  SiSpring,
  SiNodedotjs,
  // SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiRedis
} from "react-icons/si";

const Clouddevelop = () => {

const cloudBackendTechs = [
  {
    name: "Spring Boot",
    icon: <SiSpring />,
    description: "Enterprise-grade Java framework for building RESTful APIs"
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    description: "Event-driven backend runtime for scalable network applications"
  },
  // {
  //   name: "AWS",
  //   icon: <SiAmazonaws />,
  //   description: "Cloud infrastructure for compute, storage, and deployment"
  // },
  {
    name: "Docker",
    icon: <SiDocker />,
    description: "Containerization for consistent deployments"
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes />,
    description: "Container orchestration for scaling and resilience"
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    description: "Advanced open-source relational database"
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    description: "Reliable relational database for backend systems"
  },
  {
    name: "Redis",
    icon: <SiRedis />,
    description: "In-memory cache for high-performance applications"
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    description: "Backend-as-a-Service for authentication and real-time data"
  }
];


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

      <FeatureCloud />
      <ProcessCloud />
      <div className="px-5">
        <ServiceCard
          title="Backends That Scale. Reliably."
          description="Secure, high-performance backend systems and cloud infrastructure built for growth."
          technologies={cloudBackendTechs}
        />
      </div>


      <CTA />
    </section>
  );
};

export default Clouddevelop;
