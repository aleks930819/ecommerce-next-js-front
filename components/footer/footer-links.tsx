import { FooterLink } from "@/types";

interface FooterLinksProps {
  title: string;
  links: FooterLink[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <ul>
      <h3 className='text-lg font-bold mb-2 text-gray-800 dark:text-white'>
        {title}
      </h3>
      {links.map((link) => (
        <li key={link.text} className='text-gray-600 dark:text-gray-400 mb-2'>
          {link.text}
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;
