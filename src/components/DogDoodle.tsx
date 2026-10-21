"use client";

import Image from "next/image";
import { useCallback, useId, useRef, type MouseEvent } from "react";

const DOG_LINE_PATH =
  "M740.0 162.0 L731.4 156.1 L724.8 147.9 L717.5 140.4 L709.0 134.3 L700.1 128.7 L691.4 122.9 L682.6 117.0 L673.6 111.7 L664.3 106.8 L654.9 102.0 L645.3 97.8 L635.3 94.8 L625.0 92.6 L614.6 91.1 L604.2 90.3 L593.7 90.8 L583.6 93.7 L573.3 94.8 L563.0 96.9 L554.4 102.7 L546.1 109.2 L538.0 115.8 L530.7 123.4 L525.0 132.2 L521.4 142.0 L521.9 152.4 L527.9 160.8 L537.2 165.5 L547.5 167.7 L558.0 167.8 L568.3 165.9 L577.8 161.5 L585.6 154.5 L591.3 145.7 L594.8 135.8 L595.4 125.4 L593.4 115.1 L589.5 105.4 L585.4 95.7 L578.9 87.7 L569.6 82.8 L560.8 77.1 L552.0 71.4 L542.7 66.5 L533.0 62.5 L523.2 58.9 L513.2 55.5 L503.1 52.7 L492.9 50.3 L482.6 48.3 L472.3 46.4 L461.9 44.7 L451.5 43.3 L441.1 42.0 L430.6 41.2 L420.1 40.7 L409.6 40.2 L399.1 40.3 L388.7 41.0 L378.2 42.0 L367.8 43.4 L357.5 45.3 L347.3 47.7 L337.1 50.3 L327.0 53.1 L316.9 56.1 L306.7 58.7 L296.6 61.3 L286.5 64.3 L276.4 67.0 L266.1 69.1 L255.8 71.3 L245.5 73.3 L235.1 74.9 L224.7 76.2 L214.3 77.4 L203.8 78.6 L193.4 79.6 L182.9 80.1 L172.4 80.3 L161.9 80.4 L151.4 80.2 L141.0 79.1 L130.6 77.5 L120.3 75.3 L110.3 72.3 L100.4 68.8 L90.5 65.2 L80.8 61.2 L71.4 56.6 L62.2 51.4 L53.4 45.7 L44.9 39.6 L36.4 33.4 L28.1 27.0 L20.3 20.0 L12.8 12.6";

const DURATION_MS = 1800;

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

export function DogDoodle() {
  const trailRef = useRef<SVGPathElement>(null);
  const frameRef = useRef(0);
  const gradientId = useId().replace(/:/g, "");

  const trigger = useCallback((event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const trail = trailRef.current;
    if (!trail) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    window.cancelAnimationFrame(frameRef.current);
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION_MS);
      const drawT = Math.min(1, t / 0.78);
      trail.setAttribute("stroke-dashoffset", String(100 - easeOutCubic(drawT) * 100));
      const opacity = t < 0.06 ? t / 0.06 : t > 0.82 ? 1 - (t - 0.82) / 0.18 : 1;
      trail.setAttribute("opacity", String(opacity));
      if (t < 1) frameRef.current = window.requestAnimationFrame(tick);
    };

    tick(start);
    frameRef.current = window.requestAnimationFrame(tick);
  }, []);

  return (
    <div className="home-dog-doodle">
      <Image
        src="/images/home-dog-doodle.png"
        alt="Line drawing of a dog standing on the GoodMaps project"
        width={988}
        height={414}
        unoptimized
        className="home-dog-doodle-img"
      />
      <svg
        className="home-dog-doodle-svg"
        viewBox="0 0 988 414"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`${gradientId}-rainbow`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff4d6d" />
            <stop offset="18%" stopColor="#ff9f1c" />
            <stop offset="36%" stopColor="#ffd60a" />
            <stop offset="54%" stopColor="#80ed99" />
            <stop offset="72%" stopColor="#4cc9f0" />
            <stop offset="100%" stopColor="#c77dff" />
          </linearGradient>
        </defs>
        <path
          className="home-dog-hit-path"
          d={DOG_LINE_PATH}
          fill="none"
          stroke="transparent"
          strokeWidth={28}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          ref={trailRef}
          className="home-dog-spark-stroke"
          d={DOG_LINE_PATH}
          pathLength={100}
          fill="none"
          stroke={`url(#${gradientId}-rainbow)`}
          strokeWidth={10}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="100 100"
          strokeDashoffset={100}
          opacity={0}
        />
      </svg>
      <button
        type="button"
        className="home-dog-hotspot"
        aria-label="Trace the doodle line in rainbow"
        onClick={trigger}
        onMouseDown={(event) => event.stopPropagation()}
      />
    </div>
  );
}
