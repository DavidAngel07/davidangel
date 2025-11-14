import { useState } from "react";
import {
  Check,
  MessageCircle,
  Palette,
  SearchCheck,
  Server,
  Wrench,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaWhatsapp } from "react-icons/fa";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/hooks/useTranslation";

const Pricing = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { t } = useTranslation();
  const whatsappNumber = "573143814895"; // Tu número de WhatsApp
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleWhatsAppClick = (plan: string) => {
    const message = encodeURIComponent(`Hola! Estoy interesado en el plan: ${plan}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const plans = [
    {
      title: t.pricing.basic.title,
      description: t.pricing.basic.description,
      price: t.pricing.basic.price,
      features: t.pricing.basic.features,
      delivery: t.pricing.basic.delivery,
      isPopular: false
    },
    {
      title: t.pricing.standard.title,
      description: t.pricing.standard.description,
      price: t.pricing.standard.price,
      features: t.pricing.standard.features,
      delivery: t.pricing.standard.delivery,
      isPopular: true
    },
    {
      title: t.pricing.pro.title,
      description: t.pricing.pro.description,
      price: t.pricing.pro.price,
      features: t.pricing.pro.features,
      delivery: t.pricing.pro.delivery,
      isPopular: false
    }
  ];

  const addons = [
    {
      icon: Palette,
      title: t.pricing.addons.logo.title,
      description: t.pricing.addons.logo.description,
      price: t.pricing.addons.logo.price
    },
    {
      icon: SearchCheck,
      title: t.pricing.addons.seo.title,
      description: t.pricing.addons.seo.description,
      price: t.pricing.addons.seo.price
    },
    {
      icon: Server,
      title: t.pricing.addons.hosting.title,
      description: t.pricing.addons.hosting.description,
      price: t.pricing.addons.hosting.price
    },
    {
      icon: Wrench,
      title: t.pricing.addons.maintenance.title,
      description: t.pricing.addons.maintenance.description,
      price: t.pricing.addons.maintenance.price
    }
  ];

  const infoCards = [
    {
      title: t.pricing.info.payment.title,
      description: t.pricing.info.payment.description
    },
    {
      title: t.pricing.info.requirements.title,
      description: t.pricing.info.requirements.description
    },
    {
      title: t.pricing.info.delivery.title,
      description: t.pricing.info.delivery.description
    }
  ];

  const faqs = [
    {
      question: t.pricing.faqs.q1.question,
      answer: t.pricing.faqs.q1.answer
    },
    {
      question: t.pricing.faqs.q2.question,
      answer: t.pricing.faqs.q2.answer
    },
    {
      question: t.pricing.faqs.q3.question,
      answer: t.pricing.faqs.q3.answer
    }
  ];

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-b from-black to-[#01041b]"
    >
      <div
        ref={elementRef}
        className={`container mx-auto px-4 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-jost font-bold text-primary-foreground leading-none">
            {t.pricing.title1}
          </h1>
          <h1 className="text-9xl md:text-[8rem] lg:text-[8rem] font-anton font-bold text-primary-foreground leading-none">
            {t.pricing.title2}
          </h1>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-300 font-jost">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Main Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 bg-card/10 backdrop-blur-sm border ${
                plan.isPopular ? 'border-primary' : 'border-border/50'
              } hover:shadow-2xl transition-all duration-300 hover:scale-105`}
            >
              {plan.isPopular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-tertiary text-white font-jost px-4 py-1">
                  {t.pricing.mostChosen}
                </Badge>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-jost font-bold text-primary-foreground mb-2">
                  {plan.title}
                </h3>
                <p className="text-sm text-gray-300 font-jost mb-4">
                  {plan.description}
                </p>
                <div className="text-4xl font-jost font-bold text-[#10bdff] mb-6">
                  {plan.price}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check className="h-5 w-5 text-[#10bdff]" />
                    </div>
                    <p className="text-sm text-gray-300 font-jost flex-1">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => handleWhatsAppClick(plan.title)}
                className="w-full bg-[#10bdff] hover:opacity-90 text-black font-jost font-semibold py-6 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 mb-4"
              >
                <FaWhatsapp className="h-5 w-5 mr-2" />
                {t.pricing.button}
              </Button>

              <p className="text-xs text-center text-gray-400 font-jost">
                {plan.delivery}
              </p>
            </Card>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="mb-16 max-w-7xl mx-auto">
          <h3 className="text-2xl font-jost font-bold text-primary-foreground text-center mb-8">
            {t.pricing.addons.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, index) => (
              <Card
                key={index}
                className="p-6 bg-card/10 backdrop-blur-sm border-border/50 hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center"
              >
                <h4 className="text-lg font-jost font-bold text-primary-foreground mb-2">
                  {addon.title}
                </h4>
                <p className="text-sm text-gray-300 font-jost mb-3">
                  {addon.description}
                </p>
                <p className="text-xl font-jost font-bold text-[#10bdff]">
                  {addon.price}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Info Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {infoCards.map((info, index) => (
            <Card
              key={index}
              className="p-6 bg-transparent backdrop-blur-sm border-border/0"
            >
              <h4 className="text-lg font-jost font-bold text-[#10bdff] mb-3">
                {info.title}
              </h4>
              <p className="text-sm text-gray-300 font-jost leading-relaxed">
                {info.description}
              </p>
            </Card>
          ))}
        </div>

        {/* FAQs Section */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-jost font-bold text-primary-foreground text-center mb-8">
            {t.pricing.faqs.title}
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <Card
                  key={index}
                  onClick={() => toggleFaq(index)}
                  className={`p-6 bg-transparent backdrop-blur-sm border cursor-pointer transition-all duration-300 ${
                    isOpen ? 'border-[#10bdff]' : 'border-gray-600'
                  } hover:shadow-lg`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-jost font-bold text-primary-foreground pr-4">
                      {faq.question}
                    </h4>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp className="h-6 w-6 text-[#10bdff]" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-white" />
                      )}
                    </div>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-40 mt-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-gray-300 font-jost leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
