import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesBentoGrid from '@/components/sections/features/FeaturesBentoGrid';
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
      tag="Expert Web Development"
      title="Launch Your Brand to the Moon"
      description="We build high-converting, lightning-fast websites that launch your business into orbit."
      primaryButton={{
        text: "Start Project",
        href: "#contact",
      }}
      secondaryButton={{
        text: "View Work",
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
      tag="Trusted By Industry Leaders"
      title="Companies Scaling with Us"
      description="Our work powers businesses ranging from startups to enterprise organizations."
      names={[
        "TechCorp",
        "InnovateLab",
        "GrowthCo",
        "StartupXYZ",
        "DigitalWave",
        "CloudScale",
        "VisionAI",
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutMediaOverlay
      tag="Our Mission"
      title="More Than Just Web Design"
      description="At Digital Rocket, we combine technical excellence with strategic design to ensure your website performs as well as it looks."
      imageSrc="http://img.b2bpic.net/free-photo/group-young-businesswomen-sitting-modern-office-talking-each-other_23-2147955160.jpg"
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesBentoGrid
      tag="Why Choose Us"
      title="Built for High Performance"
      description="Optimized for speed, SEO, and user engagement."
      features={[
        {
          title: "SEO Optimized",
          description: "Rank higher in search results organically.",
          imageSrc: "http://img.b2bpic.net/free-photo/menu-circle-button-front-side-white-background_187299-40323.jpg",
        },
        {
          title: "Speed Focused",
          description: "Blazing fast load times for better retention.",
          imageSrc: "http://img.b2bpic.net/free-photo/battery-low-front-side-with-white-background_187299-39726.jpg",
        },
        {
          title: "Modern Design",
          description: "Cutting edge aesthetics that build trust.",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-different-colored-draw-paper_23-2147747577.jpg",
        },
        {
          title: "Mobile Responsive",
          description: "Perfectly fluid layouts across all devices.",
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
      tag="Our Portfolio"
      title="Engineered Excellence"
      description="Explore our recent success stories and project implementations."
      items={[
        {
          title: "SaaS Platform",
          description: "Full stack architecture.",
          imageSrc: "http://img.b2bpic.net/free-photo/office-worker-analyzing-business-charts-laptop-using-paperwork-research-information-make-data-report-working-from-home-startup-analysis-with-web-graphs-browsing-internet_482257-50961.jpg",
        },
        {
          title: "E-commerce Store",
          description: "Conversion-focused shops.",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-clothing-boutique-interior_23-2151961902.jpg",
        },
        {
          title: "Corporate Site",
          description: "Professional brand presence.",
          imageSrc: "http://img.b2bpic.net/free-photo/office-worker-analyzing-online-statistics-copy-space-mockup_482257-123748.jpg",
        },
        {
          title: "Mobile Web App",
          description: "Highly interactive UI.",
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
    <SectionErrorBoundary name="testimonials">
          <TestimonialQuoteCards
      tag="Client Stories"
      title="Driving Results Together"
      description="Don't just take our word for it—here is what our partners think."
      testimonials={[
        {
          name: "Sarah J.",
          role: "CEO, TechCorp",
          quote: "Digital Rocket delivered beyond expectations.",
          imageSrc: "http://img.b2bpic.net/free-photo/positive-middle-aged-business-leader-window_1262-5388.jpg",
        },
        {
          name: "Mark D.",
          role: "CTO, CloudScale",
          quote: "The speed and performance improvements were immense.",
          imageSrc: "http://img.b2bpic.net/free-photo/senior-businessman-with-arms-crossed-outside-modern-office-building_1139-1074.jpg",
        },
        {
          name: "Emily R.",
          role: "Founder, GrowthCo",
          quote: "Our conversion rates doubled since the redesign.",
          imageSrc: "http://img.b2bpic.net/free-photo/elderly-businessman-posing_23-2148116269.jpg",
        },
        {
          name: "David K.",
          role: "Product Manager",
          quote: "Professional, reliable, and incredibly fast delivery.",
          imageSrc: "http://img.b2bpic.net/free-photo/confident-european-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-128975.jpg",
        },
        {
          name: "Julia M.",
          role: "Marketing Lead",
          quote: "They truly understood our brand vision.",
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
