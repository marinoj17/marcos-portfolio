
"use client";

import { useEffect, useMemo, useState } from "react";
import CircuitTrace from "./CircuitTrace";
import CircuitNode from "./CircuitNode";

interface TraceData {
  id: number;
  x: number;
  y: number;
  width: number;
  vertical: boolean;
  delay: number;
}

interface NodeData {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface EdgeData {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
}

export default function CircuitBackground() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;

      setMouse({ x, y });
    };

    window.addEventListener("mousemove", move, { passive: true });

    return () => window.removeEventListener("mousemove", move);
  }, []);

  const traces = useMemo(() => {
    const arr: TraceData[] = [];

    for (let i = 0; i < 45; i++) {
      arr.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        width: 150 + Math.random() * 250,
        vertical: Math.random() > 0.5,
        delay: Math.random() * 12,
      });
    }

    return arr;
  }, []);


  
  const nodes = useMemo(() => {
    const arr: NodeData[] = [];

    for (let i = 0; i < 24; i++) {
      arr.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 2,
      });
    }

    return arr;
  }, []);


  const edges = useMemo(() => {
  const result: EdgeData[] = [];
  const connected = new Set<string>();

  nodes.forEach((node, index) => {
    const nearest = nodes
      .map((other, otherIndex) => ({
        other,
        otherIndex,
        distance: Math.hypot(
          node.x - other.x,
          node.y - other.y
        ),
      }))
      .filter(item =>
        item.otherIndex !== index &&
        item.distance < 22
      )
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 2);

    nearest.forEach(item => {
      const key = [index, item.otherIndex]
        .sort((a, b) => a - b)
        .join("-");

      if (connected.has(key)) return;

      connected.add(key);

      result.push({
        id: result.length,
        x1: node.x,
        y1: node.y,
        x2: item.other.x,
        y2: item.other.y,
        delay: Math.random() * 8,
      });
    });
  });

  return result;
}, [nodes]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

      {/* Fondo base */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* Glow cyan */}
      <div
        className="absolute rounded-full blur-[180px] opacity-[0.12] bg-cyan-500"
        style={{
          width: 500,
          height: 500,
          left: "-180px",
          top: "-150px",
          transform: `translate(${mouse.x}px, ${mouse.y}px)`,
        }}
      />

      {/* Glow violeta */}
      <div
        className="absolute rounded-full blur-[200px] opacity-[0.10] bg-violet-600"
        style={{
          width: 550,
          height: 550,
          right: "-200px",
          bottom: "-220px",
          transform: `translate(${-mouse.x}px, ${-mouse.y}px)`,
        }}
      />

      {/* Grid sutil */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
        }}
      />

      {/* Circuitos */}
      <div
        className="absolute inset-0 opacity-[0.42]"
        style={{
          transform: `translate(${mouse.x / 4}px, ${mouse.y / 4}px)`,
          transition: "transform 0.5s ease-out",
        }}
      >
        {traces.map((trace) => (
          <CircuitTrace key={trace.id} {...trace} />
        ))}

        {nodes.map((node) => (
          <CircuitNode key={node.id} {...node} />
        ))}
      </div>

      {/* Difuminado central */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              transparent 25%,
              rgba(5,8,22,0.28) 75%,
              rgba(5,8,22,0.65) 100%
            )
          `,
        }}
      />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

    </div>


    
  );

  <svg
  className="absolute inset-0 w-full h-full"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
>
  {edges.map(edge => {
    const path = `M ${edge.x1} ${edge.y1} L ${edge.x2} ${edge.y2}`;

    return (
      <g key={edge.id}>
        {/* Conexión verde tenue */}
        <path
          d={path}
          fill="none"
          stroke="#39FF14"
          strokeWidth="0.12"
          opacity="0.22"
        />

        {/* Pulso luminoso que recorre la conexión */}
        <path
          d={path}
          fill="none"
          stroke="#39FF14"
          strokeWidth="0.22"
          strokeLinecap="round"
          strokeDasharray="0.10 0.90"
          pathLength="1"
          className="circuit-flow"
          style={{
            animationDelay: `${edge.delay}s`,
          }}
        />
      </g>
    );
  })}
</svg>
}
