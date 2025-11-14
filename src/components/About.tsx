import {
  Mail,
  MapPin,
  Download,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/optimized/about-foto.webp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/hooks/useTranslation";

const About = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { t } = useTranslation();
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-david-angel.pdf';
    link.download = 'CV-David-Angel-Osorio.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToPricing = () => {
    const element = document.querySelector('#pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-black to-[#01041b]"
    >
      <div
        ref={elementRef}
        className={`container mx-auto px-4 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-jost font-bold text-primary-foreground leading-none">
            {t.about.title1}
          </h1>
          <h1 className="text-9xl md:text-[8rem] lg:text-[8rem] font-anton font-bold text-primary-foreground leading-none">
            {t.about.title2}
          </h1>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-28">
          {/* Left Column - Image (35%) */}
          <div className="lg:w-[35%] flex items-center justify-center">
            <div className="relative w-full max-w-xs">
              {/* Background rotated box with blur */}
              <div
                className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl"
                style={{
                  transformOrigin: 'bottom right',
                  transform: 'rotate(6deg)',
                }}
              ></div>

              {/* Main Image */}
              <img
                src={profileImage}
                alt="David Angel Osorio"
                className="relative rounded-2xl w-full h-auto object-cover shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column - Information (65%) */}
          <div className="lg:w-[65%] flex flex-col justify-center space-y-8">
            {/* Section 1: Title and Description */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-jost font-bold text-primary-foreground">
                {t.about.role}
              </h2>
              <p className="text-base md:text-lg text-gray-300 font-jost leading-relaxed">
                {t.about.description}
              </p>
            </div>

            {/* Section 2: Location and Email */}
            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="relative p-3 bg-gradient-to-br from-primary via-primary to-tertiary rounded-xl shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-xl"></div>
                  <MapPin className="h-5 w-5 text-white relative z-10 drop-shadow-lg" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground font-anton">{t.about.location}</p>
                  <p className="font-medium text-primary-foreground font-jost">{t.about.locationValue}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="relative p-3 bg-gradient-to-br from-primary via-primary to-tertiary rounded-xl shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-xl"></div>
                  <Mail className="h-5 w-5 text-white relative z-10 drop-shadow-lg" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground font-anton">{t.about.email}</p>
                  <p className="font-medium text-primary-foreground font-jost">davidangelosorio29@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Section 3: Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleDownloadCV}
                className="bg-[#10bdff] hover:opacity-90 text-black font-jost font-semibold px-6 py-6 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <Download className="h-5 w-5 mr-2" />
                {t.about.downloadCV}
              </Button>

              <Button
                onClick={scrollToPricing}
                variant="outline"
                className="border-2 border-white hover:border-primary text-[#10bdff] font-jost font-semibold px-6 py-6 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 bg-transparent backdrop-blur-sm"
              >
                <Eye className="h-5 w-5 mr-2" />
                {t.about.viewPlans}
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
