"use client";

import { CSSProperties, useMemo } from "react";

interface Props {
  x: number;
  y: number;
  size: number;
}

export default function CircuitNode({
  x,
  y,
  size,
}: Props) {

  const color = useMemo(() => {

    const colors = [
      "#00E5FF",
      "#38BDF8",
      "#7C3AED",
      "#22D3EE",
    ];

    return colors[Math.floor(Math.random() * colors.length)];

  }, []);

  const delay = useMemo(() => Math.random() * 6, []);

  const duration = useMemo(() => 3 + Math.random() * 4, []);

  const style: CSSProperties = {
    left: `${x}%`,
    top: `${y}%`,
    width: size,
    height: size,
  };

  return (
    <div
      className="absolute"
      style={style}
    >
      {/* Halo Exterior */}

      <div
        className="absolute rounded-full circuit-node-ring"
        style={{
          width: size * 4,
          height: size * 4,
          left: -(size * 1.5),
          top: -(size * 1.5),
          border: `1px solid ${color}`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          opacity: .35,
        }}
      />

      {/* Halo Medio */}

      <div
        className="absolute rounded-full circuit-node-ring"
        style={{
          width: size * 2.5,
          height: size * 2.5,
          left: -(size * .75),
          top: -(size * .75),
          border: `1px solid ${color}`,
          animationDelay: `${delay + 1}s`,
          animationDuration: `${duration}s`,
          opacity: .5,
        }}
      />


      {/* Glow */}
      <div
        className="absolute rounded-full"
        style={{
          inset: -3,
          background: color,
          filter: "blur(8px)",
          opacity: 0.22,
        }}
      />

      {/* Núcleo */}

      <div
        className="absolute rounded-full circuit-node-core"
        style={{
          inset: 0,
          background: color,
          boxShadow: `
            0 0 10px ${color},
            0 0 25px ${color},
            0 0 45px ${color}
          `,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }}
      />

      {/* Destello */}

      <div
        className="absolute rounded-full circuit-node-spark"
        style={{
          width: size * .5,
          height: size * .5,
          background: "#ffffff",
          left: size * .2,
          top: size * .2,
          animationDelay: `${delay}s`,
        }}
      >
      </div>

    </div>
  );
}