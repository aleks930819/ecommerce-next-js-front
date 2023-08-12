import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav/main-nav";

const Navbar = () => {
  return (
    <header className='border-b  py-6  bg-white  w-full shadow-md'>
      <Container>
        <div className='flex justify-between items-center'>
          <Link href='/'>
            <p className='text-2xl font-bold font-serif'>UrbanTrend Emporium</p>
          </Link>
          <MainNav />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
