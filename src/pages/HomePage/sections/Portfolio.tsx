import { motion } from "motion/react";
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Card from "@/components/ui/Card";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import Tag from "@/components/ui/Tag";

export default function PortfolioSection() {
  const clients = [
    {
      name: "Clínicas Peñarrubia",
      description: "Diseño y desarrollo de sitio web corporativo para centro médico.",
      imageSrc: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    },
    {
      name: "FCS Explotaciones",
      description: "Presencia digital profesional para empresa de explotaciones.",
      imageSrc: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Tierracocida",
      description: "Catálogo online y diseño web para taller de cerámica.",
      imageSrc: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Avilés Clínica Dental",
      description: "Sitio web moderno y funcional para clínica odontológica.",
      imageSrc: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop",
    }
  ];

  return (
    <div data-webild-section="portfolio" id="portfolio" className="relative w-full py-24 bg-background">
      <div className="w-content-width mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <ScrollReveal variant="slide-up">
            <Tag text="Casos de Éxito" className="mb-4" />
          </ScrollReveal>
          <TextAnimation
            text="Nuestro Portafolio"
            variant="slide-up"
            tag="h2"
            gradientText={false}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          />
          <ScrollReveal variant="slide-up" delay={0.1}>
            <p className="text-lg text-accent max-w-2xl mx-auto mt-4">
              Descubre algunos de los proyectos web que hemos diseñado y desarrollado para pequeñas empresas.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clients.map((client, index) => (
            <ScrollReveal key={index} variant="slide-up" delay={index * 0.1}>
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-64 w-full overflow-hidden">
                  <ImageOrVideo 
                    imageSrc={client.imageSrc} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2">{client.name}</h3>
                  <p className="text-accent">{client.description}</p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}