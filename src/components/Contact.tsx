import { useState } from "react";
import { Mail, MessageCircle, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/hooks/useTranslation";
import emailjs from "@emailjs/browser";
import fondo1 from "@/assets/optimized/fondo1.webp";

const Contact = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Enviar email usando EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "¡Mensaje enviado!",
        description: "Te responderé lo antes posible. ¡Gracias por contactarme!",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al enviar el mensaje. Por favor, intenta de nuevo o contáctame por WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t.contact.email,
      value: "davidangelosorio29@gmail.com",
      href: "mailto:davidangelosorio29@gmail.com",
      color: "#10bdff",
    },
    {
      icon: MessageCircle,
      title: t.contact.instagram,
      value: "david.angel7_",
      href: "https://www.instagram.com/david.angel7_",
      color: "#ff0062",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${fondo1})` }}
    >
      {/* Overlay oscuro para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div
        ref={elementRef}
        className={`container mx-auto px-4 relative z-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="text-center mb-16">
          <h1 className="text-6xl font-anton font-bold text-primary-foreground leading-none">
            {t.contact.title1}
          </h1>
          <h1 className="text-[2rem] md:text-[8rem] lg:text-[1.9rem] font-jost font-bold text-primary-foreground leading-none mb-6">
            {t.contact.title2}
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div key={info.title} className="relative group">
                <div className="relative bg-card/10 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl cursor-pointer hover:scale-105">
                  {/* Background de color que se expande */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out scale-0 group-hover:scale-150 rounded-xl"
                    style={{
                      background: info.color,
                      transformOrigin: 'center center',
                    }}
                  ></div>

                  {/* Contenido */}
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 flex items-start space-x-4 p-6"
                  >
                    <div className="relative">
                      <info.icon
                        className="h-6 w-6 transition-all duration-300 group-hover:scale-110 group-hover:opacity-0"
                        style={{ color: info.color }}
                      />
                      <info.icon
                        className="h-6 w-6 absolute top-0 left-0 transition-all duration-300 group-hover:scale-110 opacity-0 group-hover:opacity-100 text-white"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-jost font-semibold text-white mb-1">
                        {info.title}
                      </h3>
                      <p className="text-sm text-white/70 group-hover:text-white transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            ))}

            {/* WhatsApp highlight card */}
            <div className="relative group">
              <div className="relative bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-xl overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl cursor-pointer hover:scale-105">
                <div className="relative z-10 p-6">
                  <h3 className="font-jost font-bold text-lg text-white mb-3">
                    {t.contact.whatsappTitle}
                  </h3>
                  <p className="text-sm text-white/90 mb-4">
                    {t.contact.whatsappDescription}
                  </p>
                  <Button
                    asChild
                    className="w-full gap-2 bg-white text-[#25D366] hover:bg-white/90"
                  >
                    <a
                      href="https://wa.me/573143814895"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      {t.contact.whatsappButton}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="relative bg-card/10 backdrop-blur-sm rounded-xl overflow-hidden p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white">
                      {t.contact.form.name}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contact.form.namePlaceholder}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#10bdff] focus:ring-[#10bdff]"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white">
                      {t.contact.form.email}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.contact.form.emailPlaceholder}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#10bdff] focus:ring-[#10bdff]"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-white">
                    {t.contact.form.subject}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.contact.form.subjectPlaceholder}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#10bdff] focus:ring-[#10bdff]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white">
                    {t.contact.form.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.form.messagePlaceholder}
                    rows={6}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#10bdff] focus:ring-[#10bdff] resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2 text-black hover:bg-[#0da8e6] transition-all duration-300"
                  style={{ backgroundColor: '#10bdff' }}
                  disabled={isSubmitting}
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? t.contact.form.sending : t.contact.form.submit}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
