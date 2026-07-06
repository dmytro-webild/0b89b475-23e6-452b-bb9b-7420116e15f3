import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarDropdown from '@/components/ui/NavbarDropdown';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Services",
    "href": "#features"
  },
  {
    "name": "Pricing",
    "href": "#product"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Social",
    "href": "#social"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  }
];

  return (
    <StyleProvider buttonVariant="bounce" siteBackground="aurora" heroBackground="horizonGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarDropdown
      logo="Digital Rocket"
      ctaButton={{
        text: "Get Started",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleMedia
      brand="Digital Rocket"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Portfolio",
              href: "#portfolio",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Web Development",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 Digital Rocket. All rights reserved."
      links={[
        {
          label: "Twitter",
          href: "#",
        },
        {
          label: "LinkedIn",
          href: "#",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/global-digital-explore-technology-networking_53876-124314.jpg"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
