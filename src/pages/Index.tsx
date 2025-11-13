import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScrollingTicker from "@/components/ScrollingTicker";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaPhp, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiXampp, SiFirebase, SiTypescript } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const Index = () => {
  // Frontend Technologies
  const Technologies = [
    { name: "REACT", icon: FaReact, color: "#61DAFB" },
    { name: "JAVASCRIPT", icon: FaJs, color: "#F7DF1E" },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "TAILWIND CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "TYPESCRIPT", icon: SiTypescript, color: "#3178c6" },
    { name: "NODE.JS", icon: FaNodeJs, color: "#339933" },
    { name: "PHP", icon: FaPhp, color: "#777BB4" },
    { name: "MYSQL", icon: SiMysql, color: "#4479A1" },
    { name: "REST APIs", icon: TbApi, color: "#1572B6" },
    { name: "GIT", icon: FaGitAlt, color: "#F05032" },
    { name: "GITHUB", icon: FaGithub, color: "#181717" },
    { name: "XAMPP", icon: SiXampp, color: "#FB7A24" },
    { name: "FIREBASE", icon: SiFirebase, color: "#FFCA28" },
  ];
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ScrollingTicker technologies={Technologies} />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
