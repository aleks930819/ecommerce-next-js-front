"use client";

import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";
import ClientOnly from "../client-only/client-only";
import Button from "./button";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = React.useState(false);

  React.useEffect(() => {
    const hasConsent = hasCookie("localConsent");

    setShowConsent(hasConsent);
  }, []);

  const acceptCookie = () => {
    setCookie("localConsent", "true", {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 60),
    });
    setShowConsent(true);
  };

  if (showConsent) {
    return null;
  }

  return (
    <ClientOnly>
      <section
        className='fixed inset-0 bg-slate-700 bg-opacity-70
      dark:bg-gray-900 dark:bg-opacity-70 z-50
      '
      >
        <article
          className='fixed bottom-0 left-0 right-0 flex flex-col sm:flex-row  items-start justify-between px-4 py-8 bg-gray-100
        dark:bg-gray-800 dark:text-white
        '
        >
          <span
            aria-labelledby=' '
            className='text-black dark:text-white text-base mr-16'
          >
            {`This website uses cookies to improve user experience. By using our
  website you consent to all cookies in accordance with our`}{" "}
            <span>
              <Link
                href='/privacy-policy'
                className='text-black font-bold dark:text-white dark:hover:text-[#CBD9F1]/90 transition-colors'
              >
                Privacy Policy
              </Link>
            </span>
          </span>
          <form onSubmit={acceptCookie}>
            <Button
              type='submit'
              aria-label='Accept Cookies'
              className='bg-black text-white dark:text-white dark:bg-[#204179] rounded-sm dark:hover:bg-[#204179]/90 transition-colors px-4 py-2 mt-4 sm:mt-0'
            >
              Accept Cookies
            </Button>
          </form>
        </article>
      </section>
    </ClientOnly>
  );
};

export default CookieConsent;
