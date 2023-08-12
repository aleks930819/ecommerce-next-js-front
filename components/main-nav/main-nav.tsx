"use client";

import React from "react";

import { useRouter, usePathname } from "next/navigation";

interface MainNavProps {
  data: any;
}

const MainNav = ({ data }: MainNavProps) => {
  const pathname = usePathname;
  const router = useRouter;

  return <nav>main nav</nav>;
};

export default MainNav;
