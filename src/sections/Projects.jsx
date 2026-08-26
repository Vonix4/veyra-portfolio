import { ArrowUpRight, Play, Volume2, VolumeX } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useEffect, useRef, useState } from "react";

import behindTheLensVideo from "../assets/Sequence 01_3.mp4";
import oneDayInMotionVideo from "../assets/Sequence 02.mp4";
import theDropVideo from "../assets/Sequence 01.mp4";
import creativeRoutineVideo from "../assets/Sequence 01_34.mp4";
import pastAndFutureVideo from "../assets/past and future.mp4";
import FutureVideo from "../assets/Sequence 09.mp4";

const tiktokUrl =
  "https://www.tiktok.com/@veyra.proff?is_from_webapp=1&sender_device=pc";

const projects = [
  {
    title: "Behind the Lens",
    description:
      "A fast-cut creator montage built around a strong opening hook and a satisfying visual payoff.",
    category: "Creator Reel",
    tools: ["premiere pro", "Captions", "Sound Design"],
    gradient: "from-sky-500/45 via-blue-950/50 to-slate-950",
    video: behindTheLensVideo,
  },
  {
    title: "One Day in Motion",
    description:
      "A high-energy day-in-the-life edit with rhythmic cuts, ambient detail, and kinetic on-screen text.",
    category: "Lifestyle TikTok",
    tools: ["Premiere Pro", "Motion Graphics", "Color Grade"],
    gradient: "from-indigo-500/45 via-slate-900/55 to-slate-950",
    video: oneDayInMotionVideo,
  },
  {
    title: "The Drop",
    description:
      "A product-led launch edit designed to stop the scroll and give a new collection an immediate point of view.",
    category: "Product Campaign",
    tools: ["After Effects", "CapCut", "Sound Design"],
    gradient: "from-cyan-400/35 via-blue-950/60 to-slate-950",
    video: theDropVideo,
  },
  {
    title: "The Creative Routine",
    description:
      "A clean process video that turns small moments in the studio into a compelling vertical story.",
    category: "Process Edit",
    tools: ["Premiere Pro", "Captions", "Color Grade"],
    gradient: "from-blue-600/45 via-indigo-950/55 to-slate-950",
    video: creativeRoutineVideo,
  },
  {
    title: "Past & Future",
    description:
      "A visual story that brings past and future moments together through punchy transitions and sound-led momentum.",
    category: "Cinematic Short",
    tools: ["CapCut", "Motion Graphics", "VFX"],
    gradient: "from-sky-400/35 via-slate-900/60 to-blue-950",
    video: pastAndFutureVideo,
  },
  {
    title: "After Hours",
    description:
      "A moody night-time highlight that uses music, selective color, and deliberate pacing to create atmosphere.",
    category: "Cinematic Short",
    tools: ["DaVinci Resolve", "Premiere Pro", "Sound Design"],
    gradient: "from-violet-500/35 via-indigo-950/60 to-slate-950",
    video: FutureVideo,
  },
];

export const Projects = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videoRefs = useRef([]);
  const cardRefs = useRef([]);
  const activeVideoRef = useRef(null);

  useEffect(() => {
    activeVideoRef.current = activeVideo;
  }, [activeVideo]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) return;

      videoRefs.current.forEach((video) => {
        if (!video) return;

        video.pause();
        video.muted = true;
      });

      setActiveVideo(null);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.videoIndex);
          const video = videoRefs.current[index];

          if (!video) return;

          if (entry.isIntersecting) {
            // Start the video silently when it enters the viewport.
            video.muted = true;

            video.play().catch(() => {
              // Mobile browsers may still block autoplay.
            });
          } else {
            // Stop videos that leave the viewport.
            video.pause();
            video.muted = true;

            if (activeVideoRef.current === index) {
              setActiveVideo(null);
            }
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    return () => {
      observer.disconnect();

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, []);

  const toggleSound = (index) => {
    const selectedVideo = videoRefs.current[index];

    if (!selectedVideo) return;

    // If this video is already active, mute it.
    if (activeVideo === index) {
      selectedVideo.muted = true;
      setActiveVideo(null);
      return;
    }

    // Mute all other videos.
    videoRefs.current.forEach((video, videoIndex) => {
      if (!video) return;

      if (videoIndex !== index) {
        video.muted = true;
      }
    });

    // Enable sound for the selected video.
    selectedVideo.muted = false;
    selectedVideo.volume = 1;

    // Play after the user's tap/click.
    selectedVideo.play().catch(() => {});

    setActiveVideo(index);
  };

  return (
    <section
      id="projects"
      className="py-32 relative overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Selected Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Edits with a story to{" "}
            <span className="font-serif italic font-normal text-white">
              tell.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Six vertical edits made for the For You page—strong hooks,
            crisp pacing, and visuals that give every second a purpose.
          </p>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

          {projects.map((project, idx) => (
            <article
              key={project.title}
              ref={(card) => {
                cardRefs.current[idx] = card;
              }}
              data-video-index={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{
                animationDelay: `${(idx + 1) * 100}ms`,
              }}
            >
              <div
                className={`relative overflow-hidden aspect-[9/12] bg-gradient-to-br ${project.gradient}`}
              >

                {/* Video */}
                {project.video && (
                  <video
                    ref={(video) => {
                      videoRefs.current[idx] = video;
                    }}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={project.video}
                    loop
                    muted={activeVideo !== idx}
                    playsInline
                    preload="none"
                    aria-label={`${project.title} video preview`}
                  />
                )}

                {/* Video Overlay */}
                <div className="absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_72%_24%,#7dd3fc_0,transparent_26%),linear-gradient(115deg,transparent_0,transparent_48%,rgba(255,255,255,.16)_49%,transparent_50%)]" />

                {/* Sound Button */}
                <div className="absolute top-6 right-6 flex justify-end">
                  <button
                    type="button"
                    onClick={() =>
                      project.video && toggleSound(idx)
                    }
                    aria-label={
                      activeVideo === idx
                        ? `Mute ${project.title}`
                        : `Unmute ${project.title}`
                    }
                    className={`relative z-20 w-14 h-14 rounded-full border border-white/40 bg-background/35 backdrop-blur flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:border-primary transition-all duration-300 ${
                      project.video
                        ? "cursor-pointer"
                        : "cursor-default opacity-60"
                    }`}
                  >
                    {activeVideo === idx ? (
                      <Volume2 className="w-5 h-5" />
                    ) : (
                      <VolumeX className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Bottom Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 pt-16 bg-gradient-to-t from-background/90 via-background/45 to-transparent">

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 rounded-full bg-background/45 backdrop-blur-sm text-xs font-medium border border-white/10 text-sky-50"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* TikTok Link */}
                  <a
                    href={tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-sky-100 hover:text-primary transition-colors"
                  >
                    Watch on TikTok
                    <Play className="w-4 h-4 fill-current" />
                  </a>

                </div>
              </div>
            </article>
          ))}

        </div>

        {/* View More */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton
            onClick={() =>
              window.open(
                tiktokUrl,
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            View More Edits
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>

      </div>
    </section>
  );
};