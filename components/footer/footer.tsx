import Link from "next/link";

import Container from "../ui/container";

const Footer = () => {
  return (
    <footer
      className='bg-white
       text-black  dark:bg-gray-800 dark:text-white border-t
     dark:border-gray-600 transition-colors duration-150 ease-in-out
    py-10 '
    >
      <Container>
        <div className='flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between'>
          <div className=''>
            <p className='text-center text-base '>
              &copy; {new Date().getFullYear()} UrbanTrend Emporium. All rights
            </p>
          </div>
          <div>
            <p className='text-center text-base'>
              Developed by{" "}
              <Link
                target='_blank'
                href='https://github.com/aleks930819'
                className='text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out'
              >
                @alex
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
