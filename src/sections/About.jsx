import { Clapperboard, Lightbulb, Sparkles, Users } from "lucide-react";

const highlights = [
  {
    icon: Clapperboard,
    title: "Storytelling",
    description:
      "Turning raw footage into engaging stories that capture attention and create emotion.",
  },
  {
    icon: Sparkles,
    title: "Precision",
    description:
      "Crafting every cut, transition, and detail with purpose to create a polished final product.",
  },
  {
    icon: Users,
    title: "Visual Excellence",
    description: "Using color grading, motion graphics, sound design, and visual effects to elevate every frame.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    description:
      "Experimenting with new styles, techniques, and ideas to keep every project fresh and visually compelling.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Crafting stories, 
              <span className="font-serif italic font-normal text-white">
                {" "}
                one frame at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a passionate video editor with 1+ years of experience turning raw footage into stories 
                that connect, engage, and leave an impact. My journey started with a curiosity about how visuals, 
                music, and timing can transform a simple clip into something powerful and that curiosity grew into 
                a deep passion for visual storytelling.
              </p>
              <p>
                My approach combines technical precision with creativity and a strong sense of storytelling. I believe 
                great editing isn't just about making footage look good It's about creating an
                experience that keeps people watching.
              </p>
              <p>
                When I'm not editing, you'll find me exploring new editing techniques, 
                experimenting with visual effects, studying great films and creators, 
                or discovering new ways to bring ideas to life through video.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to turn every frame into a story creating videos
                 that don't just look good, but make people feel something."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
