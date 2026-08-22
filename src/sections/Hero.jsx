import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Instagram,
  Play,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { FaTelegram, FaTiktok } from "react-icons/fa6";
import premiereIcon from "@/assets/Adobe_Premiere_Pro_CC_2026_icon.svg";
import afterEffectsIcon from "@/assets/Adobe_After_Effects_CC_2026_icon.svg";
import davinciIcon from "@/assets/DaVinci_Resolve_17_logo.svg";
import photoshopIcon from "@/assets/Adobe_Photoshop_CC_2026_icon.svg";
import illustratorIcon from "@/assets/Adobe_Illustrator_CC_icon.svg";

const skills = [
  "Adobe Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "CapCut",
  "Adobr Photoshop",
  
];

const tiktokUrl =
  "https://www.tiktok.com/@veyra.proff?is_from_webapp=1&sender_device=pc";

const particles = Array.from({ length: 30 }, (_, index) => ({
  left: `${(index * 39 + 11) % 100}%`,
  top: `${(index * 53 + 7) % 100}%`,
  duration: 15 + ((index * 7) % 20),
  delay: (index * 0.7) % 5,
}));

// Software icons circling around the hero center
const softwareOrbit = [
  {
    src: premiereIcon,
    label: "Premiere Pro",
    inset: "6px",
    duration: 24,
    delay: -6,
    reverse: false,
    angle: 0,
    bob: 4,
    bobDelay: 0,
    trailFrom: 250,
    trailColor: "167,139,250", // violet
  },
  {
    src: afterEffectsIcon,
    label: "After Effects",
    inset: "22px",
    duration: 18,
    delay: -12,
    reverse: true,
    angle: 72,
    bob: 4.6,
    bobDelay: -1.4,
    trailFrom: 70,
    trailColor: "129,140,248", // indigo
  },
  {
    src: photoshopIcon,
    label: "Photoshop",
    inset: "38px",
    duration: 21,
    delay: -8,
    reverse: false,
    angle: 144,
    bob: 5,
    bobDelay: -2.2,
    trailFrom: 250,
    trailColor: "56,189,248", // sky blue
  },
  {
    src: illustratorIcon,
    label: "Illustrator",
    inset: "54px",
    duration: 26,
    delay: -15,
    reverse: true,
    angle: 216,
    bob: 4.3,
    bobDelay: -1.8,
    trailFrom: 70,
    trailColor: "251,146,60", // orange
  },
  {
    src: davinciIcon,
    label: "DaVinci Resolve",
    inset: "70px",
    duration: 30,
    delay: -4,
    reverse: false,
    angle: 288,
    bob: 5.4,
    bobDelay: -3,
    trailFrom: 250,
    trailColor: "251,191,36", // amber
  },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Ambient blue particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#38bdf8",
              left: particle.left,
              top: particle.top,
              animation: `slow-drift ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Video editor • motion graphics
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Shaping <span className="text-primary glow-text">stories</span>
                <br />
                <span className="font-serif italic font-normal text-primary">
                frame by frame.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Benayas Gashaw, a creative video editor who turns raw
                footage into cinematic stories, high energy social content, and
                visual experiences people remember.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}>
                View My Work <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
                <Play className="w-5 h-5" />
                Contact me
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Social Media: </span>
              {[
                { icon: FaTiktok, href: tiktokUrl, label: "TikTok" },
                { icon: FaTelegram, href: "https://t.me/Benayass_G", label: "Telegram" },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/veyra_proff?igsh=MW4wMWVoaXU4aGI0aA==",
                  label: "Instagram",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${social.label} in a new tab`}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Software Orbit */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative w-full max-w-[26rem] aspect-square mx-auto group">
              {/* Glow backdrop */}
              <div
                className="absolute inset-0 
              rounded-full bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />

              {/* Orbit rings */}
              <div className="absolute inset-6 rounded-full border border-primary/10" />
              <div className="absolute inset-12 rounded-full border border-dashed border-primary/20" />

              {/* Center hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <button
                  type="button"
                  onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                  aria-label="View projects"
                  className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full glass-strong glow-border flex items-center justify-center animate-float cursor-pointer transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Play className="w-9 h-9 text-primary translate-x-0.5" />
                  <span className="absolute -inset-1.5 rounded-full border border-primary/25 animate-pulse" />
                </button>
              </div>

              {/* Orbiting software icons + glow trails */}
              {softwareOrbit.map((item) => (
                <div key={item.label} className="contents">
                  {/* Glow trail following the icon */}
                  <div
                    className="absolute rounded-full animate-orbit pointer-events-none"
                    style={{
                      inset: item.inset,
                      "--orbit-angle": `${item.angle}deg`,
                      background: `conic-gradient(from ${item.trailFrom}deg, transparent 0deg, rgba(${item.trailColor},0.75) 40deg, rgba(${item.trailColor},0.25) 110deg, transparent 170deg)`,
                      filter: "blur(12px)",
                      willChange: "transform",
                      animation: `orbit ${item.duration}s linear infinite`,
                      animationDelay: `${item.delay}s`,
                      animationDirection: item.reverse ? "reverse" : "normal",
                    }}
                  />
                  {/* Icon */}
                  <div
                    className="absolute animate-orbit"
                    style={{
                      inset: item.inset,
                      "--orbit-angle": `${item.angle}deg`,
                      willChange: "transform",
                      animation: `orbit ${item.duration}s linear infinite`,
                      animationDelay: `${item.delay}s`,
                      animationDirection: item.reverse ? "reverse" : "normal",
                    }}
                  >
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-counter"
                      style={{
                        willChange: "transform",
                        animation: `orbit-counter ${item.duration}s linear infinite`,
                        animationDelay: `${item.delay}s`,
                        animationDirection: item.reverse ? "reverse" : "normal",
                      }}
                    >
                      <div
                        className="animate-float"
                        style={{
                          animationDuration: `${item.bob}s`,
                          animationDelay: `${item.bobDelay}s`,
                        }}
                      >
                        <div className="flex flex-col items-center gap-1.5">
                          <img
                            src={item.src}
                            alt={item.label}
                            title={item.label}
                            className="w-12 h-12 sm:w-14 sm:h-14 object-contain transition-transform duration-300 hover:scale-110"
                            style={{
                              filter: `drop-shadow(0 0 12px rgba(${item.trailColor},0.45))`,
                            }}
                          />
                          <span className="text-[10px] font-medium text-muted-foreground/90 glass rounded-full px-2 py-0.5 whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:text-primary transition-opacity">
                            {item.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">
                    Available for work
                  </span>
                </div>
              </div>
              {/* Stats Badge */}
              <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                <div className="text-2xl font-bold text-primary">1+</div>
                <div className="text-xs text-muted-foreground">
                  Years Exp.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Softwares I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
