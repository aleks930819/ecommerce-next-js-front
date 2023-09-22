import { FooterLink } from "@/types";

export const helpAndInfoLinks: FooterLink[] = [
  { text: "About Us", url: "/about", href: "/about-us" },
  {
    text: "Delivery & Returns",
    url: "/delivery",
    href: "delivery-information",
  },
  { text: "Contact Us", url: "/contact", href: "/" },
  { text: "Privacy & Cookies", url: "/privacy", href: "/privacy-policy" },
];

export const moreLinks: FooterLink[] = [
  { text: "Terms & Conditions", url: "/terms", href: "/privacy-policy" },
  { text: "Black Friday", url: "/black-friday", href: "/black-friday" },
  { text: "Categories", url: "/categories", href: "/categories" },
];
