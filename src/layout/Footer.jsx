import { Instagram } from "lucide-react";
import { FaTelegram, FaTiktok } from "react-icons/fa6";

const socialLinks = [
  { icon: FaTiktok, href: "https://www.tiktok.com/@veyra.proff?is_from_webapp=1&sender_device=pc", label: "TikTok" },
  { icon: FaTelegram, href: "https://t.me/Benayass_G", label: "Telegram" },
  { icon: Instagram, href: "https://www.instagram.com/veyra_proff?igsh=MW4wMWVoaXU4aGI0aA==", label: "Instagram" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Selected Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight font-poppins">
              VEYRA <span className="text-primary">proff.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Benayas Gashaw. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
