"use client";

import { ArrowUp } from "lucide-react";

import useScrollToTop from "@/hooks/useScrollToTop";
import IconButton from "@/components/ui/icon-button";

const ScrollToTopButton = () => {
  const { scrollToTop, isVisible } = useScrollToTop();

  return (
    <IconButton
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-[100]
       dark:bg-gray-600 bg-black text-white hover:bg-black/80
      ${isVisible ? "opacity-100" : "opacity-0"}`}
      icon={<ArrowUp size={24} />}
    />
  );
};

export default ScrollToTopButton;
