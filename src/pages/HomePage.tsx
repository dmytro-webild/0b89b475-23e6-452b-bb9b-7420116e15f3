import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesBentoGrid from '@/components/sections/features/FeaturesBentoGrid';
import TeamDetailedCards from '@/components/sections/team/TeamDetailedCards';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroSplitVerticalMarquee from '@/components/sections/hero/HeroSplitVerticalMarquee';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialQuoteCards from '@/components/sections/testimonial/TestimonialQuoteCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitVerticalMarquee
      tag="Diseño y Desarrollo Web"
      title="Crea o Mejora tu Presencia en Internet"
      description="Ayudamos a pequeñas empresas a destacar online con páginas web modernas, rápidas y diseñadas para atraer más clientes."
      primaryButton={{
        text: "Iniciar Proyecto",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Ver Trabajos",
        href: "#product",
      }}
      leftItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/view-3d-space-rocket-model_23-2151113325.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/background-with-printed-circuit-board-concept-modern-technologies_169016-61853.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/horizontal-detail-no-people-macro-close-up_1122-2363.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-dynamic-light-streaks-dark-background_84443-82408.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/low-poly-background-with-connecting-lines-dots_1048-6496.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/gradient-technology-background_23-2151895852.jpg",
        },
      ]}
      rightItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/user-people-network-circuit-board-link-connection-technology_1379-886.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/specialist-using-laptop-troubleshooting-data-center-mainframes-with-high-computing-power-enabling-hyperscale-server-hub-support-demanding-applications-such-as-machine-learning-workloads_482257-67945.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-programming-code-language_53876-15056.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-abstract-technology-with-flowing-cyber-particles_1048-15470.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/circuit-board-close-up-with-different-connections_23-2149174310.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-glass-geometric-shapes_23-2150979642.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>


  <div id="social" data-section="social">
    <SectionErrorBoundary name="social">
          <SocialProofMarquee
      tag="Con la Confianza de Pequeñas Empresas"
      title="Negocios que Crecen con Nosotros"
      description="Ayudamos a pequeñas empresas a establecer y mejorar su presencia en línea con sitios web profesionales."
      names={[
        "Clínica Dental Sonrisas",
        "Constructora Horizonte",
        "Inmobiliaria del Valle",
        "Centro Médico San José",
        "Estudio Jurídico López",
        "Consultora Avanza",
        "VisionAI",
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutMediaOverlay
      tag="Nuestra Misión"
      title="Tu Presencia Online, Elevada"
      description="Ayudamos a pequeñas empresas a establecer una presencia digital profesional o a renovar su sitio web actual. Diseñamos y desarrollamos webs a medida para que tu negocio destaque."
      imageSrc="http://img.b2bpic.net/free-photo/group-young-businesswomen-sitting-modern-office-talking-each-other_23-2147955160.jpg"
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesBentoGrid
      tag="Por qué elegirnos"
      title="Diseñado para el Éxito de tu Negocio"
      description="Soluciones digitales optimizadas para captar más clientes, pacientes o inversores."
      features={[
        {
          title: "Portales para Pacientes",
          description: "Sistemas seguros y fáciles de usar para clínicas y consultorios.",
          imageSrc: "http://img.b2bpic.net/free-photo/menu-circle-button-front-side-white-background_187299-40323.jpg",
        },
        {
          title: "Catálogos Inmobiliarios",
          description: "Muestra tus propiedades con galerías de alta calidad y filtros avanzados.",
          imageSrc: "http://img.b2bpic.net/free-photo/battery-low-front-side-with-white-background_187299-39726.jpg",
        },
        {
          title: "Portafolios de Proyectos",
          description: "Destaca las obras de tu constructora con un diseño impactante.",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-different-colored-draw-paper_23-2147747577.jpg",
        },
        {
          title: "Optimización SEO Local",
          description: "Aparece primero cuando busquen tus servicios en tu ciudad.",
          imageSrc: "http://img.b2bpic.net/free-photo/ui-ux-representations-with-smartphone_23-2150201873.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="product" data-section="product">
    <SectionErrorBoundary name="product">
          <FeaturesImageBento
      tag="Nuestro Portafolio"
      title="Excelencia en Cada Sector"
      description="Explora nuestros casos de éxito en clínicas, inmobiliarias y constructoras."
      items={[
        {
          title: "Clínica Médica y Dental",
          description: "Sitios web que transmiten confianza y facilitan el contacto con pacientes.",
          imageSrc: "http://img.b2bpic.net/free-photo/office-worker-analyzing-business-charts-laptop-using-paperwork-research-information-make-data-report-working-from-home-startup-analysis-with-web-graphs-browsing-internet_482257-50961.jpg",
        },
        {
          title: "Empresas Constructoras",
          description: "Portafolios digitales profesionales para mostrar tus mejores proyectos.",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-clothing-boutique-interior_23-2151961902.jpg",
        },
        {
          title: "Agencias Inmobiliarias",
          description: "Catálogos de propiedades optimizados para captar compradores.",
          imageSrc: "http://img.b2bpic.net/free-photo/office-worker-analyzing-online-statistics-copy-space-mockup_482257-123748.jpg",
        },
        {
          title: "Pequeños Negocios",
          description: "Presencia online moderna para destacar y atraer más clientes locales.",
          imageSrc: "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169839.jpg",
        },
        {
          title: "Portfolio Site",
          description: "Creative visual showcases.",
          imageSrc: "http://img.b2bpic.net/free-photo/view-nutritional-counter-app_23-2149880610.jpg",
        },
        {
          title: "Dashboard UI",
          description: "Data-heavy application.",
          imageSrc: "http://img.b2bpic.net/free-photo/financial-application-ui-pc-screen-showing-company-revenue_482257-119232.jpg",
        },
        {
          title: "Marketing Site",
          description: "High engagement funnel.",
          imageSrc: "http://img.b2bpic.net/free-photo/female-web-designer-with-papers-notes-office_23-2149749877.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="team">
      <TeamDetailedCards
        tag="Nuestro Equipo"
        title="Conoce a los Expertos"
        description="Somos un equipo apasionado por el diseño y desarrollo web, dedicados a crear la presencia online perfecta para tu pequeña empresa."
        members={[
          {
            name: "Alejandro Ruiz",
            role: "Fundador & Lead Developer",
            bio: "Especialista en crear experiencias web rápidas, modernas y escalables para negocios locales y clínicas.",
            imageSrc: "http://img.b2bpic.net/free-photo/portrait-of-smiling-young-man-in-office_1139-1075.jpg",
          },
          {
            name: "Sofía Méndez",
            role: "Directora de Diseño UI/UX",
            bio: "Apasionada por el diseño centrado en el usuario, asegurando que tu sitio web no solo se vea bien, sino que convierta visitantes en clientes.",
            imageSrc: "http://img.b2bpic.net/free-photo/portrait-of-smiling-young-woman-in-office_1139-1076.jpg",
          }
        ]}
      />
    </SectionErrorBoundary>
    <SectionErrorBoundary name="testimonials">
          <TestimonialQuoteCards
      tag="Casos de Éxito"
      title="Impulsando Resultados Juntos"
      description="No te quedes solo con nuestras palabras, descubre lo que opinan nuestros clientes."
      testimonials={[
        {
          name: "Dr. Carlos M.",
          role: "Director, Clínica Dental Sonrisas",
          quote: "Desde que lanzamos la nueva web, hemos duplicado las reservas de citas online. El diseño transmite la confianza que nuestros pacientes necesitan.",
          imageSrc: "http://img.b2bpic.net/free-photo/positive-middle-aged-business-leader-window_1262-5388.jpg",
        },
        {
          name: "Laura G.",
          role: "Gerente, Construcciones G&M",
          quote: "Digital Rocket entendió perfectamente nuestro sector. Ahora nuestro portafolio de proyectos luce increíble y atrae a clientes corporativos de alto nivel.",
          imageSrc: "http://img.b2bpic.net/free-photo/senior-businessman-with-arms-crossed-outside-modern-office-building_1139-1074.jpg",
        },
        {
          name: "Roberto V.",
          role: "CEO, Inmobiliaria Vista",
          quote: "La velocidad de carga y la integración con nuestro CRM inmobiliario ha sido clave. Una inversión que se pagó sola en el primer mes.",
          imageSrc: "http://img.b2bpic.net/free-photo/elderly-businessman-posing_23-2148116269.jpg",
        },
        {
          name: "Dra. Elena S.",
          role: "Fundadora, Centro Médico Avanzado",
          quote: "Profesionalidad absoluta. La página web es ahora nuestra principal herramienta de captación de pacientes privados.",
          imageSrc: "http://img.b2bpic.net/free-photo/confident-european-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-128975.jpg",
        },
        {
          name: "Miguel A.",
          role: "Socio, Arquitectura y Diseño",
          quote: "El equipo de Digital Rocket superó nuestras expectativas. Un diseño moderno y elegante que refleja exactamente lo que hacemos.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-holding-phone_23-2148815605.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsSimpleCards
      tag="Impact"
      title="Data-Driven Success"
      description="We don't guess, we optimize with precision metrics."
      metrics={[
        {
          value: "150+",
          description: "Projects Delivered",
        },
        {
          value: "98%",
          description: "Client Satisfaction",
        },
        {
          value: "5x",
          description: "Average Speed Increase",
        },
        {
          value: "200%",
          description: "Avg Conversion Growth",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Ready to Launch?"
      text="Let's build something extraordinary for your business."
      primaryButton={{
        text: "Contact Us",
        href: "mailto:hello@digitalrocket.com",
      }}
      secondaryButton={{
        text: "Book a Call",
        href: "#",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
