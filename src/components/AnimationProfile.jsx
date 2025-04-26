import { motion } from "framer-motion";
import profile from '../assets/images/profile.jpg'

const AnimatedProfile = ({
  size = "md",
  showAnimation = true,
  src = profile,
}) => {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-40 h-40",
    lg: "w-64 h-64 md:w-80 md:h-80",
  };

  return (
    <div className="relative mt-5">
      <motion.div
        className={`${sizeClasses[size]} rounded-full border-4 border-primary relative overflow-hidden`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Replaced Next.js Image with a standard img tag */}
        <img src={src || "/placeholder.svg"} alt="Menghor Hou" className="object-cover w-full h-full" />

        {showAnimation && (
          <motion.div
            className="absolute inset-0 bg-primary/10"
            animate={{
              boxShadow: ["0 0 0 0 rgba(0, 153, 255, 0.7)", "0 0 0 20px rgba(0, 153, 255, 0)"],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />
        )}
      </motion.div>

      {showAnimation && (
        <>
          {/* Spinning border animation */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />

          {/* Second spinning border (opposite direction) */}
          <motion.div
            className="absolute inset-0 rounded-full border-t-4 border-primary"
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />

          {/* Pulsing glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: ["0 0 0 0px rgba(0, 153, 255, 0.4)", "0 0 0 10px rgba(0, 153, 255, 0)"],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              times: [0, 0.5, 1],
            }}
          />
        </>
      )}
    </div>
  );
};

export default AnimatedProfile;
