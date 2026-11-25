"use client";

import { CSSProperties, useMemo } from "react";

interface Props {
  x: number;
  y: number;
  width: number;
  vertical: boolean;
  delay: number;
}

export default function CircuitTrace({
  x,
  y,
  width,
  vertical,
  delay,
}: Props) {

  const color = useMemo(() => {
    const colors = [
      "#00E5FF",
      "#00BFFF",
      "#38BDF8",
      "#7C3AED",
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  }, []);

  const lineStyle: CSSProperties = vertical
    ? {
        left: `${x}%`,
        top: `${y}%`,
        width: "2px",
        height: `${width}px`,
        background: `linear-gradient(
          to bottom,
          transparent,
          ${color},
          transparent
        )`,
      }
    : {
        left: `${x}%`,
        top: `${y}%`,
        width: `${width}px`,
        height: "2px",
        background: `linear-gradient(
          to right,
          transparent,
          ${color},
          transparent
        )`,
      };

  const signalStyle: CSSProperties = vertical
    ? {
        animationDelay: `${delay}s`,
      }
    : {
        animationDelay: `${delay}s`,
      };

  return (
    <div
      className="absolute"
      style={lineStyle}
    >
      {/* Glow */}

      <div
        className="absolute inset-0"
        style={{
          background: color,
          opacity: 0.35,
          filter: "blur(5px)",
        }}
      />

      {/* Línea principal */}
      <div
        className="absolute inset-0"
        style={{
          background: color,
          opacity: 0.35,
          borderRadius: "2px",
        }}
      />

      {/* Pulso */}

      <div
        className={`absolute rounded-full ${
          vertical
            ? "signal-vertical"
            : "signal-horizontal"
        }`}
        style={{
          ...signalStyle,
          background: color,
          width: 10,
          height: 10,
          boxShadow: `
            0 0 12px ${color},
            0 0 24px ${color},
            0 0 45px ${color}
          `,
        }}
      />

      {/* Nodo inicio */}

      <div
        className="absolute rounded-full"
        style={{
          width: 6,
          height: 6,
          left: vertical ? "-2px" : "0",
          top: vertical ? "0" : "-2px",
          background: color,
          boxShadow: `
            0 0 8px ${color},
            0 0 18px ${color}
          `,
        }}
      />

      {/* Nodo final */}

      <div
        className="absolute rounded-full"
        style={{
          width: 6,
          height: 6,
          left: vertical ? "-2px" : "calc(100% - 6px)",
          top: vertical ? "calc(100% - 6px)" : "-2px",
          background: color,
          boxShadow: `
            0 0 8px ${color},
            0 0 18px ${color}
          `,
        }}
      />
    </div>
  );
}