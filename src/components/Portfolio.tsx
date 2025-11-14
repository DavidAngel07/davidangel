import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight, X, Eye } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/hooks/useTranslation";
import {
  SiFigma,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
  SiVite,
  SiHtml5,
  SiCss3,
  SiPython,
  SiDjango,
  SiFlask,
  SiVuedotjs,
  SiAngular,
  SiDocker,
  SiGit,
  SiFirebase,
  SiSupabase
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import diseño1 from "@/assets/optimized/Diseño1.webp";
import diseño2 from "@/assets/optimized/Diseño2.webp";
import diseño3 from "@/assets/optimized/Diseño3.webp";
import diseño4 from "@/assets/optimized/Diseño4.webp";
import diseño5 from "@/assets/optimized/Diseño5.webp";
import diseño6 from "@/assets/optimized/Diseño6.webp";
import diseño7 from "@/assets/optimized/Diseño7.webp";
import diseño8 from "@/assets/optimized/Diseño8.webp";
import diseño9 from "@/assets/optimized/Diseño9.webp";
import diseño10 from "@/assets/optimized/Diseño10.webp";
import frontend1 from "@/assets/optimized/Frontend1.webp";
import frontend2 from "@/assets/optimized/Frontend2.webp";
import frontend3 from "@/assets/optimized/Frontend3.webp";

const Portfolio = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState(t.portfolio.all);
  const [carouselIndexes, setCarouselIndexes] = useState<{ [key: number]: number }>({});
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const categories = [t.portfolio.all, t.portfolio.designs, t.portfolio.projects];

  // Función para obtener el icono correcto según el tag
  const getIconForTag = (tag: string) => {
    const tagLower = tag.toLowerCase();

    const iconMap: { [key: string]: any } = {
      'figma': SiFigma,
      'react': SiReact,
      'typescript': SiTypescript,
      'javascript': SiJavascript,
      'tailwind': SiTailwindcss,
      'tailwindcss': SiTailwindcss,
      'node': SiNodedotjs,
      'nodejs': SiNodedotjs,
      'express': SiExpress,
      'mongodb': SiMongodb,
      'postgres': SiPostgresql,
      'postgresql': SiPostgresql,
      'next': SiNextdotjs,
      'nextjs': SiNextdotjs,
      'vite': SiVite,
      'html': SiHtml5,
      'html5': SiHtml5,
      'css': SiCss3,
      'css3': SiCss3,
      'python': SiPython,
      'django': SiDjango,
      'flask': SiFlask,
      'vue': SiVuedotjs,
      'vuejs': SiVuedotjs,
      'angular': SiAngular,
      'docker': SiDocker,
      'git': SiGit,
      'firebase': SiFirebase,
      'supabase': SiSupabase,
    };

    return iconMap[tagLower] || SiFigma; // Default a Figma si no encuentra el icono
  };

  const nextImage = (projectId: number, imagesLength: number) => {
    setCarouselIndexes(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % imagesLength
    }));
  };

  const prevImage = (projectId: number, imagesLength: number) => {
    setCarouselIndexes(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + imagesLength) % imagesLength
    }));
  };

  const openModal = (project: any) => {
    setSelectedProject(project);
    setModalOpen(true);
    // Trigger animation after mount
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    });
  };

  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setModalOpen(false);
      setSelectedProject(null);
    }, 300);
  };

  const projectData = [
    { image: frontend1, tags: ["React"], category: t.portfolio.projects, demoUrl: "https://reloj-global.vercel.app/", githubUrl: "https://github.com/DavidAngel07/globe-clock-show.git" },
    { image: frontend2, tags: ["React"], category: t.portfolio.projects, demoUrl: "", githubUrl: "https://github.com/DavidAngel07/globe-clock-show.git" },
    { image: frontend3, tags: ["React"], category: t.portfolio.projects, demoUrl: "", githubUrl: "https://github.com/DavidAngel07/globe-clock-show.git" },
    { images: [diseño1, diseño2, diseño3], tags: ["Figma"], category: t.portfolio.designs, demoUrl: "#", githubUrl: "#" },
    { images: [diseño4, diseño5], tags: ["Figma"], category: t.portfolio.designs, demoUrl: "#", githubUrl: "#" },
    { image: diseño6, tags: ["Figma"], category: t.portfolio.designs, demoUrl: "#", githubUrl: "#" },
    { image: diseño7, tags: ["Figma"], category: t.portfolio.designs, demoUrl: "#", githubUrl: "#" },
    { image: diseño8, tags: ["Figma"], category: t.portfolio.designs, demoUrl: "#", githubUrl: "#" },
    { image: diseño9, tags: ["Figma"], category: t.portfolio.designs, demoUrl: "#", githubUrl: "#" },
    { image: diseño10, tags: ["Figma"], category: t.portfolio.designs, demoUrl: "#", githubUrl: "#" }
  ];

  const projects = t.portfolio.items.map((item, index) => ({
    id: index + 1,
    title: item.title,
    description: item.description,
    ...projectData[index]
  }));

  const filteredProjects = activeCategory === t.portfolio.all
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-b from-[#01041b] to-black"
    >
      <div
        ref={elementRef}
        className={`container mx-auto px-4 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="text-center mb-16">
          <h1 className="text-9xl font-anton font-bold text-primary-foreground leading-none">
            {t.portfolio.title1}
          </h1>
          <h1 className="text-3xl md:text-[8rem] lg:text-[1.9rem] font-jost font-bold text-primary-foreground leading-none">
            {t.portfolio.title2}
          </h1>
        </div>

        {/* Navigation con hover - same style as Header */}
        <div className="flex justify-center mb-12">
          <nav className="flex items-center gap-1">
            {categories.map((category) => (
              <button
                key={category}
                onMouseEnter={() => setActiveCategory(category)}
                className="px-4 py-2 text-md font-jost text-primary-foreground hover:text-[#10bdff] transition-smooth relative group"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
              >
                {category}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-[#10bdff] transition-all duration-300 ${
                    activeCategory === category ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            ))}
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto px-2">
          {filteredProjects.map((project) => {
            const hasCarousel = 'images' in project && project.images;
            const currentIndex = carouselIndexes[project.id] || 0;
            const currentImage = hasCarousel ? project.images[currentIndex] : project.image;

            return (
              <div key={project.id} className="relative group h-full">
                <div className="relative bg-card/10 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl cursor-pointer hover:scale-105 h-full">
                  {/* Background de color que se expande */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out scale-0 group-hover:scale-150 rounded-xl"
                    style={{
                      background: '#2b46ff',
                      transformOrigin: 'center center',
                    }}
                  ></div>

                  {/* Contenido */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Image Section */}
                    <div className="relative overflow-hidden h-56">
                      <img
                        src={currentImage}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />

                      {/* Carousel controls */}
                      {hasCarousel && project.images.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              prevImage(project.id, project.images.length);
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 z-20"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              nextImage(project.id, project.images.length);
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 z-20"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </button>

                          {/* Indicators */}
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                            {project.images.map((_, index) => (
                              <div
                                key={index}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                  index === currentIndex
                                    ? "w-6 bg-primary"
                                    : "w-2 bg-white/50"
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}

                      {/* Hover overlay with buttons */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end justify-center p-6 gap-4">
                        <Button
                          size="sm"
                          className="gap-2"
                          style={{ backgroundColor: '#10bdff', color: 'black' }}
                          onClick={() => openModal(project)}
                        >
                          <Eye className="h-4 w-4" />
                          {t.portfolio.view}
                        </Button>
                      </div>
                    </div>

                    {/* Project info */}
                    <div className="p-6">
                      <h3 className="text-xl font-heading font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/70 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => {
                          const IconComponent = getIconForTag(tag);
                          return (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs bg-white/10 text-white border-0 flex items-center gap-1"
                            >
                              <IconComponent className="h-3 w-3" />
                              {tag}
                            </Badge>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedProject && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
            isAnimating ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeModal}
        >
          <div
            className={`relative max-w-6xl w-full bg-[#01041b] rounded-xl overflow-hidden transition-all duration-300 ${
              isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Modal content */}
            <div className="p-8">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-white/70 mb-6">
                {selectedProject.description}
              </p>

              {/* Images carousel */}
              {'images' in selectedProject && selectedProject.images ? (
                <div className="relative">
                  <img
                    src={selectedProject.images[carouselIndexes[selectedProject.id] || 0]}
                    alt={selectedProject.title}
                    className="w-full h-auto rounded-lg"
                  />

                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage(selectedProject.id, selectedProject.images.length);
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage(selectedProject.id, selectedProject.images.length);
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>

                      {/* Indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProject.images.map((_: any, index: number) => (
                          <div
                            key={index}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              index === (carouselIndexes[selectedProject.id] || 0)
                                ? "w-8 bg-[#10bdff]"
                                : "w-2 bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto rounded-lg"
                />
              )}

              {/* Tags and Demo Button */}
              <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag: string) => {
                    const IconComponent = getIconForTag(tag);
                    return (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-white/10 text-white border-0 flex items-center gap-1"
                      >
                        <IconComponent className="h-3 w-3" />
                        {tag}
                      </Badge>
                    );
                  })}
                </div>

                {/* Demo button para proyectos */}
                {selectedProject.category === t.portfolio.projects && (
                  <Button
                    className="gap-2"
                    style={{ backgroundColor: '#10bdff', color: 'black' }}
                    asChild
                  >
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {t.portfolio.viewDemo}
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
