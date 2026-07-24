"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteNavLinks } from "@/data/siteNav";
import BrandLogo from "./BrandLogo";

export default function HomePageHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const half = Math.ceil(siteNavLinks.length / 2);
  const row1 = siteNavLinks.slice(0, half);
  const row2 = siteNavLinks.slice(half);

  const navLinkClass = (href) =>
    `relative nav-underline text-[12px] 2xl:text-[13px] font-bold px-2 2xl:px-3 py-1.5 whitespace-nowrap tracking-wider 2xl:tracking-widest uppercase transition-colors duration-300
      ${isActive(href)
        ? "text-[#C49A2B] after:!scale-x-100"
        : "text-[#555] hover:text-[#C49A2B]"
      }`;

  return (
    <>
      {/* Main header */}
      <header
        className={`w-full bg-white/95 backdrop-blur-md border-b border-[rgba(196,154,43,0.2)] fixed left-0 right-0 top-0 z-30 transition-shadow duration-300 ${
          scrolled ? "shadow-[0_6px_24px_-8px_rgba(44,31,14,0.25)]" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-6 flex items-stretch gap-0 h-[72px]">

          {/* Logo */}
          <Link
            href="/"
            aria-label="The Islands by Gaurs — Home"
            className="flex-shrink-0 flex items-center pr-3 sm:pr-4 2xl:pr-6 border-r border-[rgba(196,154,43,0.2)] transition-transform duration-300 hover:scale-[1.03] origin-left"
          >
            <span className="hidden 2xl:block"><BrandLogo size="md" /></span>
            <span className="2xl:hidden"><BrandLogo size="sm" /></span>
          </Link>

          {/* Desktop nav — two rows, fills remaining space */}
          <nav className="hidden xl:flex flex-col flex-1 min-w-0 justify-center px-2 2xl:px-4 font-sans">
            {/* Row 1 */}
            <div className="flex items-center">
              {row1.map((item) => (
                <Link key={item.href} href={item.href} className={navLinkClass(item.href)}>
                  {item.label}
                </Link>
              ))}
            </div>
            {/* Row 2 */}
            <div className="flex items-center border-t border-dashed border-[rgba(196,154,43,0.18)]">
              {row2.map((item) => (
                <Link key={item.href} href={item.href} className={navLinkClass(item.href)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Enquire Now CTA */}
          <div className="hidden xl:flex items-center pl-3 2xl:pl-6 border-l border-[rgba(196,154,43,0.2)] flex-shrink-0">
            <Link
              href="/contact-us"
              className="btn-sheen inline-flex items-center gap-1.5 bg-[#C49A2B] hover:bg-[#A8841E] text-white text-[10px] font-semibold uppercase tracking-wider 2xl:tracking-widest px-3.5 2xl:px-5 py-2.5 rounded-sm whitespace-nowrap"
            >
              Enquire Now
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                <path d="M1.5 5.5h8M6 2l3.5 3.5L6 9" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Mobile hamburger — animates into an X */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="xl:hidden ml-auto flex items-center justify-center w-11 h-11 rounded-md flex-shrink-0 self-center bg-[#C49A2B] hover:bg-[#A8841E] active:scale-95 transition-all duration-200"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block w-5 h-[14px]">
              <span
                className={`absolute left-0 top-0 w-5 h-[2px] bg-white rounded transition-all duration-300 ${
                  open ? "top-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] w-5 h-[2px] bg-white rounded transition-all duration-300 ${
                  open ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[12px] w-5 h-[2px] bg-white rounded transition-all duration-300 ${
                  open ? "top-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* Gold accent bar */}
        <div
          className="h-[2px]"
          style={{ background: "linear-gradient(90deg, transparent, rgba(196,154,43,0.4) 20%, #C49A2B 50%, rgba(196,154,43,0.4) 80%, transparent)" }}
        />
      </header>

      {/* Spacer */}
      <div className="h-[74px]" />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 left-0 h-[100dvh] z-50 flex flex-col shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)] xl:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "min(88vw, 360px)", backgroundColor: "#fff" }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(196,154,43,0.2)]">
          <BrandLogo size="sm" animated={false} />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="w-9 h-9 flex items-center justify-center rounded-full text-[#888] hover:text-[#C49A2B] hover:bg-[rgba(196,154,43,0.08)] hover:rotate-90 transition-all duration-300 text-xl"
          >
            ✕
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto flex flex-col font-sans">
          {siteNavLinks.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{
                transitionDelay: open ? `${80 + i * 40}ms` : "0ms",
              }}
              className={`px-6 py-3.5 border-b border-[rgba(196,154,43,0.1)] text-[15px] font-bold tracking-wide uppercase transition-all duration-500 ${
                open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              } ${
                isActive(item.href)
                  ? "text-[#C49A2B] bg-[rgba(196,154,43,0.05)] border-l-4 border-l-[#C49A2B]"
                  : "text-[#444] hover:text-[#C49A2B] hover:bg-[rgba(196,154,43,0.04)] hover:pl-8"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-5 border-t border-[rgba(196,154,43,0.2)] flex flex-col gap-3">
          <Link
            href="/contact-us"
            onClick={() => setOpen(false)}
            className="btn-sheen flex justify-center items-center gap-2 py-3 bg-[#C49A2B] hover:bg-[#A8841E] text-white text-sm font-semibold uppercase tracking-widest rounded-md"
          >
            Enquire Now
          </Link>
          <a
            href="tel:+919810890353"
            className="flex justify-center items-center gap-2 py-2.5 border border-[#C49A2B] text-[#A8841E] text-sm font-semibold tracking-widest rounded-md hover:bg-[rgba(196,154,43,0.08)] transition-colors"
          >
            ☏ +91 98108 90353
          </a>
        </div>
      </div>

      {/* Drawer backdrop */}
      <button
        type="button"
        aria-label="Close menu overlay"
        tabIndex={open ? 0 : -1}
        className={`fixed inset-0 bg-black/45 backdrop-blur-[2px] z-40 xl:hidden transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />
    </>
  );
}
