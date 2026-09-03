"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

interface HeaderProps {
  onOpenQuote: () => void;
}

export default function Header({ onOpenQuote }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const toggleMobile = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobile = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ease-out flex items-center justify-between px-6 sm:px-10 lg:px-16 ${
          isScrolled
            ? "h-18 sm:h-20 bg-[#0e2322]/92 backdrop-blur-md shadow-[0_1px_0_rgba(182,145,81,0.2)] text-[#f2eee4]"
            : "h-20 sm:h-24 bg-transparent text-[#f2eee4]"
        }`}
      >
        {/* Minimal Monogram & Brand */}
        <a
          href="#top"
          className="flex items-center gap-2.5 group cursor-pointer"
          aria-label="Heaven Furniture Mart Home"
        >
          <span className="relative w-9 h-9 border border-[#b69151] rounded-full text-[#b69151] font-editorial-serif text-xl flex items-center justify-center leading-none transition-transform duration-300 group-hover:scale-105">
            <span className="relative z-10">H</span>
            <span
              aria-hidden="true"
              className="absolute -top-1 -right-1 w-2 h-2 rotate-45 bg-[#b69151] border-2 border-[#0e2322]"
            />
          </span>
          <div className="flex flex-col">
            <strong className="tracking-[0.16em] text-[13px] font-semibold font-editorial-sans text-[#f2eee4] leading-tight group-hover:text-[#d6bf8d] transition-colors">
              HEAVEN
            </strong>
            <small className="font-editorial-mono text-[8px] tracking-[0.18em] text-[#d6bf8d] uppercase leading-none mt-1">
              FURNITURE MART
            </small>
          </div>
        </a>

        {/* Minimal Desktop Nav Links */}
        <nav
          className="hidden lg:flex items-center gap-8 xl:gap-10 text-[13px] tracking-[0.06em] text-[#f2eee4]/90 font-editorial-sans font-medium"
          aria-label="Main navigation"
        >
          <a
            href="#collections"
            className="relative py-1 hover:text-[#d6bf8d] transition-colors after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:right-full after:h-[1px] after:bg-[#b69151] hover:after:right-0 after:transition-all after:duration-200"
          >
            Collections
          </a>
          <a
            href="#craft"
            className="relative py-1 hover:text-[#d6bf8d] transition-colors after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:right-full after:h-[1px] after:bg-[#b69151] hover:after:right-0 after:transition-all after:duration-200"
          >
            The bespoke way
          </a>
          <a
            href="#philosophy"
            className="relative py-1 hover:text-[#d6bf8d] transition-colors after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:right-full after:h-[1px] after:bg-[#b69151] hover:after:right-0 after:transition-all after:duration-200"
          >
            Philosophy
          </a>
          <a
            href="#journey"
            className="relative py-1 hover:text-[#d6bf8d] transition-colors after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:right-full after:h-[1px] after:bg-[#b69151] hover:after:right-0 after:transition-all after:duration-200"
          >
            Milestones
          </a>
          <a
            href="#showroom"
            className="relative py-1 hover:text-[#d6bf8d] transition-colors after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:right-full after:h-[1px] after:bg-[#b69151] hover:after:right-0 after:transition-all after:duration-200"
          >
            Showroom
          </a>
        </nav>

        {/* Header Action: Simple Hairline Text CTA */}
        <div className="flex items-center gap-5">
          <button
            onClick={onOpenQuote}
            className="cursor-pointer group flex items-center gap-1.5 text-[12px] font-semibold text-[#f2eee4] pb-0.5 border-b border-[#f2eee4] hover:text-[#d6bf8d] hover:border-[#d6bf8d] transition-colors"
          >
            <span className="tracking-[0.04em]">Request a consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#b69151] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Minimal 2-Line Mobile Hamburger */}
          <button
            type="button"
            onClick={toggleMobile}
            className="lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8 p-1 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`block h-[1.5px] bg-[#f2eee4] transition-transform duration-300 ${
                isMobileMenuOpen
                  ? "w-full translate-y-[4.5px] rotate-45"
                  : "w-full"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-[#f2eee4] transition-transform duration-300 ${
                isMobileMenuOpen
                  ? "w-full -translate-y-[3px] -rotate-45"
                  : "w-3/4 self-end"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-30 bg-[#0e2322]/98 backdrop-blur-xl transition-all duration-400 flex flex-col justify-center px-8 sm:px-14 py-20 lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-6 text-2xl font-editorial-serif text-[#f2eee4]">
          <a
            href="#collections"
            onClick={closeMobile}
            className="hover:text-[#d6bf8d] transition-colors"
          >
            Collections
          </a>
          <a
            href="#craft"
            onClick={closeMobile}
            className="hover:text-[#d6bf8d] transition-colors"
          >
            The bespoke way
          </a>
          <a
            href="#journey"
            onClick={closeMobile}
            className="hover:text-[#d6bf8d] transition-colors"
          >
            Milestones
          </a>
          <a
            href="#showroom"
            onClick={closeMobile}
            className="hover:text-[#d6bf8d] transition-colors"
          >
            Showroom & Studio
          </a>
        </nav>

        <div className="mt-12 pt-8 border-t border-[#b69151]/25 flex flex-col gap-4 font-editorial-sans text-xs text-[#cfd8d2]">
          <p>
            <strong className="text-[#f2eee4] block mb-1">
              Agrabad Flagship Studio
            </strong>
            Opposite RAK Ceramics, Agrabad Access Road, Chattogram
          </p>
          <p>
            <strong className="text-[#f2eee4] block mb-1">
              Studio Concierge
            </strong>
            <a
              href="tel:+8801960481983"
              className="hover:text-[#d6bf8d] text-sm font-semibold text-[#f2eee4]"
            >
              +880 1960-481983
            </a>
          </p>
          <button
            onClick={() => {
              closeMobile();
              onOpenQuote();
            }}
            className="w-full mt-2 py-3 bg-[#b69151] text-[#0e2322] font-semibold text-xs uppercase tracking-wider text-center cursor-pointer hover:bg-[#d6bf8d] transition-colors"
          >
            Request a Consultation
          </button>
        </div>
      </div>
    </>
  );
}
