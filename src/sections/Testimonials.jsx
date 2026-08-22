import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import tadiloAvatar from "../assets/photo_2026-08-09_12-21-19.jpg";
import yannicklAvatar from "../assets/photo_2026-08-09_12-19-44.jpg";
import fisehaAvatar from "../assets/1783343303-q4JLpGSxkV8Q.png";

const testimonials = [
  {
    quote:
      "I’m really happy to be working with you, Benayass. You have a great sense of timing, consistently deliver high-quality work, and working together like this is truly gold. Thank you!",
    author: "Fiseha",
    role: "Co-founder of Rofi Creatives",
    avatar: fisehaAvatar,
  },
  {
    quote:
      `Benyass, you’re a good video editor, but you’re not just a good video editor, you’re one of the best storytellers I’ve worked with. Throughout my journey, I’ve worked with around 30 editors, and you’re definitely one of the most promising video editors in Ethiopia. 
       Beyond your skills, you also have a great character, and that’s something I truly appreciate.
       Keep going, bro. You have a lot of potential.`,
    author: "Tadilo",
    role: "Brand Manager of Yonas Moh",
    avatar: tadiloAvatar,
  },
  {
    quote:
    `Working with benayass has been smooth ever since we started. He consistently delivers high end edits and brings a lot of creativity to my content. I personally love working with young,talented people and having him in my team has definitely added value 
    Not only is he a great editor but he’s also a great graphics designer. He understands my style, my vision and the type of content I go for. He is young, reliable, creative and very talented at what he does 
    I give him full credit for the work he’s put into my content and i recommend him for anyone who’s looking for a talented and skilled editor`,
    author: "Yannick",
    role: "Owner of Yannick scent",
    avatar: yannicklAvatar,
  },
  
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Kind words from{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
