"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const consentKey = "md-meta-marketing-consent-v1";

export default function MetaPixel() {
  const pathname = usePathname();
  const [consent, setConsent] = useState<boolean | null>(null);
  const [showPreferences, setShowPreferences] = useState(false);
  const [ready, setReady] = useState(false);
  const lastPage = useRef<string | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
    // Storage may be unavailable in private or restricted browsers.
    try {
      const saved = localStorage.getItem(consentKey);
      if (saved === "granted" || saved === "denied") {
        setConsent(saved === "granted");
        return;
      }
    } catch {}
    setShowPreferences(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!ready || !window.fbq) return;
    window.fbq("consent", consent === true ? "grant" : "revoke");
    if (consent === true && lastPage.current !== pathname) {
      window.fbq("track", "PageView");
      lastPage.current = pathname;
    }
  }, [consent, pathname, ready]);

  function choose(allowed: boolean) {
    if (!allowed) {
      window.fbq?.("consent", "revoke");
      lastPage.current = null;
      for (const name of ["_fbp", "_fbc"]) {
        document.cookie = `${name}=; Max-Age=0; Path=/`;
        const parts = location.hostname.split(".");
        for (let i = 0; i < parts.length - 1; i++) {
          document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.${parts.slice(i).join(".")}`;
        }
      }
    }
    try {
      localStorage.setItem(consentKey, allowed ? "granted" : "denied");
    } catch {}
    setConsent(allowed);
    setShowPreferences(false);
  }

  return (
    <>
      {consent === true && (
        <Script id="meta-pixel" strategy="afterInteractive" onReady={() => setReady(true)}>
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1371214631443128');`}
        </Script>
      )}
      {showPreferences ? (
        <section aria-label="Cookies de publicidade" className="fixed inset-x-0 bottom-0 z-[100] border-t border-neutral-200 bg-white p-5 shadow-xl">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl text-sm leading-relaxed">
              <p className="font-semibold">Cookies de publicidade</p>
              <p>Com a sua autorização, utilizamos o Pixel da Meta para medir visitas e a eficácia dos anúncios no Facebook e Instagram. A Meta recebe dados da navegação, incluindo as páginas visitadas. Pode recusar ou alterar esta escolha em «Cookies de publicidade».</p>
            </div>
            <div className="flex shrink-0 gap-3">
              <button type="button" onClick={() => choose(false)} className="rounded border border-neutral-900 px-5 py-3 text-sm">Recusar</button>
              <button type="button" onClick={() => choose(true)} className="rounded border border-neutral-900 bg-neutral-900 px-5 py-3 text-sm text-white">Aceitar</button>
            </div>
          </div>
        </section>
      ) : (
        <button type="button" onClick={() => setShowPreferences(true)} className="fixed bottom-3 left-3 z-50 rounded border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-700 shadow-sm">Cookies de publicidade</button>
      )}
    </>
  );
}
