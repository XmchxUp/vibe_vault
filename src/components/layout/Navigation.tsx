import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
    >
      <nav
        className="mx-auto max-w-7xl rounded-[28px] border border-white/12 bg-vault-void/82 px-3 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:bg-vault-void/45 sm:px-5"
        aria-label="Primary navigation"
      >
        <div className="flex h-14 items-center justify-between sm:h-16">
          <a
            href="#top"
            className="group inline-flex items-center gap-3 rounded-full px-2 py-1"
            aria-label="VibeVault home"
            onClick={closeMenu}
          >
            <span className="relative flex size-8 items-center justify-center rounded-full border border-vault-cyan/50 bg-vault-cyan/10 shadow-glow">
              <span className="size-2 rounded-full bg-vault-cyan shadow-[0_0_18px_rgba(0,229,255,0.95)]" />
            </span>
            <span className="font-display text-sm font-semibold tracking-normal text-white sm:text-base">
              VibeVault
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-vault-muted transition hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#projects">
              <Button variant="primary">
                View Work
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Button>
            </a>
          </div>

          <Button
            variant="icon"
            className="md:hidden"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            type="button"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? (
              <X className="size-4" aria-hidden="true" />
            ) : (
              <Menu className="size-4" aria-hidden="true" />
            )}
          </Button>
        </div>

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden md:hidden"
            >
              <div className="grid gap-2 pb-4 pt-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-[8px] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-vault-muted transition hover:border-vault-cyan/40 hover:text-white"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                ))}
                <a href="#projects" onClick={closeMenu}>
                  <Button className="w-full">
                    View Work
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </Button>
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
