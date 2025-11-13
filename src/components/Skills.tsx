import { useState } from "react";
import { FaJs, FaReact, FaHtml5, FaPhp, FaGitAlt, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiTypescript, SiFirebase, SiXampp, SiFigma } from "react-icons/si";
import { MdPeople, MdLightbulb, MdFavorite, MdCheckCircle, MdApi } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { FaCss3Alt } from "react-icons/fa6";

const Skills = () => {
  // Ordenadas de mayor a menor porcentaje
  const technicalSkills = [
    { name: "JavaScript", level: 90, icon: FaJs, color: "#F7DF1E" },
    { name: "HTML", level: 90, icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", level: 90, icon: FaCss3Alt, color: "#1572B6" },
    { name: "Tailwind CSS", level: 85, icon: SiTailwindcss, color: "#06B6D4" },
    { name: "MySQL", level: 85, icon: SiMysql, color: "#4479A1" },
    { name: "React", level: 85, icon: FaReact, color: "#61DAFB" },
    { name: "Figma", level: 80, icon: SiFigma, color: "#F24E1E" },
    { name: "Git", level: 75, icon: FaGitAlt, color: "#F05032" },
    { name: "GitHub", level: 75, icon: FaGithub, color: "#ffffff" },
    { name: "TypeScript", level: 75, icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", level: 70, icon: FaNodeJs, color: "#339933" },
    { name: "PHP", level: 60, icon: FaPhp, color: "#777BB4" },
    { name: "Firebase", level: 50, icon: SiFirebase, color: "#FFCA28" },
    { name: "XAMPP", level: 50, icon: SiXampp, color: "#FB7A24" },
    { name: "REST APIs", level: 50, icon: MdApi, color: "#009688" },
  ];

  const professionalSkills = [
    { name: "Comunicación", level: 80, icon: BsChatDots, color: "#3B82F6" }, // Azul - representa diálogo y claridad
    { name: "Trabajo en Equipo", level: 90, icon: MdPeople, color: "#10B981" }, // Verde - representa colaboración y crecimiento
    { name: "Creatividad", level: 90, icon: MdLightbulb, color: "#F59E0B" }, // Ámbar - representa ideas e innovación
    { name: "Dedicación", level: 90, icon: MdFavorite, color: "#EF4444" }, // Rojo - representa pasión y compromiso
    { name: "Gestión de Proyectos", level: 75, icon: MdCheckCircle, color: "#8B5CF6" }, // Violeta - representa organización y estrategia
  ];

  const SkillCard = ({ skill, size = "normal" }: { skill: typeof technicalSkills[0], size?: "normal" | "large" }) => {
    const Icon = skill.icon;
    const iconSize = size === "large" ? "text-6xl" : "text-4xl";
    const isGitHub = skill.name === "GitHub";

    return (
      <div className="relative group">
        <div
          className="relative bg-card/10 backdrop-blur-sm border-2 border-border/50 rounded-xl overflow-hidden transition-all duration-500 ease-out hover:border-primary/50 hover:shadow-2xl cursor-pointer h-full min-h-[120px] flex items-center justify-center p-4"
        >
          {/* Background de color que se expande */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out scale-0 group-hover:scale-150 rounded-xl"
            style={{
              background: isGitHub ? '#000000' : skill.color,
              transformOrigin: 'center center',
            }}
          ></div>

          {/* Contenido (siempre visible, solo cambia de color en hover) */}
          <div className="relative z-10 flex flex-col gap-2 items-center justify-center">
            {isGitHub ? (
              // GitHub siempre en blanco
              <Icon
                className={`${iconSize} transition-all duration-300 group-hover:scale-110 text-white`}
              />
            ) : (
              // Otros iconos cambian de color a blanco en hover
              <div className="relative">
                <Icon
                  className={`${iconSize} transition-all duration-300 group-hover:scale-110 group-hover:opacity-0`}
                  style={{ color: skill.color }}
                />
                <Icon
                  className={`${iconSize} absolute top-0 left-0 transition-all duration-300 group-hover:scale-110 opacity-0 group-hover:opacity-100 text-white`}
                />
              </div>
            )}
            <span className="text-sm font-semibold text-white text-center transition-colors duration-300">
              {skill.name}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#01041b] to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-9xl font-anton font-bold text-primary-foreground leading-none">
            MIS
          </h1>
          <h1 className="text-[1.7rem] md:text-[8rem] lg:text-[1.6rem] font-jost font-bold text-primary-foreground leading-none">
            HABILIDADES
          </h1>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Habilidades Técnicas - Izquierda */}
            <div>
              <h2 className="text-3xl font-jost font-bold text-primary-foreground text-center mb-8">
                Técnicas
              </h2>
              <div className="space-y-4">
                {/* Primera fila: 3 cards con iconos grandes */}
                <div className="grid grid-cols-3 gap-4">
                  {technicalSkills.slice(0, 3).map((skill) => (
                    <SkillCard key={skill.name} skill={skill} size="large" />
                  ))}
                </div>
                {/* Segunda fila: 5 cards */}
                <div className="grid grid-cols-5 gap-3">
                  {technicalSkills.slice(3, 8).map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
                {/* Tercera fila: 7 cards */}
                <div className="grid grid-cols-7 gap-2">
                  {technicalSkills.slice(8, 15).map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            </div>

            {/* Habilidades Profesionales - Derecha */}
            <div>
              <h2 className="text-3xl font-jost font-bold text-primary-foreground text-center mb-8">
                Profesionales
              </h2>
              <div className="flex flex-col gap-4">
                {/* Primera fila: 1 card - Creatividad */}
                <div>
                  <SkillCard
                    key="Creatividad"
                    skill={professionalSkills.find(s => s.name === "Creatividad")!}
                    size="large"
                  />
                </div>
                {/* Segunda fila: 2 cards - Comunicación y Dedicación */}
                <div className="grid grid-cols-2 gap-4">
                  <SkillCard
                    key="Comunicación"
                    skill={professionalSkills.find(s => s.name === "Comunicación")!}
                  />
                  <SkillCard
                    key="Dedicación"
                    skill={professionalSkills.find(s => s.name === "Dedicación")!}
                  />
                </div>
                {/* Tercera fila: 2 cards - Trabajo en Equipo y Gestión de Proyectos */}
                <div className="grid grid-cols-2 gap-4">
                  <SkillCard
                    key="Trabajo en Equipo"
                    skill={professionalSkills.find(s => s.name === "Trabajo en Equipo")!}
                  />
                  <SkillCard
                    key="Gestión de Proyectos"
                    skill={professionalSkills.find(s => s.name === "Gestión de Proyectos")!}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
