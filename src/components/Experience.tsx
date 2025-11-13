import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      year: "2022 - 2023",
      title: "Desarrollador Web",
      company: "Angel's Tannery",
      description: "Desarrollo de aplicaciones web utilizando tecnologías como HTML, CSS, JavaScript, React, Vue.js, node.js y MySQL.",
      color: "#2b46ff",
    },
    {
      year: "2024",
      title: "Desarrollador Frontend",
      company: "Mundo Tecnológico de Comunicaciones SAS",
      description: "Desarrollo y mantenimiento de aplicaciones web, utilizando tecnologías como PHP, Xajax y MySQL.",
      color: "#2b46ff",
    },
    {
      year: "Actualidad",
      title: "Diseñador Web Fullstack Freelance",
      company: "Independiente",
      description: "Desarrollo de soluciones web personalizadas para clientes diversos, incluyendo diseño responsive, optimización de rendimiento y experiencia de usuario.",
      color: "#2b46ff",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black to-[#01041b]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-[2.94rem] font-jost font-bold text-primary-foreground leading-none">
            EXPERIENCIA
          </h1>
          <h1 className="text-6xl md:text-[6rem] lg:text-[6rem] font-anton font-bold text-primary-foreground leading-none">
            LABORAL
          </h1>
        </div>

        {/* Timeline - Vertical en móvil, Horizontal en desktop */}
        <div className="relative">
          {/* Vista móvil - Vertical */}
          <div className="md:hidden flex flex-col items-center gap-8 px-4">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex flex-col items-center w-full max-w-md">
                {/* Content Card */}
                <div className="w-full">
                  <div className="relative group">
                    <div className="relative bg-card/10 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl cursor-pointer min-h-[280px] flex items-center justify-center p-6 hover:scale-105">
                      {/* Background de color que se expande */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out scale-0 group-hover:scale-150 rounded-xl"
                        style={{
                          background: exp.color,
                          transformOrigin: 'center center',
                        }}
                      ></div>

                      {/* Contenido */}
                      <div className="relative z-10 flex flex-col gap-3 items-center justify-center text-center">
                        {/* Icono */}
                        <div className="relative">
                          <Briefcase
                            className="transition-all duration-300 group-hover:scale-110 group-hover:opacity-0"
                            style={{ color: exp.color }}
                            size={40}
                          />
                          <Briefcase
                            className="absolute top-0 left-0 transition-all duration-300 group-hover:scale-110 opacity-0 group-hover:opacity-100 text-white"
                            size={40}
                          />
                        </div>

                        {/* Año */}
                        <div className="relative px-4 w-full flex justify-center">
                          <span className="text-sm font-semibold transition-colors duration-300 group-hover:opacity-0 whitespace-nowrap" style={{ color: exp.color }}>
                            {exp.year}
                          </span>
                          <span className="text-sm font-semibold absolute top-0 left-1/2 -translate-x-1/2 transition-colors duration-300 opacity-0 group-hover:opacity-100 text-white whitespace-nowrap">
                            {exp.year}
                          </span>
                        </div>

                        {/* Título */}
                        <h3 className="text-lg font-bold text-white">
                          {exp.title}
                        </h3>

                        {/* Compañía */}
                        <p className="text-sm font-medium text-white/80">
                          {exp.company}
                        </p>

                        {/* Descripción */}
                        <p className="text-xs text-white/70">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Vista desktop - Horizontal con scroll */}
          <div className="hidden md:block relative overflow-x-auto pb-8">
            <div className="flex items-start gap-8 min-w-max px-4">
              {/* Línea horizontal */}
              <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-[#10bdff]"></div>

              {experiences.map((exp, index) => (
                <div key={index} className="relative flex flex-col items-center w-[400px]">
                  {/* Timeline Dot */}
                  <div className="absolute top-16 w-4 h-4 bg-white rounded-full ring-4 ring-[#01041b] shadow-glow transform -translate-y-1/2 z-10"></div>

                  {/* Content Card */}
                  <div className="mt-24 w-full">
                    <div className="relative group">
                      <div className="relative bg-card/10 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl cursor-pointer h-[320px] flex items-center justify-center p-6 hover:scale-105">
                        {/* Background de color que se expande */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out scale-0 group-hover:scale-150 rounded-xl"
                          style={{
                            background: exp.color,
                            transformOrigin: 'center center',
                          }}
                        ></div>

                        {/* Contenido */}
                        <div className="relative z-10 flex flex-col gap-3 items-center justify-center text-center">
                          {/* Icono */}
                          <div className="relative">
                            <Briefcase
                              className="transition-all duration-300 group-hover:scale-110 group-hover:opacity-0"
                              style={{ color: exp.color }}
                              size={48}
                            />
                            <Briefcase
                              className="absolute top-0 left-0 transition-all duration-300 group-hover:scale-110 opacity-0 group-hover:opacity-100 text-white"
                              size={48}
                            />
                          </div>

                          {/* Año */}
                          <div className="relative px-4 w-full flex justify-center">
                            <span className="text-sm font-semibold transition-colors duration-300 group-hover:opacity-0 whitespace-nowrap" style={{ color: exp.color }}>
                              {exp.year}
                            </span>
                            <span className="text-sm font-semibold absolute top-0 left-1/2 -translate-x-1/2 transition-colors duration-300 opacity-0 group-hover:opacity-100 text-white whitespace-nowrap">
                              {exp.year}
                            </span>
                          </div>

                          {/* Título */}
                          <h3 className="text-xl font-bold text-white">
                            {exp.title}
                          </h3>

                          {/* Compañía */}
                          <p className="text-sm font-medium text-white/80">
                            {exp.company}
                          </p>

                          {/* Descripción */}
                          <p className="text-xs text-white/70 line-clamp-3">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
