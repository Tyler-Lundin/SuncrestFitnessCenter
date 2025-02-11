"use client";
import React, { useEffect } from "react";

const Particles = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  useEffect(() => {
    // Inject keyframes manually in the browser
    const stylesString = `
      @keyframes rotateSlow {
        from { transform: rotate(45deg); }
        to { transform: rotate(405deg); }
      }
      @keyframes rotateMedium {
        from { transform: rotate(90deg); }
        to { transform: rotate(450deg); }
      }
      @keyframes rotateFast {
        from { transform: rotate(120deg); }
        to { transform: rotate(480deg); }
      }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.innerText = stylesString;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet); // Cleanup when component unmounts
    };
  }, []);

  return (
    <div className={className}>
      <div className="relative z-40">{children}</div>
      <div style={{ ...styles.layer, ...styles.layer1 }} />
      <div style={{ ...styles.layer, ...styles.layer2 }} />
      <div style={{ ...styles.layer, ...styles.layer3 }} />
      <div style={{ ...styles.layer, ...styles.layer4 }} />
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  layer: {
    position: "absolute",
    top: "-50%", // Expand beyond the viewport for smooth cropping
    left: "-50%",
    width: "200%",
    height: "200%",
    backgroundSize: "50px 50px",
    backgroundRepeat: "repeat",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
  layer1: {
    backgroundImage: "radial-gradient(white 1px, transparent 1px)",
    opacity: 0.35,
    rotate: "-55deg",
    backgroundSize: "55px 55px",
    animation: "rotateSlow 350s linear infinite reverse",
  },
  layer2: {
    backgroundImage: "radial-gradient(white 1px, transparent 1px)",
    opacity: 0.35,
    rotate: "-11deg",
    backgroundSize: "45px 45px",
    animation: "rotateMedium 250s linear infinite",
  },
  layer3: {
    backgroundImage: "radial-gradient(white 1px, transparent 1px)",
    opacity: 0.35,
    rotate: "25deg",
    backgroundSize: "60px 60px",
    animation: "rotateFast 275s linear infinite",
  },
  layer4: {
    backgroundImage: "radial-gradient(white 1px, transparent 1px)",
    opacity: 0.35,
    backgroundSize: "150px 150px",
    rotate: "45deg",
    animation: "rotateFast 200s linear infinite reverse",
  },
};

export default Particles;
