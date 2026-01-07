"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Facebook, Twitter, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home（実績）" },
  { href: "/profile", label: "自己紹介" },
  { href: "/vision", label: "2026年所信表明" },
  { href: "/contact", label: "Contact（お問い合わせ）" },
];

const snsLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/6_sakak1a.n?igsh=MXNocHlpbzk2OTEzNw%3D%3D&utm_source=qr",
    icon: Instagram,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/egxk6wgio440437?s=21",
    icon: Twitter,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/17uUV6QNBg/?mibextid=wwXIfr",
    icon: Facebook,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden h-full w-64 flex-col justify-between border-r border-white/10 bg-black/40 px-5 py-6 text-sm text-zinc-100 md:flex">
        <div className="space-y-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-zinc-400">
              PORTFOLIO
            </p>
            <h1 className="mt-3 text-lg font-semibold text-zinc-50">
              19歳 理学部生
              <br />
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                IT独立への航路
              </span>
            </h1>
            <p className="mt-2 text-[11px] text-zinc-400">
              熱をもって爆速で仕事を遂行させていただきます。
            </p>
          </div>

          <nav className="space-y-1">
            <p className="mb-2 text-[11px] font-semibold tracking-[0.18em] text-zinc-500">
              PAGES
            </p>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.button
                  whileHover={{ x: 4 }}
                  className={`group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-[13px] transition ${
                    isActive(item.href)
                      ? "bg-gradient-to-r from-sky-500/25 via-blue-500/20 to-violet-500/25 text-sky-100 shadow-[0_0_25px_rgba(56,189,248,0.45)]"
                      : "bg-white/0 text-zinc-300 hover:bg-white/[0.04]"
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition ${
                      isActive(item.href)
                        ? "bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]"
                        : "bg-zinc-600 group-hover:bg-sky-300"
                    }`}
                  />
                </motion.button>
              </Link>
            ))}
          </nav>

          <div className="space-y-2">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-zinc-500">
              SNS
            </p>
            <div className="space-y-1.5 text-[12px]">
              {snsLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-2 rounded-lg border border-zinc-800/80 bg-white/[0.02] px-3 py-1.75 text-zinc-300 transition hover:border-sky-400/60 hover:bg-sky-500/5 hover:text-sky-50"
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon className="h-4 w-4 text-zinc-400 transition group-hover:text-sky-200" />
                    {label}
                  </span>
                  <span className="text-[10px] text-zinc-500 transition group-hover:text-sky-200">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-3 text-[10px] text-zinc-500">
          <p>© 2026 Your Name</p>
          <p className="mt-1 text-[10px] text-zinc-600">
            Next.js / Framer Motion / Tailwind CSS
          </p>
        </div>
      </aside>

      {/* Mobile sticky header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/80 px-4 py-3 backdrop-blur-md md:hidden">
        <div>
          <p className="text-[10px] font-semibold tracking-[0.22em] text-zinc-400">
            PORTFOLIO
          </p>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-zinc-100 shadow-[0_0_18px_rgba(59,130,246,0.55)] transition hover:bg-white/10"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 1 } : { rotate: 0, y: -3 }}
            className="absolute h-[1.5px] w-5 rounded-full bg-zinc-100"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="absolute h-[1.5px] w-5 rounded-full bg-zinc-100"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -1 } : { rotate: 0, y: 3 }}
            className="absolute h-[1.5px] w-5 rounded-full bg-zinc-100"
          />
        </button>
      </header>

      {/* Mobile fullscreen drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 cursor-default bg-black/80 backdrop-blur-sm md:hidden"
            />

            {/* Fullscreen drawer from right */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed right-0 top-0 z-50 h-dvh w-full max-w-md overflow-y-auto border-l border-sky-500/20 bg-gradient-to-br from-black via-black/98 to-[#070a18] p-6 shadow-[0_0_60px_rgba(56,189,248,0.3)] md:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.22em] text-zinc-400">
                    MENU
                  </p>
                  <p className="mt-1 text-base font-semibold text-zinc-50">
                    Navigation
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-zinc-100 transition hover:bg-white/10 hover:border-sky-400/60"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation items */}
              <div className="mt-6 space-y-3">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-zinc-500">
                  PAGES
                </p>
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                    >
                      <div
                        className={`flex items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-[14px] transition ${
                          isActive(item.href)
                            ? "bg-gradient-to-r from-sky-500/25 via-blue-500/20 to-violet-500/25 text-sky-100 shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                            : "text-zinc-300 hover:bg-white/[0.06]"
                        }`}
                      >
                        <span className="break-words whitespace-normal font-medium">
                          {item.label}
                        </span>
                        <span
                          className={`h-2 w-2 shrink-0 rounded-full transition ${
                            isActive(item.href)
                              ? "bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]"
                              : "bg-zinc-600"
                          }`}
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* SNS links */}
              <div className="mt-8 space-y-3">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-zinc-500">
                  SNS
                </p>
                <div className="space-y-2">
                  {snsLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-3 rounded-xl border border-zinc-800/80 bg-white/[0.02] px-4 py-3 text-[13px] text-zinc-300 transition hover:border-sky-400/60 hover:bg-sky-500/5 hover:text-sky-50"
                    >
                      <span className="inline-flex items-center gap-3">
                        <Icon className="h-5 w-5 text-zinc-400 transition group-hover:text-sky-200" />
                        <span className="font-medium">{label}</span>
                      </span>
                      <span className="text-[11px] text-zinc-500 transition group-hover:text-sky-200">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 border-t border-white/10 pt-4 text-[10px] text-zinc-500">
                <p>© 2026 坂井 洸太</p>
                <p className="mt-1 text-[10px] text-zinc-600">
                  Next.js / Framer Motion / Tailwind CSS
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
