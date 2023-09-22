import Image from "next/image";

import { Facebook, Instagram } from "lucide-react";

import visaElectron from "@/assets/images/Visa_Inc._logo.svg.png";
import mastercard from "@/assets/images/Mastercard-logo.svg.png";

import { helpAndInfoLinks, moreLinks } from "@/data/footer";
import FooterLinks from "@/components/footer/footer-links";

import Container from "@/components/ui/container";
import IconButton from "@/components/ui/icon-button";
import Subscribe from "@/components/subscribe/subscribe";

const TopFooter = () => {
  return (
    <footer className=' dark:bg-gray-700 w-full py-8 border-t dark:border-t-gray-700'>
      <Container>
        <div className='flex flex-col  sm:flex-row justify-between items-center gap-4'>
          {/* LINKS */}
          <div className='flex flex-wrap w-full sm:w-auto gap-10'>
            <FooterLinks title='Help & Info' links={helpAndInfoLinks} />
            <FooterLinks title='More' links={moreLinks} />
          </div>
          <Subscribe />
          {/* ICONS */}
          <div className='flex flex-wrap justify-center mt-2 mb-2  sm:flex-row sm:justify-end gap-4 items-center'>
            <div className='flex flex-wrap sm:flex-row gap-2 border-r pr-4'>
              <IconButton
                icon={<Facebook size={24} />}
                className='dark:bg-gray-700  dark:hover:bg-gray-600'
              />
              <IconButton
                icon={<Instagram size={24} />}
                className='dark:bg-gray-700 dark:hover:bg-gray-600'
              />
            </div>
            <div className='flex sm:flex-row gap-6 '>
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
