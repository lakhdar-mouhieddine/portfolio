import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Determine if hovering over a clickable element
      const target = e.target;
      const clickable = target.closest('a, button, [role="button"]');
      setIsHovering(!!clickable);
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      {/* Outer trailing ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border-2 border-accentTeal pointer-events-none z-[100] hidden sm:flex justify-center items-center opacity-70"
        animate={{
          x: mousePosition.x - (isHovering ? 24 : 16),
          y: mousePosition.y - (isHovering ? 24 : 16),
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          mass: 0.5
        }}
      />
      {/* Inner instant dot */}
      <motion.div 
        className="fixed top-0 left-0 bg-accentNavy rounded-full pointer-events-none z-[100] hidden sm:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          width: 8,
          height: 8,
          scale: isHovering ? 0 : 1, // Shrink dot on hover
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 400,
          mass: 0.1
        }}
      />
    </>
  );
}
