"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ShinyButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
}

const ShinyButton: React.FC<ShinyButtonProps> = ({ 
  children, 
  href, 
  onClick, 
  variant = "primary",
  className = "",
  ...props 
}) => {
  const baseStyles = "relative px-8 py-4 font-bold text-lg rounded-none overflow-hidden group transition-all duration-300 uppercase tracking-wider flex items-center gap-2";
  const variants = {
    primary: "bg-primary text-black hover:bg-[#b0ff29]",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <motion.span
          className="inline-block"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
        >
          <ArrowRight size={20} />
        </motion.span>
      </span>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-white/20 z-0"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.5 }}
        />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default ShinyButton;
