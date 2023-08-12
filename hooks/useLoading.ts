import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function useLoading(): boolean {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(router.asPath);

  useEffect(() => {
    const handleRouteChangeStart = (url: string) => {
      if (url !== currentUrl) {
        setLoading(true);
        setCurrentUrl(url);
      }
    };

    const handleRouteChangeComplete = (url: string) => {
      if (url === currentUrl) {
        setLoading(false);
      }
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router, currentUrl]);

  return loading;
}

export default useLoading;
