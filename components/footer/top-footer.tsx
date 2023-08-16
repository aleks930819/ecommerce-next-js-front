import Image from "next/image";

import { Facebook, Instagram } from "lucide-react";

import visaElectron from "@/assets/images/Visa_Inc._logo.svg.png";
import mastercard from "@/assets/images/Mastercard-logo.svg.png";
import visa from "@/assets/images/visa-removebg-preview.png";

import { helpAndInfoLinks, moreLinks } from "@/data/footer";
import FooterLinks from "@/components/footer/footer-links";

import Container from "@/components/ui/container";
import IconButton from "@/components/ui/icon-button";
import Subscribe from "../subscribe/subscribe";

const TopFooter = () => {
  return (
    <footer className=' dark:bg-gray-700 w-full py-8 border-t dark:border-t-gray-700'>
      <Container>
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
          {/* LINKS */}
          <FooterLinks title='Help & Info' links={helpAndInfoLinks} />
          <FooterLinks title='More' links={moreLinks} />
          <Subscribe />
          {/* ICONS */}
          <div className='flex flex-col sm:flex-row justify-end gap-4 items-center'>
            <div className='flex flex-col sm:flex-row gap-2 border-r pr-4'>
              <IconButton
                icon={<Facebook size={24} />}
                className='dark:bg-gray-700  dark:hover:bg-gray-600'
              />
              <IconButton
                icon={<Instagram size={24} />}
                className='dark:bg-gray-700 dark:hover:bg-gray-600'
              />
            </div>
            <div className='flex flex-col sm:flex-row gap-6 '>
              <div className='flex items-center gap-4'>
                <Image
                  src={visaElectron}
                  alt='visa'
                  width={50}
                  height={50}
                  objectFit='cover'
                  className='rounded-md'
                />
              </div>
              <div className='flex items-center gap-4'>
                <Image
                  src={mastercard}
                  alt='visa'
                  width={50}
                  height={50}
                  objectFit='cover'
                  className='rounded-md'
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default TopFooter;
