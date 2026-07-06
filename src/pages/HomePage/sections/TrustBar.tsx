import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';

export default function TrustBarSection() {
  return (
    <div data-webild-section="trust-bar" id="trust-bar">
      <SocialProofMarquee
        tag="Certificaciones y Reconocimientos"
        title="Avalados por la Industria"
        description="Nuestro compromiso con la excelencia está respaldado por certificaciones y premios líderes en el sector."
        names={[
          "Google Partner",
          "AWS Certified",
          "Premio Excelencia Web 2023",
          "ISO 27001",
          "Meta Business Partner",
          "Shopify Expert"
        ]}
        textAnimation="fade-blur"
      />
    </div>
  );
}