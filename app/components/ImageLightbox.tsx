"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ImageLightboxProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  showLogo?: boolean;
};

export default function ImageLightbox({
  src,
  alt,
  className,
  sizes = "100vw",
  priority = false,
  showLogo = true,
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const lightbox = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-5 backdrop-blur-md md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={() => setIsOpen(false)}
    >
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="absolute right-6 top-6 z-[10000] flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl leading-none text-white backdrop-blur-md transition hover:bg-white/20"
        aria-label="Fechar imagem ampliada"
      >
        ×
      </button>

      <div
        className="relative aspect-[16/10] w-full max-w-[1200px] overflow-hidden rounded-[28px] bg-[#1f1a17] shadow-[0_40px_120px_rgba(0,0,0,0.5)]"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />

        {showLogo ? (
          <span className="pointer-events-none absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/30 font-serif text-sm tracking-[0.08em] text-white backdrop-blur-md">
            MD
          </span>
        ) : null}
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group absolute inset-0 block cursor-zoom-in overflow-hidden text-left"
        aria-label={`Ampliar imagem: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={className}
        />

        <span className="pointer-events-none absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />

        <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-white/90 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#2c241e] opacity-0 shadow-[0_10px_24px_rgba(0,0,0,0.16)] transition duration-500 group-hover:opacity-100">
          Ampliar
        </span>
      </button>

      {isMounted && isOpen ? createPortal(lightbox, document.body) : null}
    </>
  );
}