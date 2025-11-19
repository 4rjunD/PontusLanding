"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const TextHoverEffect = ({
  text,
  duration,
  className,
  isVisible,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
  isVisible?: boolean;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });
  const [key, setKey] = useState(0);
  const uniqueId = React.useId();

  // Reset animation when section becomes visible
  useEffect(() => {
    if (isVisible) {
      setKey(prev => prev + 1);
    }
  }, [isVisible]);

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      key={key}
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 600 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn("select-none uppercase cursor-pointer", className)}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient
          id={`textGradient-${uniqueId}`}
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="25%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#80eeb4" />
              <stop offset="75%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id={`revealMask-${uniqueId}`}
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id={`textMask-${uniqueId}`}>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill={`url(#revealMask-${uniqueId})`}
          />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        fontSize="120"
        className="fill-transparent stroke-neutral-200 font-[helvetica] font-bold dark:stroke-neutral-800"
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        fontSize="120"
        className="fill-transparent stroke-white font-[helvetica] font-bold 
        dark:stroke-white"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke={`url(#textGradient-${uniqueId})`}
        strokeWidth="0.3"
        fontSize="120"
        mask={`url(#textMask-${uniqueId})`}
        className="fill-transparent font-[helvetica] font-bold"
      >
        {text}
      </text>
    </svg>
  );
};


export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #0F0F1166 50%, #3ca2fa33 100%)",
      }}
    />
  );
};

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer ref={footerRef} className="relative w-full bg-black border-t border-neutral-800">
      <FooterBackgroundGradient />
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Animated Pontus Text */}
          <div className="w-full h-32 md:h-40">
            <Link href="#hero" onClick={(e) => handleLinkClick(e, '#hero')}>
              <TextHoverEffect text="PONTUS" isVisible={isVisible} />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="#features"
              onClick={(e) => handleLinkClick(e, '#features')}
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#compare"
              onClick={(e) => handleLinkClick(e, '#compare')}
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              Compare Routes
            </Link>
            <Link
              href="#timeline"
              onClick={(e) => handleLinkClick(e, '#timeline')}
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              How It Works
            </Link>
          </nav>

          {/* Copyright */}
          <div className="text-sm text-neutral-500 text-center">
            © {new Date().getFullYear()} Pontus AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
