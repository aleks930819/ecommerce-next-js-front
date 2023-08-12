"use client";

import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";
import ClientOnly from "../client-only/client-only";
import Button from "./button";
import { useRouter } from "next/navigation";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = React.useState(false);

  React.useEffect(() => {
    const hasConsent = hasCookie("localConsent");

    setShowConsent(hasConsent);
  }, []);

  const acceptCookie = () => {
    setCookie("localConsent", "true", {});
    setShowConsent(true);
  };

  if (showConsent) {
    return null;
  }

  return (
    <ClientOnly>
      <div
        className='fixed inset-0 bg-slate-700 bg-opacity-70
      dark:bg-gray-900 dark:bg-opacity-70 z-50
      '
      >
        <div
          className='fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-8 bg-gray-100
        dark:bg-gray-800 dark:text-white
        '
        >
          <span className='text-dark text-base mr-16'>
            {`This website uses cookies to improve user experience. By using our
          website you consent to all cookies in accordance with our`}{" "}
            <span>
              <Link
                href='/privacy-policy'
                className='text-blue-500 hover:text-blue-600'
              >
                Privacy Policy
              </Link>
            </span>
          </span>
          <Button onClick={acceptCookie}>Accept</Button>
        </div>
      </div>
    </ClientOnly>
  );
};

export default CookieConsent;
