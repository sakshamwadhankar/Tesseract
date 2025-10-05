"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Image from "next/image";

interface LeaderboardEntry {
  id: number;
  teamName: string;
  votes: number;
  rank: number;
}

const initialData: LeaderboardEntry[] = [
  { id: 1, teamName: "Team Thor", votes: 15234, rank: 1 },
  { id: 2, teamName: "Iron Legion", votes: 14892, rank: 2 },
  { id: 3, teamName: "Cap's Avengers", votes: 13567, rank: 3 },
  { id: 4, teamName: "Guardians United", votes: 12345, rank: 4 },
  { id: 5, teamName: "Wakanda Forever", votes: 11234, rank: 5 },
  { id: 6, teamName: "Strange Alliance", votes: 10456, rank: 6 },
  { id: 7, teamName: "Spider Squad", votes: 9876, rank: 7 },
  { id: 8, teamName: "Ant-Man's Army", votes: 8765, rank: 8 },
];

export default function MarvelLeaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(initialData);
  const [animatingVotes, setAnimatingVotes] = useState<{ [key: number]: number }>({});
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});

  // Simulate vote updates every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * leaderboard.length);
      const voteIncrease = Math.floor(Math.random() * 100) + 50;

      setLeaderboard((prev) => {
        const updated = [...prev];
        updated[randomIndex] = {
          ...updated[randomIndex],
          votes: updated[randomIndex].votes + voteIncrease,
        };

        // Sort by votes and update ranks
        updated.sort((a, b) => b.votes - a.votes);
        updated.forEach((entry, index) => {
          entry.rank = index + 1;
        });

        // Trigger confetti for top 3
        if (updated[randomIndex].rank <= 3) {
          triggerConfetti();
        }

        return updated;
      });

      // Animate vote counter
      setAnimatingVotes((prev) => ({ ...prev, [randomIndex]: voteIncrease }));
      setTimeout(() => {
        setAnimatingVotes((prev) => {
          const newState = { ...prev };
          delete newState[randomIndex];
          return newState;
        });
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [leaderboard]);

  const triggerConfetti = () => {
    const duration = 2000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ["#FFD700", "#C0C0C0", "#CD7F32", "#4169E1"],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ["#FFD700", "#C0C0C0", "#CD7F32", "#4169E1"],
      });
    }, 250);
  };

  const playSound = (rank: number) => {
    // Create audio element dynamically for demo
    // In production, you'd use actual audio files
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Different frequencies for different ranks
    const frequencies = {
      1: 523.25, // C5 - Heroic
      2: 440.0, // A4 - Strong
      3: 392.0, // G4 - Brave
    };

    oscillator.frequency.value = frequencies[rank as keyof typeof frequencies] || 330.0;
    oscillator.type = "sine";

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return (
          <div className="relative w-24 h-24">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/bcc68ddc-63f1-440a-a861-cbf7483d32f0/generated_images/glowing-blue-tesseract-cube-from-marvel--308b07b3-20251004144402.jpg"
              alt="Tesseract Trophy"
              fill
              className="object-contain drop-shadow-[0_0_30px_rgba(100,200,255,0.8)]"
            />
          </div>
        );
      case 2:
        return (
          <div className="relative w-20 h-20">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/bcc68ddc-63f1-440a-a861-cbf7483d32f0/generated_images/captain-america-vibranium-shield-icon%2c-07a401e2-20251004144438.jpg"
              alt="Vibranium Shield"
              fill
              className="object-contain drop-shadow-[0_0_20px_rgba(192,192,192,0.6)]"
            />
          </div>
        );
      case 3:
        return (
          <div className="relative w-16 h-16">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/bcc68ddc-63f1-440a-a861-cbf7483d32f0/generated_images/iron-man-arc-reactor-glowing-blue%2c-cir-47eda056-20251004144446.jpg"
              alt="Arc Reactor"
              fill
              className="object-contain drop-shadow-[0_0_15px_rgba(205,127,50,0.5)]"
            />
          </div>
        );
      default:
        return null;
    }
  };

  const getPodiumStyles = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 border-yellow-300 shadow-[0_0_50px_rgba(255,215,0,0.6)]";
      case 2:
        return "bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 border-gray-200 shadow-[0_0_40px_rgba(192,192,192,0.5)]";
      case 3:
        return "bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 border-orange-300 shadow-[0_0_30px_rgba(205,127,50,0.4)]";
      default:
        return "bg-gradient-to-b from-blue-800 via-blue-900 to-black border-blue-600";
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black">
      {/* Cosmic Starfield Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-purple-900/10 to-black"></div>
        {/* Animated Stars */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Tesseract in Center */}
      <motion.div
        className="absolute left-1/2 top-40 -translate-x-1/2 w-48 h-48 opacity-20"
        animate={{
          y: [0, -20, 0],
          rotateY: [0, 360],
          rotateX: [0, 15, 0],
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/bcc68ddc-63f1-440a-a861-cbf7483d32f0/generated_images/glowing-blue-tesseract-cube-from-marvel--308b07b3-20251004144402.jpg"
          alt="Tesseract"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* 3D Gold Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wider">
            <span
              className="inline-block bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent"
              style={{
                textShadow:
                  "0 4px 8px rgba(0,0,0,0.8), 0 0 30px rgba(255,215,0,0.5), 2px 2px 0 rgba(218,165,32,0.8), 4px 4px 0 rgba(184,134,11,0.6)",
                filter: "drop-shadow(0 0 20px rgba(255,215,0,0.6))",
              }}
            >
              TESSERACT 2025
            </span>
          </h1>
          <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-4"></div>
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-widest bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent"
            style={{
              textShadow: "0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,215,0,0.4)",
            }}
          >
            HALL OF HEROES
          </h2>
        </motion.div>

        {/* Top 3 Podiums */}
        <div className="flex justify-center items-end gap-8 mb-16 flex-wrap">
          {/* 2nd Place */}
          {leaderboard[1] && (
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onMouseEnter={() => playSound(2)}
            >
              <div className="mb-4">{getRankIcon(2)}</div>
              <div
                className={`${getPodiumStyles(
                  2
                )} border-4 rounded-lg p-6 w-56 h-48 flex flex-col justify-between items-center transition-transform hover:scale-105 cursor-pointer`}
              >
                <div className="text-6xl font-bold text-white mb-2">2</div>
                <div className="text-white text-center">
                  <div className="font-bold text-xl mb-2">{leaderboard[1].teamName}</div>
                  <AnimatedCounter
                    value={leaderboard[1].votes}
                    isAnimating={animatingVotes[leaderboard[1].id] !== undefined}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* 1st Place */}
          {leaderboard[0] && (
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              onMouseEnter={() => playSound(1)}
            >
              <motion.div
                className="mb-4"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {getRankIcon(1)}
              </motion.div>
              <div
                className={`${getPodiumStyles(
                  1
                )} border-4 rounded-lg p-8 w-64 h-64 flex flex-col justify-between items-center transition-transform hover:scale-105 cursor-pointer`}
              >
                <motion.div
                  className="text-7xl font-bold text-white mb-2"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  1
                </motion.div>
                <div className="text-white text-center">
                  <div className="font-bold text-2xl mb-2">{leaderboard[0].teamName}</div>
                  <AnimatedCounter
                    value={leaderboard[0].votes}
                    isAnimating={animatingVotes[leaderboard[0].id] !== undefined}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* 3rd Place */}
          {leaderboard[2] && (
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onMouseEnter={() => playSound(3)}
            >
              <div className="mb-4">{getRankIcon(3)}</div>
              <div
                className={`${getPodiumStyles(
                  3
                )} border-4 rounded-lg p-6 w-56 h-40 flex flex-col justify-between items-center transition-transform hover:scale-105 cursor-pointer`}
              >
                <div className="text-5xl font-bold text-white mb-2">3</div>
                <div className="text-white text-center">
                  <div className="font-bold text-xl mb-2">{leaderboard[2].teamName}</div>
                  <AnimatedCounter
                    value={leaderboard[2].votes}
                    isAnimating={animatingVotes[leaderboard[2].id] !== undefined}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Remaining Rankings */}
        <motion.div
          className="max-w-4xl mx-auto space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {leaderboard.slice(3).map((entry, index) => (
            <motion.div
              key={entry.id}
              className="bg-gradient-to-r from-blue-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm border border-blue-500/30 rounded-lg p-6 flex items-center justify-between hover:border-blue-400/50 transition-all cursor-pointer group"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <div className="flex items-center gap-6">
                <div className="text-4xl font-bold text-blue-300 w-16 text-center group-hover:text-blue-100 transition-colors">
                  {entry.rank}
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">{entry.teamName}</div>
                  <AnimatedCounter
                    value={entry.votes}
                    isAnimating={animatingVotes[entry.id] !== undefined}
                  />
                </div>
              </div>
              <motion.div
                className="text-blue-400 text-xl"
                animate={{
                  opacity: animatingVotes[entry.id] ? [1, 0.5, 1] : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                {animatingVotes[entry.id] && (
                  <span className="text-green-400 text-sm ml-2">
                    +{animatingVotes[entry.id]}
                  </span>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function AnimatedCounter({
  value,
  isAnimating,
}: {
  value: number;
  isAnimating: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (isAnimating) {
      const start = displayValue;
      const end = value;
      const duration = 1000;
      const startTime = Date.now();

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const current = Math.floor(start + (end - start) * progress);
        setDisplayValue(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    } else {
      setDisplayValue(value);
    }
  }, [value, isAnimating]);

  return (
    <motion.div
      className="text-lg text-blue-200 font-mono"
      animate={isAnimating ? { scale: [1, 1.2, 1], color: ["#bfdbfe", "#22c55e", "#bfdbfe"] } : {}}
      transition={{ duration: 0.5 }}
    >
      {displayValue.toLocaleString()} votes
    </motion.div>
  );
}