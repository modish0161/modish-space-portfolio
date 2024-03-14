"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useVelocity,
  useSpring,
} from "framer-motion";
import { cn } from "@/utils/cn";

export const TracingBeam = ({
  children, // Now optional
  className,
}: {
  children?: React.ReactNode; // Made optional by adding "?"
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Track velocity of scroll to increase or decrease distance between SVG gradient y coordinates.
  const scrollYProgressVelocity = useVelocity(scrollYProgress);
  const [velo, setVelocity] = useState(0);

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, [contentRef]);

  // Corrected useEffect with scrollYProgressVelocity as a dependency
  useEffect(() => {
    const unsubscribe = scrollYProgressVelocity.onChange((latestVelocity) => {
      setVelocity(latestVelocity);
    });
    return unsubscribe; // Proper cleanup on component unmount
  }, [scrollYProgressVelocity]); // Added scrollYProgressVelocity to dependency array

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full max-w-4xl mx-auto h-full", className)}
    >
      {/* Other component elements */}
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};

export default TracingBeam;
