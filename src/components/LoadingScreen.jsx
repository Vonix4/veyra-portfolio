import { useEffect, useState } from "react";

const LOAD_DURATION = 2000;

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const startedAt = performance.now();
    let frameId;
    let exitTimer;

    const updateProgress = (now) => {
      const nextProgress = Math.min(
        100,
        Math.round(((now - startedAt) / LOAD_DURATION) * 100)
      );
      setProgress(nextProgress);

      if (nextProgress < 100) {
        frameId = requestAnimationFrame(updateProgress);
      } else {
        setIsLeaving(true);
        exitTimer = window.setTimeout(onComplete, 550);
      }
    };

    frameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(frameId);
      window.clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`loading-screen ${isLeaving ? "loading-screen--leaving" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={`Loading portfolio: ${progress}% complete`}
    >
      <div className="loading-screen__grain" aria-hidden="true" />
      <div className="loading-screen__orb loading-screen__orb--one" aria-hidden="true" />
      <div className="loading-screen__orb loading-screen__orb--two" aria-hidden="true" />
      <div className="loading-screen__grid" aria-hidden="true" />

      <div className="loading-screen__content">
        <p className="loading-screen__eyebrow font-poppins">VEYRA proff EDITS</p>
        <div className="loading-screen__title-wrap" aria-hidden="true">
          <span className="loading-screen__title">MAKE IT</span>
          <span className="loading-screen__title loading-screen__title--accent">
            MOVE.
          </span>
        </div>
        <p className="loading-screen__message">Preparing the next frame</p>

        <div className="loading-screen__progress" aria-hidden="true">
          <div
            className="loading-screen__progress-fill"
            style={{ transform: `scaleX(${progress / 100})` }}
          />
        </div>

        <div className="loading-screen__footer">
          <span>LOADING EXPERIENCE</span>
          <span>{String(progress).padStart(2, "0")}%</span>
        </div>
      </div>
    </div>
  );
};
